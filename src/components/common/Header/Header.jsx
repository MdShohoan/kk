import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import kkLogo from '../../../assets//kkLogo.png'
import { MdMenu } from "react-icons/md";
import { MdClose } from "react-icons/md";

function Header() {
    const [isOpenNav, setIsOpenNav] = useState(false)
    const [isSticky, setSticky] = useState(false);

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

    return (
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
                    <MdMenu size={32} onClick={() => setIsOpenNav(true)} />
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
                            <MdClose size={32} onClick={() => setIsOpenNav(false)} />
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
    )
}

export default Header