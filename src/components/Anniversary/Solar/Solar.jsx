import './Solar.css'
import kkLogo from '../../../assets/anniversary/kkLogo.jpeg'
function Solar() {
    return (
        <div className="container">
            <div
                className='center-circle'
            >
                <img src={kkLogo} style={{width:'100%', height:'100%', objectFit:'cover'}}/>
            </div>
            {

                <div className={'transition'}>
                    <div className="circle1">
                        <div className='circle1-inner'>
                            <p>সম্পাদকীয় বার্তা</p>
                        </div>
                    </div>
                    <div className="circle2">
                        <div className='circle2-inner'>
                            <p>Circle</p>
                        </div>
                    </div>
                    <div className="circle3">
                        <div className='circle3-inner'>
                            <p>Circle</p>
                        </div>
                    </div>
                </div>

            }
        </div>
    )
}

export default Solar