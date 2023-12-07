import Layout from "../components/common/Layout/Layout"
import Chart from "react-apexcharts";
import Title from "../components/common/Title/Title";
import ResultsHistory from "../components/ResultsHistory/ResultsHistory";
import SeatMap from "../components/common/SeatMap/SeatMap";
import { useState } from "react";
import clsx from "clsx";

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

    const [selectedYear, setSelectedYear] = useState('2018')
    const [selectedParty, setSelectedParty] = useState('')

    const years = [
        { inEnglish: '2018', inBangla: '২০১৮' },
        { inEnglish: '2014', inBangla: '২০১৪' },
        { inEnglish: '2008', inBangla: '২০০৮' },
        { inEnglish: '2001', inBangla: '২০০১' },
        { inEnglish: '1996', inBangla: '১৯৯৬' },
        { inEnglish: '1991', inBangla: '১৯৯১' }
    ]
    const parties = [
        {
            partyName: 'আ. লীগ',
            color: '#66c2a5',
            partyCode: 'bal'
        },
        {
            partyName: 'বিএনপি',
            color: '#8da0cb',
            partyCode: 'bnp'
        },
        {
            partyName: 'জাপা',
            color: '#e78ac3',
            partyCode: 'jp'
        },
        {
            partyName: 'অন্যান্য',
            color: '#a6d854',
            partyCode: 'ao'
        },

    ]

    // const colors = {bal: '#66c2a5', bnp: '#8da0cb', jp:'#e78ac3', ao: '#a6d854'}

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
                        <Title text={'কার ভাগে কত আসন (১৯৯১-২০১৪'} underline="type1" />
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
            <section className="mb-12">
                <div className=" container mx-auto">
                    <div className="mb-8">
                        <Title text={'দেখুন কে কোথায় জিতেছিল'} underline="type1" />
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                        <div className="col-span-full lg:col-span-1">
                            <div className="border p-5">
                                {/* -----Year selection button start---- */}
                                <div className='grid grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-5 mb-8'>
                                    {
                                        years.map((year, i) => (
                                            <a
                                                onClick={() => setSelectedYear(year.inEnglish)}
                                                className={clsx(
                                                    'border border-gray3 block px-2 py-1 rounded text-sm font-medium cursor-pointer hover:bg-gray3 hover:text-white transition-all duration-300 text-center',
                                                    {
                                                        'bg-gray3 text-white': selectedYear === year?.inEnglish,
                                                        'text-gray3': selectedYear !== year?.inEnglish

                                                    }
                                                )}
                                                key={i}
                                            >
                                                {year?.inBangla}
                                            </a>
                                        ))
                                    }
                                </div>
                                {/* -----Year selection button end---- */}

                                {/* -----Party selection button start---- */}
                                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-1 gap-6">
                                    {
                                        parties?.map((party) => (
                                            <div
                                                key={party?.partyCode}
                                                onClick={() => setSelectedParty(party?.partyCode)}
                                                className="flex gap-2 items-center cursor-pointer"
                                            >
                                                <span
                                                    style={{ background: party.color }}
                                                    className="inline-block w-4 h-4"
                                                ></span>
                                                <span
                                                    className={
                                                        clsx('text-sm hover:text-gray3 transition-all duration-300',
                                                            {
                                                                'text-[#66c2a5]': 'bal' === selectedParty && party.partyCode === selectedParty,
                                                                'text-[#8da0cb]': 'bnp' === selectedParty && party.partyCode === selectedParty,
                                                                'text-[#e78ac3]': 'jp' === selectedParty && party.partyCode === selectedParty,
                                                                'text-[#a6d854]': 'ao' === selectedParty && party.partyCode === selectedParty,
                                                            }
                                                        )
                                                    }

                                                >
                                                    {party?.partyName}
                                                </span>
                                            </div>
                                        ))
                                    }
                                </div>
                                {/* -----Party selection button end---- */}
                            </div>

                        </div>
                        <div className="border col-span-full lg:col-start-2 lg:col-end-5">
                            <SeatMap selectedParty={selectedParty} selectedYear={selectedYear} />
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default ElectionResultPage