import { Link, useLocation } from 'react-router-dom';
import ECLogo from '../../assets/EC/ECLogo.png'
import kkLogo from '../../assets/kkLogo.png/'
import { MdMenu } from "react-icons/md";
import { useState } from 'react';
import { MdClose } from "react-icons/md";

import clsx from 'clsx';
import SeatMap from '../common/SeatMap/SeatMap';

function Hero() {
    const currentLocation = useLocation()
    const [isOpenNav, seIsOpenNav] = useState(false)
    const isInSeatInfoPage = currentLocation?.pathname?.split('/')?.at(1) === 'seat'
    const navList = [
        {
            text: 'আসন',
            to: '/'
        },
        {
            text: 'জেলা',
            to: '/'
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
    const electionDate = ['৩', 'জানুয়ারি', '২০২৪']
    return (
        <section className='bg-primary-light h-auto md:h-[520px] md:rounded-br-[300px] mb-12 md:mb-24'>
            <div className="container mx-auto text-center md:text-start md:px-8 xl:px-2">
                <header className="pt-4 flex justify-between items-center mb-16 md:mb-24">
                    <img src={kkLogo} className='h-[30px] w-40' />
                    <nav className='hidden md:block'>
                        <ul className="flex justify-between items-center gap-7">
                            {
                                navList.map((item, i) => (
                                    <Link key={i} to={`${item?.to}`}>
                                        <li className='text-base font-normal capitalize text-gray1 font-arvo cursor-pointer'>
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
                                    <Link key={i} to={`/${navItem?.to}`}>
                                        <li className='text-left py-2 px-4 text-sm font-semibold border-b-2'>
                                            {navItem?.text}
                                        </li>
                                    </Link>
                                ))
                            }
                        </ul>
                    </div>
                    {/*------------Drawer end----------*/}
                </header>

                <div className="flex flex-col-reverse md:flex-row justify-between items-center md:items-start pb-5 md:pb-0 gap-8 md:gap-0">
                    <div>
                        <p className='mb-3 text-base text-primary-contrast font-bold uppercase'>জাতীয় সংসদ নির্বাচন </p>
                        <h3
                            className='text-primary text-2xl md:text-3xl lg:text-4xl xl:text-5xl md:leading-relaxed lg:leading-relaxed font-black tracking-[1.93px] mb-5'
                        >
                            {
                                isInSeatInfoPage
                                    ? 'নিজ আসন সম্পর্কে জানুন '
                                    : 'দ্বাদশ জাতীয় সংসদ নির্বাচন ২০২৪'
                            }
                        </h3>
                        <span className='block text-sm font-normal text-gray1 mb-8 md:mb-10'>নির্বাচনের সর্বশেষ দেখতে চোখ রাখুন কালেরকণ্ঠে, আংশিক নয় পুরো সত্যি </span>
                        {
                            !isInSeatInfoPage && (
                                <div
                                    className='grid grid-cols-3 gap-4 md:gap-8 lg-4 md:w-[80%] lg:w-1/2 xl:w-[40%]'
                                >
                                    {
                                        electionDate.map((data, i) => (

                                            <div
                                                key={i}
                                                className='text-primary-light bg-primary rounded font-normal py-2 text-sm md:text-lg flex justify-center items-center'
                                            >
                                                {data}
                                            </div>

                                        ))
                                    }
                                </div>
                            )
                        }
                    </div>
                    <div>
                        {
                            isInSeatInfoPage ? <SeatMap /> : (
                                <img src={ECLogo} className='w-[220px] md:w-auto' />
                            )
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero