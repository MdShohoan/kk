import Chart from 'react-apexcharts';
import Section from '../Section/Section';
import alSymbol from '../../../assets/partyLogo/AwamiLeagueLogo.webp'
import jpSymbol from '../../../assets/partyLogo/JatioyoPartyLogo.webp'
const LiveChart = () => {

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
        // theme: {
        //     theme: {
        //         monochrome: {
        //             enabled: true,
        //             shadeTo: 'light',
        //             shadeIntensity: 0.65, // Adjust the intensity as needed (between 0 and 1)
        //         },
        //     },
        // },
        plotOptions: {
            pie: {
                startAngle: -90,
                endAngle: 90,
                offsetY: 0,
            },
        },
        grid: {
            padding: {
                bottom: -150,
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
                }
            }
        }],
        dataLabels: {
            enabled: false,
        },
        fill: {
            type: 'solid',
        },
        colors: ['#8c68cd', '#c5b3e6', '#e2d9f3', '#a98eda',],
    };

    const parties = [
        {
            partyName: 'আওয়ামী লীগ',
            wonSeat: '২০০',
            symbol: alSymbol,
        },
        {
            partyName: 'জাতীয় পার্টি',
            wonSeat: '২০০',
            symbol: jpSymbol,
        },
        {
            partyName: 'স্বতন্ত্র',
            wonSeat: '২০০',
            symbol: '',
        },
        {
            partyName: 'অন্যান্য',
            wonSeat: '২০০',
            symbol: '',
        },
    ]

    const series = [150, 25, 12, 100];

    return (
        <Section>
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    <div className="col-start-1 col-end-5 border">
                        <Chart options={options} series={series} type="pie"/>
                        <div className='pt-1 w-[300px] mx-auto'>
                            {
                                parties.map((party) => (
                                    <div key={party.partyName} className="grid grid-cols-3 gap-4 font-bold mb-2 last:mb-0">
                                        <div>{party.partyName}</div>
                                        <div>
                                            <img className="h-4" src={party?.symbol} />
                                        </div>
                                        <div>২০০</div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="md:col-start-5 md:col-end-7 border"></div>
                    <div className="md:col-start-7 md:col-end-13 border"></div>
                </div>
            </div>
        </Section>
    );
};

export default LiveChart;
