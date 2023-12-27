import Card from '../components/common/CardCountUP/CardCountUP'
import SeatNavigator from '../components/common/SeatNavigator/SeatNavigator'
import Layout from '../components/common/Layout/Layout'
import Section from '../components/common/Section/Section'

// import candidat1 from '../assets/candidatePhoto/asaduzzaman.webp'
import total_voter from '../assets/election/total-voter.png'
import total_candidate from '../assets/election/total-candidate.png'
import male_voter from '../assets/election/male-voter.png'
import female_voter from '../assets/election/female-voter.png'
import common_gender from '../assets/election/common-gender.png'
import Title from '../components/common/Title/Title'

import jatipartySymbol from '../assets/partyLogo/JatioyoPartyLogo.webp'
import AwamiLeagueLogo from '../assets/partyLogo/AwamiLeagueLogo.webp'
import BNPLogo from '../assets/partyLogo/BNPLogo.webp'
import dariPalla from '../assets/partyLogo/dari-palla.webp'
import masal from '../assets/partyLogo/masal.webp'


import { Navigate, ScrollRestoration, useParams } from 'react-router-dom'

import seatPreviousResult from '../assets/data/seatPreviousResult.json'
import seatList from '../assets/data/seatsList/seatsList'
import { useEffect, useState } from 'react'
import toBengaliDigits from '../lib/toBanglaDigits'
import cn from '../lib/cn'
import candidatesData from '../assets/data/candidatesData.json'

// console.log('===seat previous result', seatPreviousResult)


function SeatInfoPage() {
    const { seatNo } = useParams()
    const [previousResult, setPreviousResult] = useState([])

    let BASE_URL = 'http://localhost:5173'
    if(process.env.NODE_ENV === 'production'){
        BASE_URL = 'https://superb-mandazi-0bd10a.netlify.app'
    }
    useEffect(() => {
        setPreviousResult([...filterResultByIdAndElectionNineToLatest(), ...filterResultByNameAndElectionEightToPrevious()])
    }, [seatNo])

    //Find seat by seatNo
    function findSeatById() {
        for (const division of seatList) {
            const foundSeat = division?.seats?.find(seat => seat?.seatNo === seatNo);

            if (foundSeat) {
                return foundSeat.seatName;
            }
        }
        return false
    }

    //Filter result by seatNo and election 9 to latest
    function filterResultByIdAndElectionNineToLatest() {
        return seatPreviousResult?.data?.filter((sr) => sr?.seatNo == seatNo && sr.electionNoEn >= 9)
    }

    //Filter result by seatName and election 8 to previous
    function filterResultByNameAndElectionEightToPrevious() {
        return seatPreviousResult?.data?.filter((sr) => sr?.seatName === findSeatById() && sr.electionNoEn <= 8)
    }

    //Filter candidates by seat
    const currentCandidates = candidatesData?.data?.filter((seat)=>seat?.seatName == seatNo)

    const symbols = [
        {
            symbolName: 'নৌকা',
            symbolImage: AwamiLeagueLogo
        },
        {
            symbolName: 'ধানের শীষ',
            symbolImage: BNPLogo,
        },
        {
            symbolName: 'দাঁড়িপাল্লা',
            symbolImage: dariPalla,
        },
        {
            symbolName: 'লাঙল',
            symbolImage: jatipartySymbol,
        },
        // {
        //     symbolName: 'হাতুড়ি',
        //     symbolImage: '',
        // },
        // {
        //     symbolName: 'কাস্তে',
        //     symbolImage: '',
        // },
        {
            symbolName: 'মশাল',
            symbolImage: masal,
        },
    ]

    //Set Party Symbol
    function setPartySymbol(result) {
        const found = symbols.find((symbol) => symbol.symbolName === result.symbol)
        if (found) {
            return found?.symbolImage
        }

        return ''
    }


    const seatData = [
        { count: '১০৪১৯০৪৮০', title: 'মোট ভোটার', image: total_voter },
        { count: '৫২৫৪৭৩২৯', title: 'পুরুষ ভোটার', image: male_voter },
        { count: '৫১৬৪৩১৫১', title: 'নারী ভোটার ', image: female_voter },
        { count: '৫', title: 'হিজড়া ভোটার ', image: common_gender },
        { count: '১৮৪৮', title: 'মোট প্রার্থী', image: total_candidate },
    ]

    // const candidates = [
    //     {
    //         name: 'আসাদুজ্জামান নূর',
    //         party: 'আওয়ামী লীগ',
    //         symbol: 'নৌকা',
    //         photo: candidat1,
    //     },
    //     {
    //         name: 'আসাদুজ্জামান নূর',
    //         party: 'আওয়ামী লীগ',
    //         symbol: 'নৌকা',
    //         photo: candidat1,
    //     },
    //     {
    //         name: 'আসাদুজ্জামান নূর',
    //         party: 'আওয়ামী লীগ',
    //         symbol: 'নৌকা',
    //         photo: candidat1,
    //     },
    //     {
    //         name: 'আসাদুজ্জামান নূর',
    //         party: 'আওয়ামী লীগ',
    //         symbol: 'নৌকা',
    //         photo: candidat1,
    //     },
    // ]

    if(!findSeatById()){
        return <Navigate to={'/'}/>
    }

    return (
        <>
            <ScrollRestoration />
            <Layout>
                <Section>
                    <div className='container'>
                        <div className='mb-4'>
                            <span className='inline-block rounded-lg bg-primary-light text-2xl py-[6px] px-4 mb-2'>
                                {findSeatById()}
                            </span>
                            <div className='bg-gray1 h-[2px]' />
                        </div>

                        {/* ------------Seat information counter start---------- */}
                        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-8'>
                            {
                                seatData.map((singleData, i) => (
                                    <Card key={i} type='type1' data={singleData} />
                                ))
                            }
                        </div>
                        {/* -----------Seat information counter end------- */}
                    </div>
                </Section>

                <Section>
                    <div className='container'>
                        <Title>
                            প্রার্থী
                        </Title>
                        {/* -----------Candidates information start-------- */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-8">
                            {
                                currentCandidates?.map((candidate, i) => (
                                    <div key={i} className="text-center cursor-pointer bg-[#b9b9b969] py-5 rounded-xl">
                                        <img
                                            src={`${BASE_URL}/src/assets/candidates/${candidate?.candidateImage}`}
                                            className="bg-[#b9b9b969] w-[100px] md:w-[130px] mx-auto block border-4 border-[#fff] rounded-full shadow-[0_0_5px_rgba(0,0,0,0.6)]"
                                        />
                                        <div className="mt-5">
                                            <h2 className="text-lg font-bold text-[#547cf5] mb-2">{candidate?.candidateName}</h2>
                                            <span className="block text-sm mb-[2px] font-normal text-[#000000cc]"><span className="font-semibold">দল:</span> {candidate?.partyName}</span>
                                            <span className="block text-sm font-normal text-[#000000cc]"><span className="font-semibold">প্রতীক:</span> {candidate?.symbol}</span>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        {/* ------------Candidates information end-------------- */}
                    </div>
                </Section>

                <Section>
                    <div className="container">
                        <Title>
                            নির্বাচন ১৯৯১ থেকে ২০১৮
                        </Title>
                        <div className='grid grid-cols-1 gap-4 md:gap-0 md:grid-cols-2 md:[&>*:nth-child(odd)]:border-r'>
                            {
                                previousResult.map((result, i) => (
                                    <div key={i} className={
                                        `border md:border-0 md:border-t border-primary-background p-3 md:p-4 lg:p-8 xl:p-16 relative
                                        before:absolute before:w-[4px] before:h-64 before:bg-primary-light before:top-[15%] before:left-1/2 before:-translate-x-1/2 before:z-10
                                        `
                                    }>
                                        <div className='bg-primary-light h-36 w-36 rounded-full mx-auto mb-8 text-center flex justify-center items-center flex-col'>
                                            <span className='block mb-2 text-2xl font-bold text-primary relative z-20'>
                                                {toBengaliDigits(result?.electionNoEn)} ম
                                            </span>
                                            <span className='block text-gray-700 font-bold text-sm relative z-30'>
                                                সংসদ নির্বাচন <br /> {toBengaliDigits(result?.electionYearEn)}
                                            </span>
                                        </div>
                                        <div className={cn(
                                            `flex justify-between mb-8 relative 
                                            after:absolute after:w-full after:h-[4px] after:bg-primary-light after:top-1/2 after:-translate-y-1/2
                                            before:absolute before:w-5 before:h-5 before:z-40 before:bg-white before:rounded-full before:border-2 before:border-primary-light before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2
                                            `,
                                            !result?.totalCenter && 'invisible', !result?.totalVoter && 'invisible'
                                        )}>
                                            <div className={
                                                cn('bg-primary-light py-2 px-4 rounded')
                                            }
                                            >
                                                <span className='block text-xl font-bold text-gray-700 mb-1'>{result?.totalVoter || '০'}</span>
                                                <span className='block text-gray1 text-sm font-semibold'>মোট ভোটার</span>
                                            </div>
                                            <div className={cn('bg-primary-light py-2 px-4 rounded')}>
                                                <span className='block text-right text-xl font-bold mb-1 text-gray-700'>{result?.totalCenter || '০'}</span>
                                                <span className='block text-right text-gray1 text-sm font-semibold'>মোট কেন্দ্র</span>
                                            </div>
                                        </div>
                                        <div className='flex flex-col md:flex-row items-center justify-center md:justify-between bg-primary-light p-8 rounded-md gap-6 md:gap-0 relative z-20'>
                                            <img
                                                className='w-14 md:w-[75px]'
                                                src={`${setPartySymbol(result)}`}
                                                alt=""
                                            />
                                            <div className='text-center md:text-right'>
                                                <div className='text-gray-700 font-bold mb-2'>{result?.WinningCandidate}</div>
                                                <div className='text-gray-700 text-sm mb-1'>দল: {result?.partyName} </div>
                                                <div className='text-gray-700 text-sm mb-1'>প্রতীক: {result?.symbol} </div>
                                                <div className='text-gray-700 text-sm mb-1'>প্রাপ্ত ভোট: {result?.winningVote}</div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </Section>

                <Section>
                    <div className='container'>
                        <Title>
                            জেনে নিন আপনার আসন সম্পর্কে
                        </Title>
                        <SeatNavigator />
                    </div>
                </Section>
            </Layout>
        </>
    )
}

export default SeatInfoPage