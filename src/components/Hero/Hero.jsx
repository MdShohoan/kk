import ECLogo from '../../assets/EC/ECLogo.png'
import kkLogo from '../../assets/kkLogo.png/'
import { MdMenu } from "react-icons/md";

function Hero() {
    const navList = ['আসন', 'জেলা', 'খবর', 'ফলাফল', 'কালেরকণ্ঠ ']
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
                                    <li key={i} className='text-base font-normal capitalize text-gray1 font-arvo'>{item}</li>
                                ))
                            }
                        </ul>
                    </nav>
                    <span className='md:hidden'>
                        <MdMenu size={32} />
                    </span>
                </header>

                <div className="flex flex-col-reverse md:flex-row justify-between items-center md:items-start pb-5 md:pb-0 gap-8 md:gap-0">
                    <div>
                        <p className='mb-3 text-base text-primary-contrast font-bold uppercase'>জাতীয় সংসদ নির্বাচন </p>
                        <h3 className='text-primary text-2xl md:text-3xl lg:text-4xl xl:text-5xl md:leading-relaxed lg:leading-relaxed font-black tracking-[1.93px] mb-5'>দ্বাদশ জাতীয় সংসদ নির্বাচন ২০২৪</h3>
                        <span className='block text-sm font-normal text-gray1 mb-8 md:mb-10'>নির্বাচনের সর্বশেষ দেখতে চোখ রাখুন কালেরকণ্ঠে, আংশিক নয় পুরো সত্যি </span>
                        <div className='grid grid-cols-3 gap-8 lg:w-2/3 xl:w-3/5'>
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
                    </div>
                    <div>
                        <img src={ECLogo} className='w-[220px] md:w-auto' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero