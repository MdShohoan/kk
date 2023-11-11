import Gap from "../common/Gap/Gap";
import Title from "../common/Title/Title";
import Chart from "react-apexcharts";

export default function ResultsHistory() {

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

    const data = [
        {
            year: '২০১৪',
            electionNo: '',
            series: [44, 55, 13, 43]
        },
        {
            year: '২০০৮',
            electionNo: '',
            series: [44, 55, 13, 43]
        },
        {
            year: '২০০১',
            electionNo: '',
            series: [44, 55, 13, 43]
        },
        {
            year: '১৯৯৬',
            electionNo: '',
            series: [44, 55, 13, 43]
        },
        {
            year: '১৯৯১',
            electionNo: '',
            series: [150, 100, 40, 10]
        },
    ]

    const options = {
        chart: {
            // width: 200,
            type: 'pie',
        },
        labels: ['আ. লীগ জোট', 'বিএনপি জোট', 'জাতীয় পার্টি', 'অন্যান্য'],
        legend: {
            show: false
        },
        dataLabels: {
            enabled: true,
            textAnchor: "middle",
            style: { colors: ["#000"] },
            formatter: function (val) {
                let valueFormatted = convertToBanglaNumber(val.toFixed(1))
                return valueFormatted + '%';
            },
            dropShadow: { enabled: true }
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return convertToBanglaNumber(val)
                }
            }
        },
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    position: 'bottom'
                }
            }
        }]
    }


    return (
        <div className="container mx-auto">
            <Title text={'ফলাফল (১৯৯১-২০১৪)'} underline="type1" />
            <Gap />
            <div></div>
            <div className="grid grid-cols-5 gap-8">
                {
                    data.map((singleData, i) => (
                        <div className="border flex flex-col justify-center items-center py-8" key={i}>
                            <Chart options={options} series={singleData?.series} type="pie" width={200} />
                            <p className="text-center text-[#1380c5] text-xl font-semibold">{singleData?.year}</p>
                        </div>
                    ))
                }
            </div>
            <Gap />
        </div>
    )
}