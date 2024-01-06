import Chart from 'react-apexcharts';
import Section from '../Section/Section';
import AwamiLeagueLogo from '../../../assets/partyLogo/AwamiLeagueLogo.webp'
import BNPLogo from '../../../assets/partyLogo/BNPLogo.webp'
import JatiyoPartyLogo from '../../../assets/partyLogo/JatioyoPartyLogo.webp'
import toBengaliDigits from '../../../lib/toBanglaDigits';
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const LiveChart = () => {
    const navigate = useNavigate()

    const colors = [
        { light: '#85ceb7', dark: '#66c2a5' },
        { light: '#a4b3d5', dark: '#8da0cb' },
        { light: '#eca1cf', dark: '#e78ac3' },
        { light: '#b8e076', dark: '#a6d854' }
      ]

    const options = {
        chart: {
            type: 'pie',
            height: '100%',
            width: '100%'
        },
        legend: {
            show: false
        },
        labels: ["আওয়ামী লীগ", "জাতীয় পার্টি ", "স্বতন্ত্র ", "অন্যান্য"],
        plotOptions: {
            pie: {
                startAngle: -90,
                endAngle: 90,
                offsetY: 0,
            },
        },
        grid: {
            padding: {
                bottom: -170,
                left: 0,
                right: 0,
            }
        },
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: '100%'
                },
                legend: {
                    position: 'bottom'
                },
                grid: {
                    padding: {
                        bottom: -80,
                        left: 0,
                        right: 0,
                    }
                },
            }
        }],
        dataLabels: {
            enabled: true,
            textAnchor: "right",
            style: { colors: ["#333"], fontWeight: '700', fontSize: '14px' },
            formatter: function (val) {
                let valueFormatted = toBengaliDigits(val.toFixed(1))
                return valueFormatted + '%';
            },
            dropShadow: { enabled: true },
        },
        tooltip: {
            style: {
                fontSize: '12px',
            },
            y: {
                formatter: function (val) {
                    return toBengaliDigits(val)
                }
            }
        },
        fill: {
            type: 'solid',
        },
        colors: colors.map(color=>color.dark)
    };

    // const parties = [
    //     {
    //         partyName: 'আওয়ামী লীগ',
    //         wonSeat: '২০০',
    //         symbol: alSymbol,
    //     },
    //     {
    //         partyName: 'জাতীয় পার্টি',
    //         wonSeat: '২০০',
    //         symbol: jpSymbol,
    //     },
    //     {
    //         partyName: 'স্বতন্ত্র',
    //         wonSeat: '২০০',
    //         symbol: '',
    //     },
    //     {
    //         partyName: 'অন্যান্য',
    //         wonSeat: '২০০',
    //         symbol: '',
    //     },
    // ]

      const data = [
        { name: 'আ. লীগ জোট', logo: AwamiLeagueLogo, totalSeat: '৩০০', won: '২৬৬' },
        { name: 'বিএনপি জোট', logo: BNPLogo, totalSeat: '৩০০', won: '৭' },
        { name: 'জাতীয় পার্টি', logo: JatiyoPartyLogo, totalSeat: '৩০০', won: '২২' },
        { name: 'অন্যান্য', logo: '', totalSeat: '৩০০', won: '৪' },
      ]
      const series = [150, 25, 12, 100];

      const previousResult = [
        {
            year: '২০১৮',
            wonParty: 'আ. লীগ',
            wonSeat: '২৬৭'
        },
        {
            year: '২০১৪',
            wonParty: 'আ. লীগ',
            wonSeat: '২৩৪'
        },
        {
            year: '২০০৮',
            wonParty: 'আ. লীগ',
            wonSeat: '২৩০'
        },
        {
            year: '২০০১',
            wonParty: 'বিএনপি',
            wonSeat: '১৯৩'
        },
        {
            year: '১৯৯৬',
            wonParty: 'আ. লীগ',
            wonSeat: '১৪৬'
        },
        {
            year: '১৯৯১',
            wonParty: 'বিএনপি',
            wonSeat: '১৪২'
        },
      ]

      const headingCellStyle = `text-sm leading-4 text-[#000] font-normal bg-[#f0f0ed] rounded py-2 border-b border-gray-300 mr-1`

    return (
        <Section>
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    <div className="lg:col-start-1 lg:col-end-5 shadow-[0_0_12px_#0000009c] rounded-lg bg-primary-light">
                        <Chart options={options} series={series} type="pie"/>
                        <div className="bg-white p-4 text-center">
        <div>
          <div className="grid grid-cols-5 mb-1 [&>*:last-child]:mr-0">
            <div className={"col-start-1 col-end-4 " + headingCellStyle}>দল / জোট</div>
            <div className={headingCellStyle}>মোট আসন</div>
            <div className={headingCellStyle}>জয়ী</div>
          </div>

          {data?.map((party, i) => (
            <div key={party?.name} className="grid grid-cols-5 mb-1 text-sm md:text-base font-semibold text-[#333] [&>*:last-child]:mb-0">
              <div style={{ background: colors[i]?.light }} className="rounded-tl rounded-bl py-2 flex justify-center items-center">
                <img src={party?.logo} className="h-7 mx-auto" />
              </div>
              <div style={{ background: colors[i]?.dark }} className="col-start-2 col-end-4 mr-1 rounded-tr rounded-br flex justify-center items-center">{party?.name}</div>
              <div style={{ background: colors[i]?.light }} className={`mr-1 rounded flex justify-center items-center`}>{party?.totalSeat}</div>
              <div style={{ background: colors[i]?.dark }} className="rounded flex justify-center items-center">{party?.won}</div>
            </div>
          ))}
        </div>
      </div>
                    </div>
                    <div className="lg:col-start-5 lg:col-end-9 border"></div>
                    <div className="lg:col-start-9 lg:col-end-13 shadow-[0_0_12px_#0000009c] rounded-lg">
                        <div className='grid grid-cols-2 gap-4 p-4'>
                            {
                                previousResult?.map((data, i)=>(
                                    <div key={i} className='bg-primary-light rounded-md overflow-hidden'>
                                        <p className='text-center bg-primary text-primary-light p-2'>সংসদ নির্বাচন {data?.year}</p>
                                        <div className='flex p-4'>
                                            <div className='basis-full'>
                                                <p className='text-lg md:text-xl text-[#333] mb-1'>{data?.wonParty}</p>
                                                <p className='text-[#333]'>জয়ী দল</p>
                                            </div>
                                            <div className='basis-full'>
                                                <p className='text-right ext-lg md:text-xl text-[#333] mb-1'>{data?.wonSeat}</p>
                                                <p className='text-right text-[#333]'>প্রাপ্ত আসন</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                            <div 
                            onClick={()=> navigate('/election-result')}
                            className='col-span-full rounded-lg font-bold cursor-pointer text-center bg-primary text-primary-light p-2 flex justify-center items-center gap-1'
                            >
                                বিস্তারিত <IoIosArrowForward size={16}/>
                                </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default LiveChart;
