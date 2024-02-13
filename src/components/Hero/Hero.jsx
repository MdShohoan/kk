import { useLocation, useParams } from 'react-router-dom';
import ECLogo from '../../assets/EC/নির্বাচন_কমিশন.png'
import DistrictMap from '../common/DistrictMap/DistrictMap';
import CountdownTimer from '../common/CountdownTimer/CountdownTimer';
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import seatList from '../../assets/data/seatsList/seatsList'
import districtList from '../../assets/data/districtsList/districtsList'
import Title from '../common/Title/Title';
import toBengaliDigits from '../../lib/toBanglaDigits';
import SeatNoCard from '../common/SeatNoCard/SeatNoCard';
import cn from '../../lib/cn';

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
        news: 'news',
        videos: 'videos',
        upazilaInfo: 'upazilaInfo',
        upazilaNews: 'upazilaNews',
        upazilaVideos: 'upazilaVideos',
        upazilaElectionHome: 'upazilaElectionHome',
    }

    useEffect(() => {
        if (path === '/') {
            setPage(pages?.home)
        }
        else if (path.startsWith('/news')) {
            setPage(pages?.news)
        }
        else if (path.startsWith('/videos')) {
            setPage(pages?.videos)
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
            setPage(pages?.seats)
        }
        else if (path.startsWith('/election-result')) {
            setPage(pages?.results)
        }
        else if (path.startsWith('/upazila-election/upazila')) {
            setPage(pages?.upazilaInfo)
        }
        else if (path.startsWith('/upazila-election/news')) {
            setPage(pages?.upazilaNews)
        }
        else if (path.startsWith('/upazila-election/videos')) {
            setPage(pages?.upazilaVideos)
        }
        else if (path.startsWith('/upazila-election')) {
            setPage(pages?.upazilaElectionHome)
        }
    }, [districtNo, path, seatNo]) // eslint-disable-line

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
        results: 'নির্বাচনের ফলাফল সম্পর্কে জানুন',
        upazilaElectionHome: 'উপজেলা পরিষদ নির্বাচন ২০২৪',
        upazilaInfo: 'নিজ উপজেলা সম্পর্কে জানুন',
    }

    const heroImage = {
        districtDetails: <div className='mt-2 md:mt-1'><DistrictMap /></div>,
        districts: <></>,
        seats: <></>,
        seatDetails: <div className='mt-2 md:mt-1'><DistrictMap /></div>,
        home: <img src={ECLogo} className='w-[220px] md:w-[300px] md:pb-12' />,
        upazilaElectionHome: <img src={ECLogo} className='w-[220px] md:w-[300px]' />,
        results: <></>,
        upazilaInfo: (<div
            className={cn(
                'mt-6 md:mt-0 md:mr-12 h-[148px] w-[148px] rounded-full border-[4px] flex justify-center items-center text-primary font-semibold text-lg bg-[#f5f2fb] border-[#cbc3db]'
            )}
        >
            <div>
                <div className='text-center font-[600] text-lg'>আদাবর</div>
                <div className='text-sm font-[600] text-center text-primary-contrast'>উপজেলা </div>
            </div>
        </div>)
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
            cn(
                'bg-primary-light h-auto md:h-fit md:rounded-br-[250px] mb-16 py-12',
                page === 'seatDetails' && 'pt-0 pb-1 md:pb-12',
                page === 'districtDetails' && 'pt-0 pb-1 md:pb-12',
                page === 'home' && 'pb-4',
                page === 'news' && 'hidden',
                page === 'videos' && 'hidden',
                page === 'upazilaNews' && 'hidden',
                page === 'upazilaVideos' && 'hidden',
            )
        }>
            <div className="container mx-auto text-center md:text-start md:px-8 xl:px-2">
                {/* --------Hero start------- */}
                <div className={clsx(
                    "flex md:flex-row flex-col justify-between items-center md:items-start md:gap-8 gap-0",
                    page === 'home' && 'flex-col-reverse',
                    page === 'upazilaElectionHome' && 'flex-col-reverse'
                )}>
                    <div className={clsx(
                        'mt:0',
                        (page === 'seatDetails' || page === 'districtDetails') && 'mt-2 md:mt-16'

                    )}>
                        <p className={clsx(
                            'mb-3 text-base text-primary-contrast font-bold uppercase', (page === 'seatDetails' || page === 'districtDetails') && 'hidden md:block'
                        )}>
                            {(page === pages?.upazilaElectionHome || page === pages?.upazilaInfo) ? 'উপজেলা পরিষদ নির্বাচন' : 'জাতীয় সংসদ নির্বাচন'}
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
                            নির্বাচনের সর্বশেষ দেখতে চোখ রাখুন কালের কণ্ঠে, আংশিক নয় পুরো সত্য
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

                                    {/* -----Sponsor and Countdown Start----- */}
                                    <CountdownTimer electionDate={'2024-01-07T00:00:00'} />
                                    {/* -----Sponsor and Countdown End----- */}
                                </div>
                            )
                        }
                    </div>
                    {
                        (page === pages?.seatDetails || page === pages?.districtDetails) && (
                            <div className='self-center w-fit hidden md:block'>
                                <div>{heading}</div>
                                {
                                    page === pages?.seatDetails && <SeatNoCard seatNo={toBengaliDigits(seatNo)} />
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
                                    page === pages?.seatDetails && <SeatNoCard seatNo={toBengaliDigits(seatNo)} />
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