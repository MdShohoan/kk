import Chart from 'react-apexcharts';
import Section from '../Section/Section';
import AwamiLeagueLogo from '../../../assets/partyLogo/AwamiLeagueLogo.webp'
import JatiyoPartyLogo from '../../../assets/partyLogo/JatioyoPartyLogo.webp'
import toBengaliDigits from '../../../lib/toBanglaDigits';
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../Spinner/Spinner';

const LiveChart = () => {
    const navigate = useNavigate()
    const [news, setNews] = useState([])
    const [loading, setLoading] = useState(false)

    const url = 'https://bn-api.kalerkantho.com/api/election?page=1'

    const fetchData = async () => {
        setLoading(true)
        try {
            const res = await axios.get(url)
            setNews(res?.data?.data)
        } catch (error) {
            console.log(error)
        }
        finally {
            setLoading(false)
        }
    }

    const openNewTab = (url) => {
        window.open(url, "_blank")
    }

    useEffect(() => {
        fetchData()
    }, [])

    const colors = [
        { light: '#85ceb7', dark: '#66c2a5' },//Al
        { light: '#eca1cf', dark: '#e78ac3' },// Jp
        { light: '#b8e076', dark: '#a6d854' }, // other party
        { light: '#afc8e5', dark: '#739fd1' },//No party
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
        labels: ["আওয়ামী লীগ", "জাতীয় পার্টি", "অন্যান্য", "স্বতন্ত্র"],
        plotOptions: {
            pie: {
                startAngle: -90,
                endAngle: 90,
                offsetY: 0,
            },
        },
        grid: {
            padding: {
                bottom: -190,
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
                        bottom: -150,
                        left: 0,
                        right: 0,
                    }
                },
            }
        },

        {
            breakpoint: 400,
            options: {
                chart: {
                    width: '100%'
                },
                legend: {
                    position: 'bottom'
                },
                grid: {
                    padding: {
                        bottom: -130,
                        left: 0,
                        right: 0,
                    }
                },
            }
        },

        ],
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
        colors: colors.map(color => color.dark)
    };

    const data = [
        { name: 'আওয়ামী লীগ', logo: AwamiLeagueLogo, totalSeat: '৩০০', won: '২২৪' },
        { name: 'জাতীয় পার্টি', logo: JatiyoPartyLogo, totalSeat: '৩০০', won: '১১' },
        { name: 'অন্যান্য', logo: '', totalSeat: '৩০০', won: '১' },
        { name: 'স্বতন্ত্র', logo: '', totalSeat: '৩০০', won: '৬২' },
    ]

    //Al, jp, other party, no party
    const series = [224, 11, 1, 62];

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
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
                    <div className="lg:col-start-1 lg:col-end-5 shadow-[0_0_12px_#0000009c] rounded-lg bg-primary-light overflow-hidden">
                        <Chart options={options} series={series} type="pie" />
                        <div className="bg-white p-4 text-center">
                            <div>
                                <div className="grid grid-cols-4 mb-1 [&>*:last-child]:mr-0">
                                    <div className={"col-start-1 col-end-4 " + headingCellStyle}>দল / জোট</div>
                                    <div className={headingCellStyle}>জয়ী</div>
                                </div>

                                {data?.map((party, i) => (
                                    <div key={party?.name} className="grid grid-cols-4 mb-1 text-sm md:text-base font-semibold text-[#333] [&>*:last-child]:mb-0">
                                        <div style={{ background: colors[i]?.light }} className="rounded-tl rounded-bl py-2 flex justify-center items-center">
                                            <img src={party?.logo} className="h-7 mx-auto" />
                                        </div>
                                        <div style={{ background: colors[i]?.dark }} className="col-start-2 col-end-4 mr-1 rounded-tr rounded-br flex justify-center items-center">{party?.name}</div>
                                        <div style={{ background: colors[i]?.light }} className="rounded flex justify-center items-center">{party?.won}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-start-5 lg:col-end-9 shadow-[0_0_12px_#0000009c] rounded-lg">
                        <div className='grid grid-cols-2 gap-4 p-4'>
                            {
                                previousResult?.map((data, i) => (
                                    <div key={i} className='bg-primary-light rounded-tl-md rounded-tr-md overflow-hidden'>
                                        <p className='text-center bg-primary text-primary-light p-1 text-sm'>সংসদ নির্বাচন {data?.year}</p>
                                        <div className='flex px-2 py-3'>
                                            <div className='basis-full'>
                                                <p className='text-base text-[#333] mb-1 font-bold'>{data?.wonParty}</p>
                                                <p className='text-[#333] text-xs md:text-sm'>জয়ী দল</p>
                                            </div>
                                            <div className='basis-full'>
                                                <p className='text-right text-base text-[#333] mb-1 font-bold'>{data?.wonSeat}</p>
                                                <p className='text-right text-[#333] text-xs md:text-sm'>প্রাপ্ত আসন</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                            <div
                                onClick={() => navigate('/election-result')}
                                className='col-span-full rounded-lg cursor-pointer text-center bg-primary text-primary-light p-1 flex justify-center items-center gap-1'
                            >
                                বিস্তারিত <IoIosArrowForward size={16} />
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-start-9 lg:col-end-13 rounded-lg p-3 shadow-[0_0_12px_#0000009c]">
                        {
                            loading ? (<Spinner className={'w-full h-full'} />) : (<>
                                <div className='flex flex-col gap-3 mb-5'>
                                    {
                                        news?.slice(0, 4)?.map((story) => (
                                            <div
                                                onClick={() => openNewTab(story?.detailsUrl)}
                                                key={story?.n_id}
                                                className='flex gap-4 group cursor-pointer border-b pb-2 last:border-b-0'
                                            >
                                                <div className='basis-1/3 rounded-lg overflow-clip' >
                                                    <img src={story.thumb_image} className='w-full h-16 object-cover group-hover:scale-105 transition-all duration-500' />
                                                </div>
                                                <div className='basis-2/3'>
                                                    <h1 className='text-lg mb-2 leading-[22px] font-bold text-[#333] group-hover:text-primary transition-all duration-500'>{story?.n_head}</h1>
                                                </div>
                                            </div>
                                        ))
                                    }

                                </div>
                                <div
                                    onClick={() => navigate('/news')}
                                    className='col-span-full rounded-lg cursor-pointer text-center bg-primary text-primary-light p-1 flex justify-center items-center gap-1'
                                >
                                    আরো<IoIosArrowForward size={16} />
                                </div>
                            </>)
                        }

                    </div>
                </div>
            </div >
        </Section >
    );
};

export default LiveChart;
