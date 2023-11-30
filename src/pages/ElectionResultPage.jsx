import Layout from "../components/common/Layout/Layout"
import Chart from "react-apexcharts";
import Title from "../components/common/Title/Title";
import ResultsHistory from "../components/ResultsHistory/ResultsHistory";
import SeatMap from "../components/common/SeatMap/SeatMap";

function convertToBanglaNumber(number) {
    const banglaDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];

    // Function to convert each digit of the number
    function convertDigit(digit) {
        if (digit >= 0 && digit <= 9) {
            return banglaDigits[digit];
        } else {
            return digit; // If not a digit, return as is (for decimal point, etc.)
        }
    }

    // Convert the number to a string and then convert each digit
    const banglaNumber = number.toString().split('').map(convertDigit).join('');

    return banglaNumber;
}

function ElectionResultPage() {
    const options = {
        chart: {
            height: 500,
            type: 'line',
            zoom: {
                enabled: true
            }
        },
        colors: ['#66c2a5', '#8da0cb', '#e78ac3', '#a6d854'],
        dataLabels: {
            enabled: true,
            // textAnchor: "middle",
            // style: { colors: ["#333"] },
            formatter: function (val) {
                let valueFormatted = convertToBanglaNumber(val)
                return valueFormatted;
            },
            dropShadow: { enabled: true }
        },
        tooltip: {
            style: {
                fontSize: '12px',
            },
            y: {
                formatter: function (val) {
                    return convertToBanglaNumber(val)
                }
            }
        },
        xaxis: {
            categories: ['২০১৪', '২০০৮', '২০০১', '১৯৯৬', '১৯৯১']
        },
        yaxis: {
            show: true,
            max: 300,
            labels: {
                formatter: (value) => { return convertToBanglaNumber(value) },
            }
        }
    }

    const series = [
        {
            name: "আ. লীগ",
            data: [234, 230, 59, 140, 85]
        },
        {
            name: "বিএনপি",
            data: [0, 30, 189, 104, 134]
        },
        {
            name: "জাতীয় পার্টি",
            data: [34, 27, 14, 29, 34]
        },
        {
            name: "অন্যান্য",
            data: [32, 13, 28, 6, 36]
        },
    ]

    return (
        <Layout>
            <section className="mb-12 md:mb-24">
                <div className="container mx-auto">
                    <div className="mb-8">
                        <Title text={'কার ভাগে কত আসন (১৯৯১-২০১৪'} underline="type2" />
                    </div>
                    <Chart
                        options={options}
                        series={series}
                        type="line"
                        width="100%"
                        height={420}
                    />
                </div>
            </section>
            <ResultsHistory />
            <div className="mb-4">
                <Title text={'দেখুন কে কোথায় জিতেছিল'} underline="type2"/>
            </div>
            <SeatMap/>
        </Layout>
    )
}

export default ElectionResultPage