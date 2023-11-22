import Card from '../components/common/CardCountUP/CardCountUP'
import DivisionNavigator from '../components/common/DivisionNavigator/DivisionNavigator'
import Layout from '../components/common/Layout/Layout'

import candidat1 from '../assets/candidatePhoto/asaduzzaman.webp'

import total_voter from '../assets/election/total-voter.png'
import total_candidate from '../assets/election/total-seat.png'
import male_voter from '../assets/election/male-voter.png'
import female_voter from '../assets/election/female-voter.png'
import Title from '../components/common/Title/Title'
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
             <ScrollRestoration/>
            <Layout>
                <section className='mb-12 md:mb-24'>
                    <div className='container'>
                        <div className='mb-8'>
                            <DivisionNavigator />
                        </div>

                        <div className='mb-4'>
                            <span className='inline-block rounded-lg bg-primary-light text-2xl py-[6px] px-4 mb-2'>ঢাকা-১</span>
                            <div className='bg-gray1 h-[2px]' />
                        </div>

                        {/* ------------Seat information counter start---------- */}
                        <div className='grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-7 mb-12'>
                            {
                                seatData.map((singleData, i) => (
                                    <Card key={i} type='type1' data={singleData} />
                                ))
                            }
                        </div>
                        {/* -----------Seat information counter end------- */}

                        {/* -----------Candidates information start-------- */}
                        <div className="mb-8">
                            <Title text={'প্রার্থী'} underline="type2" />
                        </div>
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
            </Layout>
        </>
    )
}

export default SeatInfoPage