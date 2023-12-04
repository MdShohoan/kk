import Card from '../components/common/CardCountUP/CardCountUP'
import DivisionNavigator from '../components/common/DivisionNavigator/DivisionNavigator'
import Layout from '../components/common/Layout/Layout'

import candidat1 from '../assets/candidatePhoto/asaduzzaman.webp'

import total_voter from '../assets/election/total-voter.png'
import total_candidate from '../assets/election/total-seat.png'
import male_voter from '../assets/election/male-voter.png'
import female_voter from '../assets/election/female-voter.png'
import Title from '../components/common/Title/Title'
import jatipartySymbol from '../assets/partyLogo/JatioyoPartyLogo.webp'
import { ScrollRestoration } from 'react-router-dom'

function SeatInfoPage() {

    const seatData = [
        { count: '১০৪১৯০৪৮০', title: 'মোট ভোটার', image: total_voter },
        { count: '৫২৫৪৭৩২৯', title: 'পুরুষ ভোটার', image: male_voter },
        { count: '৫১৬৪৩১৫১', title: 'নারী ভোটার ', image: female_voter },
        { count: '১৮৪৮', title: 'মোট প্রার্থী', image: total_candidate },
    ]

    const candidates = [
        {
            name: 'আসাদুজ্জামান নূর',
            party: 'আওয়ামী লীগ',
            symbol: 'নৌকা',
            photo: candidat1,
        },
        {
            name: 'আসাদুজ্জামান নূর',
            party: 'আওয়ামী লীগ',
            symbol: 'নৌকা',
            photo: candidat1,
        },
        {
            name: 'আসাদুজ্জামান নূর',
            party: 'আওয়ামী লীগ',
            symbol: 'নৌকা',
            photo: candidat1,
        },
        {
            name: 'আসাদুজ্জামান নূর',
            party: 'আওয়ামী লীগ',
            symbol: 'নৌকা',
            photo: candidat1,
        },
    ]

    return (
        <>
            <ScrollRestoration />
            <Layout>
                <section className='mb-12 md:mb-24'>
                    <div className='container'>
                        <div className='mb-5 md:mb-10'>
                            <Title text='জেনে নিন আপনার আসন সম্পর্কে' underline={'type1'} />
                        </div>
                        <div className='mb-8'>
                            <DivisionNavigator/>
                        </div>
                    </div>
                </section>
                <section className='mb-12 md:mb-24'>
                    <div className='container'>
                        <div className='mb-4'>
                            <span className='inline-block rounded-lg bg-primary-light text-2xl py-[6px] px-4 mb-2'>ঢাকা-১</span>
                            <div className='bg-gray1 h-[2px]' />
                        </div>

                        {/* ------------Seat information counter start---------- */}
                        <div className='grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-7'>
                            {
                                seatData.map((singleData, i) => (
                                    <Card key={i} type='type1' data={singleData} />
                                ))
                            }
                        </div>
                        {/* -----------Seat information counter end------- */}
                    </div>
                </section>
                <section className='mb-12 md:mb-24'>
                    <div className='container'>
                        <div className="mb-8">
                            <Title text={'প্রার্থী'} underline="type2" />
                        </div>
                        {/* -----------Candidates information start-------- */}
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            {
                                candidates.map((candidate, i) => (
                                    <div key={i} className="text-center cursor-pointer bg-[#b9b9b969] py-5 rounded-xl">
                                        <img src={candidate?.photo} className="bg-[#b9b9b969] mx-auto block border-4 border-[#fff] rounded-full shadow-[0_0_5px_rgba(0,0,0,0.6)]" />
                                        <div className="mt-5">
                                            <h2 className="text-lg font-bold text-[#547cf5] mb-2">{candidate?.name}</h2>
                                            <span className="block text-sm mb-[2px] font-normal text-[#000000cc]"><span className="font-semibold">দল:</span> {candidate?.party}</span>
                                            <span className="block text-sm font-normal text-[#000000cc]"><span className="font-semibold">প্রতীক:</span> {candidate?.symbol}</span>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        {/* ------------Candidates information end-------------- */}
                    </div>
                </section>
                <section className='mb-12 md:mb-24'>
                    <div className="container">
                        <div className="mb-8">
                            <Title text={'নির্বাচন ১৯৯১ থেকে ২০১৮'} underline="type2" />
                        </div>
                        <div className='grid grid-cols-1 gap-4 md:gap-0 md:grid-cols-2 md:[&>*:nth-child(odd)]:border-r'>
                            {
                                ['', '', '', '', '', ''].map((_, i) => (
                                    <div key={i} className='border md:border-0 md:border-t p-3 md:p-4 lg:p-8 xl:p-16'>
                                        <div className='bg-primary-light h-36 w-36 rounded-full mx-auto mb-8 text-center flex justify-center items-center flex-col'>
                                            <span className='block mb-2 text-2xl font-bold text-primary'>১২ ম</span>
                                            <span className='block text-gray-700 font-bold text-sm'>
                                                সংসদ নির্বাচন <br /> ২০১৪
                                            </span>
                                        </div>
                                        <div className='flex justify-between mb-8'>
                                            <div>
                                                <span className='block text-xl font-bold text-gray-700 mb-1'>৩,৭৫,৯৫৮</span>
                                                <span className='block text-gray1 text-sm font-semibold'>মোট ভোটার</span>
                                            </div>
                                            <div>
                                                <span className='block text-right text-xl font-bold mb-1 text-gray-700'>১৭৭</span>
                                                <span className='block text-right text-gray1 text-sm font-semibold'>মোট কেন্দ্র</span>
                                            </div>
                                        </div>
                                        <div className='flex flex-col md:flex-row items-center justify-center md:justify-between bg-primary-light p-8 rounded-md gap-6 md:gap-0'>
                                            <img className='w-14 md:w-[75px]' src={jatipartySymbol} alt="" />
                                            <div className='text-center md:text-right'>
                                                <div className='text-gray-700 font-bold mb-2'>সালমা ইসলাম</div>
                                                <div className='text-gray-700 text-sm mb-1'>দল: জাতীয় পার্টি </div>
                                                <div className='text-gray-700 text-sm mb-1'>প্রতীক: লাঙল </div>
                                                <div className='text-gray-700 text-sm mb-1'>প্রাপ্ত ভোট: ৫৩,৩৪১</div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}

export default SeatInfoPage