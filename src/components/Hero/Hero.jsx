import ECLogo from '../../assets/EC/ECLogo.png'
import kkLogo from '../../assets/kkLogo.png/'
function Hero() {
    const navList = ['আসন', 'জেলা', 'খবর', 'ফলাফল', 'কালেরকণ্ঠ ']
    const electionDate = ['৩', 'জানুয়ারি', '২০২৪']
    return (
        <section className='bg-primary-light h-[520px] rounded-br-[300px] mb-24'>
            <div className="container mx-auto">
                <header className="pt-4 flex justify-between items-center mb-24">
                    <img src={kkLogo} className='h-[30px] w-40'/>
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
                        <span className='block text-sm font-normal text-gray1 mb-16'>নির্বাচনের সর্বশেষ দেখতে চোখ রাখুন কালেরকণ্ঠে, আংশিক নয় পুরো সত্যি </span>
                        <div className='grid grid-cols-3 gap-16'>
                            {
                                electionDate.map((data, i)=>(
                                    <div key={i} className='text-primary-light bg-primary h-20 rounded-xl w-48 font-normal text-3xl flex justify-center items-center'>{data}</div>
                                ))
                            }
                        </div>
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