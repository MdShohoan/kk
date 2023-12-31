import toBengaliDigits from "../../lib/toBanglaDigits";
import ColorBoxes from "../common/ColorBoxes/ColorBoxes";
import Section from "../common/Section/Section";
import Title from "../common/Title/Title";
import Chart from "react-apexcharts";

export default function ResultsHistory({data}) {

    const options = {
        chart: {
            type: 'pie',
        },
        plotOptions: {
            pie: {
                customScale: 0.7,
                dataLabels: {
                    offset: 40,
                },
            },
        },
        colors: ['#66c2a5', '#8da0cb', '#e78ac3', '#a6d854'],
        labels: ['আ. লীগ জোট', 'বিএনপি জোট', 'জাতীয় পার্টি', 'অন্যান্য'],
        legend: {
            show: false
        },
        dataLabels: {
            enabled: true,
            textAnchor: "right",
            style: { colors: ["#333"], fontWeight: '500', fontSize: '16px' },
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

        responsive: [{
            breakpoint: 480,
            options: {
                plotOptions: {
                    pie: {
                        customScale: 0.8,
                        dataLabels: {
                            offset: 20,
                        },
                    },
                },
                dataLabels: {
                    enabled: true,
                    textAnchor: "right",
                    style: { colors: ["#333"], fontWeight: '500', fontSize: '10px' },
                    formatter: function (val) {
                        let valueFormatted = toBengaliDigits(val.toFixed(1))
                        return valueFormatted + '%';
                    },
                    dropShadow: { enabled: true },
                },
                legend: {
                    position: 'bottom'
                },
            }
        }]
    }


    return (
        <Section>
            <div className="container mx-auto">
                <Title>
                    ফলাফল (১৯৯১-২০১৮)
                </Title>
                <div className="mb-5">
                    <ColorBoxes />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                    {
                        data.map((singleData, i) => (
                            <div className="border flex flex-col justify-center items-center py-4 md:py-6 bg-[#F0F8FF]" key={i}>
                                <Chart options={options} series={singleData?.series} type="pie" />
                                <p className="text-center text-[#1380c5] text-lg mt-4 font-semibold">{singleData?.year}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </Section>
    )
}