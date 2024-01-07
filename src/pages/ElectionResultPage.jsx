import Layout from "../components/common/Layout/Layout"
import Chart from "react-apexcharts";
import Title from "../components/common/Title/Title";
import ResultsHistory from "../components/ResultsHistory/ResultsHistory";
import SeatMap from "../components/common/SeatMap/SeatMap";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { ScrollRestoration, useLocation } from "react-router-dom";
import Section from "../components/common/Section/Section";
import toBengaliDigits from "../lib/toBanglaDigits";
import result from '../assets/data/result.json'

function ElectionResultPage() {

    const [selectedYear, setSelectedYear] = useState('2018')
    const [selectedParty, setSelectedParty] = useState('')

    const resultSectionRef = useRef(null);
    const compareSectionRef = useRef(null);
    const { state } = useLocation();

    useEffect(() => {
        const scrollToSection = (sectionRef) => {
            const sectionTop = sectionRef.current.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: sectionTop - 90,
                behavior: 'smooth',
            });
        };

        if (state?.from === 'result') {
            scrollToSection(resultSectionRef);
        } else if (state?.from === 'win-lose') {
            scrollToSection(compareSectionRef);
        }
    }, [state]);


    //Pie Chart Data
    const pieChartData = result.data.map((item) => {
        return { year: item.year, series: [item?.alSeat, item?.bnpSeat, item?.jpSeat, item?.aoSeat] }
    })

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
            name: "আ. লীগ",
            key: 'alSeat',
        },
        {
            name: "বিএনপি",
            key: 'bnpSeat',
        },
        {
            name: "জাতীয় পার্টি",
            key: 'jpSeat',
        },
        {
            name: "অন্যান্য",
            key: 'aoSeat',
        },
    ]

    //Compare chart data
    const compareChartData = parties.map((party) => {
        return {
            name: party?.name,
            data: result?.data?.map((singleResult) => singleResult[party?.key])

        }
    })

    const partiesColor = [
        {
            partyName: 'সব দল',
            color: '',
            partyCode: ''
        },
        {
            partyName: 'আ. লীগ',
            color: '#66c2a5',
            partyCode: 'al'
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
                let valueFormatted = toBengaliDigits(val)
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
                    return toBengaliDigits(val)
                }
            }
        },
        xaxis: {
            categories: ['২০১৮', '২০১৪', '২০০৮', '২০০১', '১৯৯৬', '১৯৯১']
        },
        yaxis: {
            show: true,
            max: 300,
            labels: {
                formatter: (value) => { return toBengaliDigits(value) },
            }
        }
    }


    return (
        <Layout>
            <ScrollRestoration />
            <Section>
                <div className="container mx-auto">
                    <Title>
                        কার ভাগে কত আসন (১৯৯১-২০১৮)
                    </Title>
                    <Chart
                        options={options}
                        series={compareChartData}
                        type="line"
                        width="100%"
                        height={420}
                    />
                </div>
            </Section>
            <div ref={resultSectionRef}>
                <ResultsHistory data={pieChartData} />
            </div>
            <div ref={compareSectionRef}>
                <Section>
                    <div className=" container mx-auto">
                        <div className="mb-8">
                            <Title>
                                দেখুন কে কোথায় জিতেছিল
                            </Title>
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
                                    <div className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-1 gap-6">
                                        {
                                            partiesColor?.map((party) => (
                                                <div
                                                    key={party?.partyCode}
                                                    onClick={() => setSelectedParty(party?.partyCode)}
                                                    className="flex gap-2 items-center cursor-pointer"
                                                >
                                                    {
                                                        party?.color ? (
                                                            <span
                                                                style={{ background: party?.color }}
                                                                className="inline-block w-4 h-4"
                                                            />
                                                        ) : (
                                                            <span className="w-4 h-4 grid grid-cols-2 grid-rows-2">
                                                                <span style={{ background: '#66c2a5' }} />
                                                                <span style={{ background: '#8da0cb' }} />
                                                                <span style={{ background: '#e78ac3' }} />
                                                                <span style={{ background: '#a6d854' }} />
                                                            </span>
                                                        )
                                                    }
                                                    <span
                                                        className={
                                                            clsx('text-sm hover:text-gray3 transition-all duration-300',
                                                                {
                                                                    'text-[#66c2a5]': 'al' === selectedParty && party.partyCode === selectedParty,
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
                </Section>
            </div>
        </Layout>
    )
}

export default ElectionResultPage