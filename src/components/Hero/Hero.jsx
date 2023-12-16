import { useLocation, useParams } from 'react-router-dom';
import ECLogo from '../../assets/EC/ECLogo.png'
import DistrictMap from '../common/DistrictMap/DistrictMap';
import CountdownTimer from '../common/CountdownTimer/CountdownTimer';
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import seatList from '../../assets/data/seatsList/seatsList'
import districtList from '../../assets/data/districtsList/districtsList'
import Title from '../common/Title/Title';
import toBengaliDigits from '../../lib/toBanglaDigits';
import SeatNoCard from '../common/SeatNoCard/SeatNoCard';

function Hero() {
    const [page, setPage] = useState(null)
    const currentLocation = useLocation()
    const { districtNo } = useParams()
    const { seatNo } = useParams()
    const path = currentLocation?.pathname

    const pages = {
        districtDetails: 'districtDetails',
        home: 'home',
        districts: 'districts',
        seatDetails: 'seatDetails',
        seats: 'seats',
        results: 'results',
    }

    useEffect(() => {
        if (path === '/') {
            setPage(pages?.home)
        }
        else if (path.startsWith('/districts') && districtNo) {
            setPage(pages?.districtDetails)
        }
        else if (path.startsWith('/districts')) {
            setPage(pages?.districts)
        }
        else if (path.startsWith('/seats') && seatNo) {
            setPage(pages?.seatDetails)
        }
        else if (path.startsWith('/seats')) {
            setPage(pages.seats)
        }
        else if (path.startsWith('/election-result')) {
            setPage(pages.results)
        }
    }, [districtNo, path, seatNo])

    //Find seat by districtNo
    function findSeatNameById() {
        for (const division of seatList) {
            const foundSeat = division?.seats?.find(seat => seat?.seatNo === seatNo);

            if (foundSeat) {
                return foundSeat.seatName;
            }
        }
        return 'not found'
    }

    //Find district by districtNo
    function findDistrictById() {
        for (const division of districtList) {
            const foundDistrict = division.districts.find(district => district?.districtCode === districtNo);

            if (foundDistrict) {
                return foundDistrict.districtName;
            }
        }
    }

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

    const heading = (
        <>
            {
                page === pages.seatDetails && (
                    <Title className={'text-base sm:text-xl'}>
                        {findSeatNameById()}
                    </Title>
                )
            }

            {
                page === pages.districtDetails && (
                    <Title className={'text-base sm:text-xl'}>
                        {findDistrictById()}
                    </Title>
                )
            }
        </>
    )

    return (
        <section className={
            clsx(
                'bg-primary-light h-auto md:h-fit md:rounded-br-[250px] mb-12 py-12', page === 'seatDetails' && 'pt-0 pb-1 md:pb-12', page === 'districtDetails' && 'pt-0 pb-1 md:pb-12', page === 'home' && 'pb-1'
            )
        }>
            <div className="container mx-auto text-center md:text-start md:px-8 xl:px-2">
                {/* --------Hero start------- */}
                <div className={clsx(
                    "flex md:flex-row flex-col justify-between items-center md:items-start md:gap-8 gap-0",
                    page === 'home' && 'flex-col-reverse'
                )}>
                    <div className={clsx(
                        'mt:0',
                        (page === 'seatDetails' || page === 'districtDetails') && 'mt-2 md:mt-16'

                    )}>
                        <p className={clsx(
                            'mb-3 text-base text-primary-contrast font-bold uppercase', (page === 'seatDetails' || page === 'districtDetails') && 'hidden md:block'
                        )}>
                            জাতীয় সংসদ নির্বাচন
                        </p>
                        <h3
                            className='text-primary text-2xl md:text-3xl lg:text-4xl xl:text-5xl md:leading-relaxed lg:leading-relaxed font-black tracking-[1.93px] mb-5'
                        >
                            {
                                heroTitle[page]
                            }
                        </h3>
                        <span
                            className={
                                clsx('block text-sm font-normal text-gray1', (page === 'seatDetails' || page === 'districtDetails') && 'hidden md:block')
                            }
                        >
                            নির্বাচনের সর্বশেষ দেখতে চোখ রাখুন কালেরকণ্ঠে, আংশিক নয় পুরো সত্যি
                        </span>
                        {
                            page === 'home' && (
                                <div className='w-fit mt-8 md:mt-6 mx-auto sm:mx-0'>
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
                    {
                        (page === pages?.seatDetails || page === pages?.districtDetails) && (
                            <div className='self-center w-fit hidden md:block'>
                                <div>{heading}</div>
                                {
                                    page === pages?.seatDetails && <SeatNoCard seatNo={toBengaliDigits(seatNo)}/>
                                }
                            </div>
                        )
                    }
                    <div>
                        {
                            heroImage[page]
                        }
                    </div>
                    {
                        (page === pages?.seatDetails || page === pages?.districtDetails) && (
                            <div className='self-center w-fit md:hidden my-4'>
                                <div>{heading}</div>

                                {
                                    page === pages?.seatDetails && <SeatNoCard seatNo={toBengaliDigits(seatNo)}/>
                                }
                            </div>
                        )
                    }
                </div>
                {/* --------Hero end------- */}

            </div>
        </section>
    )
}

export default Hero