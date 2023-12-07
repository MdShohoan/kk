import { Link, useLocation } from 'react-router-dom';
import ECLogo from '../../assets/EC/ECLogo.png'
import kkLogo from '../../assets/kkLogo.png/'
import { MdMenu } from "react-icons/md";
import { useEffect, useState } from 'react';
import { MdClose } from "react-icons/md";

import clsx from 'clsx';
import DistrictMap from '../common/DistrictMap/DistrictMap';
import CountdownTimer from '../common/CountdownTimer/CountdownTimer';

function Hero() {
    const currentLocation = useLocation()

    const [isOpenNav, seIsOpenNav] = useState(false)
    const [isSticky, setSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          // Check if the scroll position is greater than or equal to 60px
          if (window.scrollY >= 62) {
            setSticky(true);
          } else {
            setSticky(false);
          }
        };
    
        // Attach the scroll event listener when the component mounts
        window.addEventListener('scroll', handleScroll);
    
        // Clean up the event listener when the component unmounts
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    const isInSeatInfoPage = currentLocation?.pathname?.split('/')?.at(1) === 'seat'
    const isInDistrictInfoPage = currentLocation?.pathname?.split('/')?.at(1) === 'districts'

    const navList = [
        {
            text: 'আসন',
            to: '/seats'
        },
        {
            text: 'জেলা',
            to: '/districts'
        },
        {
            text: 'খবর',
            to: '/'
        },
        {
            text: 'ফলাফল',
            to: '/election-result'
        },
        {
            text: 'কালেরকণ্ঠ',
            to: '/'
        },
    ]
    const electionDate = ['৭', 'জানুয়ারি', '২০২৪']
    return (
        <>
            <header className={clsx(
                'py-4 bg-primary-light border-b border-primary-background transition-all duration-300',
                {
                    'sticky top-0 z-[1000] shadow-lg translate-y-0': isSticky === true,
                }
            )}>
                <div className='flex justify-between items-center container px-0'>
                    <Link to={'/'}>
                        <img src={kkLogo} className='h-[30px] w-40' />
                    </Link>
                    <nav className='hidden md:block'>
                        <ul className="flex justify-between items-center gap-7">
                            {
                                navList.map((item, i) => (
                                    <Link key={i} to={`${item?.to}`}>
                                        <li className='text-base font-medium capitalize hover:text-primary transition-all duration-300 text-gray1 cursor-pointer'>
                                            {item?.text}
                                        </li>
                                    </Link>
                                ))
                            }
                        </ul>
                    </nav>
                    <span className='md:hidden'>
                        <MdMenu size={32} onClick={() => seIsOpenNav(true)} />
                    </span>
                    {/*------------Drawer start----------*/}
                    <div
                        className={clsx(
                            'fixed w-full h-screen bg-white z-50 ease-in duration-300',
                            {
                                'right-0 top-0': isOpenNav === true,
                                'right-[-100%] top-0': isOpenNav === false,
                            }
                        )}
                    >
                        <div className="flex justify-between items-center md:mb-24 p-4">
                            <img src={kkLogo} className='h-[30px] w-40' />
                            <span className='md:hidden'>
                                <MdClose size={32} onClick={() => seIsOpenNav(false)} />
                            </span>
                        </div>
                        <ul className='px-4'>
                            {
                                navList.map((navItem, i) => (
                                    <Link key={i} to={`${navItem?.to}`}>
                                        <li className='text-left py-2 px-4 text-sm font-semibold border-b-2'>
                                            {navItem?.text}
                                        </li>
                                    </Link>
                                ))
                            }
                        </ul>
                    </div>
                    {/*------------Drawer end----------*/}
                </div>
            </header>
            <section className='bg-primary-light h-auto md:h-fit py-12 md:rounded-br-[300px] mb-12 md:mb-24'>
                <div className="container mx-auto text-center md:text-start md:px-8 xl:px-2">
                    {/* --------Hero start------- */}
                    <div className="flex flex-col-reverse md:flex-row justify-between items-center md:items-start pb-5 md:pb-0 gap-8 md:gap-0">
                        <div>
                            <p className='mb-3 text-base text-primary-contrast font-bold uppercase'>জাতীয় সংসদ নির্বাচন </p>
                            <h3
                                className='text-primary text-2xl md:text-3xl lg:text-4xl xl:text-5xl md:leading-relaxed lg:leading-relaxed font-black tracking-[1.93px] mb-5'
                            >
                                {
                                    isInSeatInfoPage
                                        ? 'নিজ আসন সম্পর্কে জানুন '
                                        : isInDistrictInfoPage ?
                                            'নিজ জেলা সম্পর্কে জানুন '
                                            : 'দ্বাদশ জাতীয় সংসদ নির্বাচন ২০২৪'
                                }
                            </h3>
                            <span className='block text-sm font-normal text-gray1 mb-8 md:mb-6'>নির্বাচনের সর্বশেষ দেখতে চোখ রাখুন কালেরকণ্ঠে, আংশিক নয় পুরো সত্যি </span>

                            {/* -----Deadline Start---- */}
                            {
                                !isInSeatInfoPage && !isInDistrictInfoPage && (
                                    <div
                                        className='grid grid-cols-3 gap-4 md:gap-8 lg-4 md:w-[80%] lg:w-1/2 xl:w-[50%] mb-10'
                                    >
                                        {
                                            electionDate.map((data, i) => (

                                                <div
                                                    key={i}
                                                    className='text-primary-light bg-primary rounded font-normal py-2 px-3 text-sm md:text-lg flex justify-center items-center'
                                                >
                                                    {data}
                                                </div>

                                            ))
                                        }
                                    </div>
                                )
                            }
                            {/* -----Deadline End---- */}

                            {/* -----Sponsor Start----- */}
                            <div className='bg-white w-fit p-4 rounded-md mx-auto md:mx-0 border border-primary-background'>
                                <CountdownTimer electionDate={'2024-01-07T00:00:00'} />
                                <div className='mt-4 w-[300px] h-[90px] flex justify-center items-center bg-primary-light'>
                                    ads
                                </div>
                            </div>
                            {/* -----Sponsor End----- */}
                        </div>
                        <div>
                            {
                                isInSeatInfoPage | isInDistrictInfoPage ? <DistrictMap /> : (
                                    <img src={ECLogo} className='w-[220px] md:w-auto' />
                                )
                            }
                        </div>
                    </div>
                    {/* --------Hero end------- */}

                </div>
            </section>
        </>
    )
}

export default Hero