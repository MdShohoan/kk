import ECLogo from '../../assets/EC/ECLogo.png'
function Hero() {
    const navList = ['আসন', 'জেলা', 'খবর', 'ফলাফল', 'কালেরকণ্ঠ ']
    return (
        <section className='bg-primary-light h-[520px] rounded-br-[300px] mb-24'>
            <div className="container mx-auto">
                <header className="pt-4 flex justify-between items-center mb-24">
                    <span className='text-3xl font-arvo font-normal'>নির্বাচন</span>
                    <nav>
                        <ul className="flex justify-between items-center gap-7">
                            {
                                navList.map((item, i)=>(
                                    <li key={i} className='text-base font-normal capitalize text-gray1 font-arvo'>{item}</li>
                                ))
                            }
                        </ul>
                    </nav>
                </header>
                <div className="flex justify-between items-start">
                    <div>
                        <p className='mb-2 text-base text-primary-contrast font-bold uppercase'>জাতীয় সংসদ নির্বাচন </p>
                        <h3 className='text-primary text-5xl font-black tracking-[1.93px] mb-5'>দ্বাদশ জাতীয় সংসদ নির্বাচন ২০২৪</h3>
                        <span className='text-sm font-normal text-gray1'>নির্বাচনের সর্বশেষ দেখতে চোখ রাখুন কালেরকণ্ঠে, আংশিক নয় পুরো সত্যি </span>
                    </div>
                    <div>
                        <img src={ECLogo}/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero