import Section from '../Section/Section'
import Title from '../Title/Title'
import './Timeline.css'
function Timeline() {
    return (
        <Section>
            <div className='container'>
                <Title>
                    নির্বাচনের সময়সূচি
                </Title>
                <ul className='mx-auto w-fit'>
                    <li>
                        {/* <i className="icon uil uil-capture"></i> */}
                        <span className="icon">

                        </span>
                        <div className="progress one active">
                            <p>1</p>
                            <i className="uil uil-check"></i>
                        </div>
                        <div>
                            <p className='text-sm font-bold text-[#333] mb-2'>৩০ নভেম্বর ২০২৩</p>
                            <p className="text text-center hidden md:block">মনোনয়নপত্র <br />জমা দেওয়ার শেষ দিন</p>
                            <p className="text block md:hidden">মনোনয়নপত্র <br />জমা দেওয়ার শেষ দিন</p>
                        </div>
                    </li>
                    <li>
                        {/* <i className="icon uil uil-clipboard-notes"></i> */}
                        <span className="icon"></span>
                        <div className="progress two active">
                            <p>2</p>
                            <i className="uil uil-check"></i>
                        </div>
                        <div>
                            <p className='text-sm font-bold text-[#333] mb-2'>০১ - ০৪ ডিসেম্বর ২০২৩</p>
                            <p className="text text-center hidden md:block">মনোনয়নপত্র বাছাই</p>
                            <p className="text block md:hidden">মনোনয়নপত্র বাছাই</p>
                        </div>
                    </li>
                    <li>
                        {/* <i className="icon uil uil-credit-card"></i> */}
                        <span className="icon"></span>
                        <div className="progress three active">
                            <p>3</p>
                            <i className="uil uil-check"></i>
                        </div>
                        <div>
                            <p className='text-sm font-bold text-[#333] mb-2'>১৭ ডিসেম্বর ২০২৩</p>
                            <p className="text text-center hidden md:block">মনোনয়নপত্র<br /> প্রত্যাহারের শেষ দিন</p>
                            <p className="text block md:hidden">মনোনয়নপত্র প্রত্যাহারের শেষ দিন</p>
                        </div>
                    </li>
                    <li>
                        {/* <i className="icon uil uil-exchange"></i> */}
                        <span className="icon"></span>
                        <div className="progress four">
                            <p>4</p>
                            <i className="uil uil-check"></i>
                        </div>
                        <div>
                            <p className='text-sm font-bold text-[#333] mb-2'>০৫ জানুয়ারি ২০২৪</p>
                            <p className="text text-center hidden md:block">নির্বাচনী<br /> প্রচারের শেষ সময়</p>
                            <p className="text block md:hidden">নির্বাচনী প্রচারের শেষ সময়</p>
                        </div>
                    </li>
                    <li>
                        {/* <i className="icon uil uil-map-marker"></i> */}
                        <span className="icon"></span>
                        <div className="progress five">
                            <p>5</p>
                            <i className="uil uil-check"></i>
                        </div>
                        <div>
                            <p className='text-sm font-bold text-[#333] mb-2'>০৭ জানুয়ারি ২০২৪</p>
                            <p className="text text-center hidden md:block">ভোট গ্রহণ</p>
                            <p className="text block md:hidden">ভোট গ্রহণ</p>
                        </div>
                    </li>
                </ul>
            </div>
        </Section>
    )
}

export default Timeline