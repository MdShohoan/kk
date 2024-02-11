import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import kkLogo from '../../../assets//kkLogo.png'
import { MdMenu } from "react-icons/md";
import { MdClose } from "react-icons/md";
import cn from '../../../lib/cn';
import Anniversary from "../../Anniversary/Anniversary"

function Header() {
    const [isOpenNav, setIsOpenNav] = useState(false)
    const [isSticky, setSticky] = useState(false);
    const [currentPage, setCurrentPage] = useState()

    const [currentSite, setCurrentSite] = useState('nationalElection')

    const currentLocation = useLocation()
    const path = currentLocation?.pathname

    useEffect(() => {
        if (path.startsWith('/upazila-election')) {
            setCurrentSite('upazilaElection')
        }
    }, [path])

    //Apply style for the header when page scroll more then 62 pixel
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


    useEffect(() => {

        if (path.startsWith('/districts')) {
            setCurrentPage('districts')
        }
        else if (path.startsWith('/seats')) {
            setCurrentPage('seats')
        }
        else if (path.startsWith('/election-result')) {
            setCurrentPage('election-result')
        }
        else if (path.startsWith('/news')) {
            setCurrentPage('news')
        }
        else if (path.startsWith('/videos')) {
            setCurrentPage('videos')
        }
        else if (path.startsWith('/upazila-election/news')) {
            setCurrentPage('upazilaNews')
        }
        else if (path.startsWith('/upazila-election/videos')) {
            setCurrentPage('upazilaVideos')
        }
        else if (path.startsWith('/upazila-election')) {
            setCurrentPage('upazilaElectionHome')
        }
        else {
            setCurrentPage('home')
        }
    }, [path])

    const openNewTab = (url) => {
        window.open(url, "_blank")
    }

    //Navigation list for upazila election
    const navListUpazila = [
        {
            text: 'হোম',
            to: '',
            page: 'home'
        },
        {
            text: 'উপজেলা',
            to: 'upazila',
            page: 'upazila'

        },
        {
            text: 'খবর',
            to: 'upazila-election/news',
            page: 'upazilaNews'
        },
        {
            text: 'ভিডিও',
            to: 'upazila-election/videos',
            page: 'upazilaVideos'
        },
    ]

    //Navigation list for national election
    const navList = [
        {
            text: 'হোম',
            to: '',
            page: 'home'
        },
        {
            text: 'আসন',
            to: 'seats',
            page: 'seats'

        },
        {
            text: 'জেলা',
            to: 'districts',
            page: 'districts'
        },
        {
            text: 'খবর',
            to: 'news',
            page: 'news'
        },
        {
            text: 'ভিডিও',
            to: 'videos',
            page: 'videos'
        },
        {
            text: 'ফলাফল',
            to: 'election-result',
            page: 'election-result',
        },
        {
            text: 'কালের কণ্ঠ',
            to: ''
        },
    ]

    return (
        <>
            {
                currentPage === 'home' && <Anniversary />
            }
            <div className={cn('sticky top-0 left-0 right-0 z-[1000] translate-y-0')}>
                <header className={cn(
                    'py-4 px-2 bg-primary-light border-b border-primary-background transition-all duration-300',
                    {
                        'shadow-lg': isSticky === true,
                    }
                )}>
                    <div className='flex justify-between items-center container px-0 relative'>
                        <Link to={'/'}>
                            <img src={kkLogo} className='h-[30px] w-40' />
                        </Link>
                        <nav className='hidden md:block'>
                            <ul className="flex justify-between items-center gap-7">
                                {
                                    currentSite === 'upazilaElection' ? (
                                        navListUpazila?.slice(1).map((item, i) => (
                                            <Link key={i} to={`/${item?.to}`}>
                                                <li className={cn(
                                                    'text-lg capitalize hover:text-primary transition-all duration-300 text-gray1 cursor-pointer',
                                                    currentPage === item?.page && 'text-primary'
                                                )}>
                                                    {item?.text}
                                                </li>
                                            </Link>
                                        ))
                                    ) : (
                                        navList?.slice(1, 6).map((item, i) => (
                                            <Link key={i} to={`/${item?.to}`}>
                                                <li className={cn(
                                                    'text-lg capitalize hover:text-primary transition-all duration-300 text-gray1 cursor-pointer',
                                                    currentPage === item?.page && 'text-primary'
                                                )}>
                                                    {item?.text}
                                                </li>
                                            </Link>
                                        ))
                                    )
                                }
                                <li
                                    onClick={() => openNewTab('https://www.kalerkantho.com')}
                                    className={cn(
                                        'text-lg capitalize hover:text-primary transition-all duration-300 text-gray1 cursor-pointer',
                                        currentPage === navList[6]?.page && 'text-primary'
                                    )}
                                >
                                    {navList[6]?.text}
                                </li>

                            </ul>
                        </nav>
                        <span className='md:hidden'>
                            <MdMenu size={32} onClick={() => setIsOpenNav(true)} />
                        </span>
                    </div>
                </header>
            </div>

            {/*------------Drawer start----------*/}
            <div
                className={clsx(
                    'fixed w-full h-screen bg-white ease-in duration-300 z-[2000]',
                    {
                        'right-0 top-0': isOpenNav === true,
                        'right-[-100%] top-0': isOpenNav === false,
                    }
                )}
            >
                <div className="flex justify-between items-center md:mb-24 p-4">
                    <Link to={'/'}>
                        <img
                            src={kkLogo}
                            className='h-[30px] w-40'
                        />
                    </Link>
                    <span className='md:hidden'>
                        <MdClose size={32} onClick={() => setIsOpenNav(false)} />
                    </span>
                </div>
                <ul className='px-4'>
                    {
                        navList?.slice(0, 6)?.map((navItem, i) => (
                            <Link key={i} to={`/${navItem?.to}`}>
                                <li className={cn(
                                    'text-left py-1 px-2 mb-3 text-base font-semibold border-b-2',
                                    currentPage === navItem?.page && 'text-primary border-primary-contrast'
                                )}>
                                    {navItem?.text}
                                </li>
                            </Link>
                        ))
                    }
                    <li
                        onClick={() => openNewTab('https://www.kalerkantho.com')}
                        className={cn(
                            'text-left py-1 px-2 mb-3 text-base font-semibold border-b-2',
                            currentPage === navList[6]?.page && 'text-primary border-primary-contrast'
                        )}>
                        {navList[6]?.text}
                    </li>
                </ul>
            </div>
            {/*------------Drawer end----------*/}
        </>
    )
}

export default Header