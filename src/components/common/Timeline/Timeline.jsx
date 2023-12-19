import Section from '../Section/Section'
import './Timeline.css'
function Timeline() {
    return (
        <Section>
            <div className='container'>
                <div className="line_box stav_projektu">
                    <div className="text_circle done">
                        <div className="circle">
                            <h4>Zahájení výstavby</h4>
                            <p>Srpen 2019</p>
                        </div>
                        <a href="javascript:void(0)" className="tvar">
                            <span data-toggle="popover" title="Sample text" data-trigger="hover" data-placement="top" data-content="Ukázkový text při hover"></span>
                        </a>
                    </div>
                    <div className="text_circle sub">
                        <div className="circle">
                            <h4>Zahájení výstavby</h4>
                            <p>Říjen 2019</p>
                            {/* <div className="subline">
                            <h6>Říjen</h6>
                            <p>2019</p>
                        </div> */}
                        </div>
                        <a href="" className="tvar">
                            <span data-toggle="popover" title="Sample text" data-trigger="hover" data-placement="top" data-content="Ukázkový text při hover"></span>
                        </a>
                    </div>
                    <div className="text_circle">
                        <div className="circle">
                            <h4>Dokončení hrubé stavby</h4>
                            <p>Listopad 2020</p>
                        </div>
                        <a href="" className="tvar"></a>
                    </div>
                    <div className="text_circle">
                        <div className="circle">
                            <h4>Kolaudace</h4>
                            <p>Červen 2021</p>
                        </div>
                        <a href="" className="tvar"></a>
                    </div>
                    <div className="text_circle">
                        <div className="circle">
                            <h4>K nastěhování</h4>
                            <p>Srpen 2021</p>
                        </div>
                        <a href="" className="tvar"></a>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default Timeline