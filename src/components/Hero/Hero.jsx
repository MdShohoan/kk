import { useLocation, useParams } from 'react-router-dom';
import ECLogo from '../../assets/EC/ECLogo.png'
import DistrictMap from '../common/DistrictMap/DistrictMap';
import CountdownTimer from '../common/CountdownTimer/CountdownTimer';
import { useEffect, useState } from 'react';
import clsx from 'clsx';

function Hero() {
    const [page, setPage] = useState(null)
    const currentLocation = useLocation()
    const { districtNo } = useParams()
    const { seatNo } = useParams()
    const path = currentLocation?.pathname

    {/* section mb-12, text-mt-64px, border-radious: 250px */ }

    useEffect(() => {
        if (path === '/') {
            setPage('home')
        }
        else if (path.startsWith('/districts') && districtNo) {
            setPage('districtDetails')
        }
        else if (path.startsWith('/districts')) {
            setPage('districts')
        }
        else if (path.startsWith('/seats') && seatNo) {
            setPage('seatDetails')
        }
        else if (path.startsWith('/seats')) {
            setPage('seats')
        }
        else if (path.startsWith('/election-result')) {
            setPage('results')
        }
    }, [districtNo, path, seatNo])

    console.log('current page', page)
    const electionDate = ['৭', 'জানুয়ারি', '২০২৪']

    const heroTitle = {
        districtDetails: 'নিজ জেলা সম্পর্কে জানুন',
        districts: 'নিজ জেলা সম্পর্কে জানুন',
        seats: 'নিজ আসন সম্পর্কে জানুন',
        seatDetails: 'নিজ আসন সম্পর্কে জানুন',
        home: 'দ্বাদশ জাতীয় সংসদ নির্বাচন ২০২৪',
        results: 'নির্বাচনের ফলাফল সম্পর্কে জানুন'
    }

    const heroImage = {
        districtDetails: <div className='mt-2 md:mt-1'><DistrictMap /></div>,
        districts: <></>,
        seats: <></>,
        seatDetails: <div className='mt-2 md:mt-1'><DistrictMap /></div>,
        home: <img src={ECLogo} className='w-[220px] md:w-auto' />,
        results: <></>
    }

    return (
        <section className={
            clsx(
                'bg-primary-light h-auto md:h-fit pt-12 pb-12 md:rounded-br-[250px] mb-12', 
                (page ==='seatDetails' || page === 'districtDetails') && 'pt-0',
            )
        }>
            <div className="container mx-auto text-center md:text-start md:px-8 xl:px-2">
                {/* --------Hero start------- */}
                <div className={clsx(
                    "flex md:flex-row flex-col justify-between items-center md:items-start pb-5 md:pb-0 gap-8 md:gap-0",
                    page === 'home' && 'flex-col-reverse'
                )}>
                    <div className={clsx(
                        'mt:0', 
                        (page ==='seatDetails' || page === 'districtDetails') && 'mt-2 md:mt-16'
                        
                    )}>
                        <p className='mb-3 text-base text-primary-contrast font-bold uppercase'>জাতীয় সংসদ নির্বাচন </p>
                        <h3
                            className='text-primary text-2xl md:text-3xl lg:text-4xl xl:text-5xl md:leading-relaxed lg:leading-relaxed font-black tracking-[1.93px] mb-5'
                        >
                            {
                                heroTitle[page]
                            }
                        </h3>
                        <span className='block text-sm font-normal text-gray1'>নির্বাচনের সর্বশেষ দেখতে চোখ রাখুন কালেরকণ্ঠে, আংশিক নয় পুরো সত্যি </span>
                        {
                            page === 'home' && (
                                <div className='w-fit mt-8 md:mt-6'>
                                    {/* -----Election Date Start---- */}
                                    <div
                                        className='grid grid-cols-3 gap-4 md:gap-8 mb-10'
                                    >
                                        {
                                            electionDate.map((data, i) => (

                                                <div
                                                    key={i}
                                                    className='text-primary-light bg-primary rounded font-normal py-1 px-2 text-sm md:text-lg flex justify-center items-center'
                                                >
                                                    {data}
                                                </div>

                                            ))
                                        }
                                    </div>
                                    {/* -----Election Date End---- */}

                                    {/* -----Sponsor Start----- */}
                                    <div className='bg-white p-4 rounded-md mx-auto md:mx-0 border border-primary-background'>
                                        <CountdownTimer electionDate={'2024-01-07T00:00:00'} />
                                        <div className='mt-4 w-[300px] h-[90px] flex justify-center items-center bg-primary-light'>
                                            ads
                                        </div>
                                    </div>
                                    {/* -----Sponsor End----- */}
                                </div>
                            )
                        }
                    </div>
                    <div>
                        {
                            heroImage[page]
                        }
                    </div>
                </div>
                {/* --------Hero end------- */}

            </div>
        </section>
    )
}

export default Hero