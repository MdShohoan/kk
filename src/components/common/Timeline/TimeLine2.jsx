import Section from "../Section/Section"
import './TimeLine2.css'
function TimeLine2() {

    return (
        <Section>
            <div className="container">
                <div className="line_box stav_projektu border border-primary-light rounded-md py-8">
                    <div className="text_circle done">
                        <div className="circle">
                            <h4>মনোনয়নপত্র জমা দেওয়ার শেষ দিন</h4>
                            <p>৩০ নভেম্বর ২০২৩</p>
                        </div>
                        <a href="javascript:void(0)" className="tvar">
                            <span data-toggle="popover" title="Sample text" data-trigger="hover" data-placement="top" data-content="Ukázkový text při hover"></span>
                        </a>
                    </div>
                    <div className="text_circle done">
                        <div className="circle">
                            <h4>মনোনয়নপত্র বাছাই</h4>
                            <p>০১ থেকে ০৪ ডিসেম্বর ২০২৩</p>
                            {/* <div className="subline">
                            <h6>Říjen</h6>
                            <p>2019</p>
                        </div> */}
                        </div>
                        <a href="" className="tvar">
                            <span data-toggle="popover" title="Sample text" data-trigger="hover" data-placement="top" data-content="Ukázkový text při hover"></span>
                        </a>
                    </div>
                    <div className="text_circle sub">
                        <div className="circle">
                            <h4>মনোনয়নপত্র প্রত্যাহারের শেষ দিন</h4>
                            <p>১৭ ডিসেম্বর ২০২৩</p>
                        </div>
                        <a href="" className="tvar">
                            <span data-toggle="popover" title="Sample text" data-trigger="hover" data-placement="top" data-content="Ukázkový text při hover"></span>
                        </a>
                    </div>
                    <div className="text_circle">
                        <div className="circle">
                            <h4>নির্বাচনী প্রচারের শেষ সময়</h4>
                            <p>০৫ জানুয়ারি ২০২৪</p>
                        </div>
                        <a href="" className="tvar">
                            {/* <span data-toggle="popover" title="Sample text" data-trigger="hover" data-placement="top" data-content="Ukázkový text při hover"></span> */}
                        </a>
                    </div>
                    <div className="text_circle">
                        <div className="circle">
                            <h4>ভোট গ্রহণ</h4>
                            <p>০৭ জানুয়ারি ২০২৪</p>
                        </div>
                        <a href="" className="tvar"></a>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default TimeLine2