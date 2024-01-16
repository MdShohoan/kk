import { useEffect, useState } from "react";
import { TbClick } from "react-icons/tb";
import Confetti from "react-confetti";
import MouseAnimation from './MouseAnimation/MouseAnimation'
import Solar from './Solar/Solar'

const Anniversary = () => {
    const [isClose, setIsClose] = useState(true);
    const [windowSize, setWindowSize] = useState([
        window.innerWidth,
        window.innerHeight,
    ]);

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowSize([window.innerWidth, window.innerHeight]);
        };

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);


    useEffect(() => {
        const handleScroll = () => {
            if (!isClose) {
                // Your logic for the first scroll
                console.log('First scroll detected!');
                setIsClose(true);
            }
        };

        if (!isClose) {
            // Add the event listener only if it's the first scroll
            window.addEventListener('scroll', handleScroll);
        }

        // Remove the event listener when the component is unmounted
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isClose]);

    return (
        <>

            {/* ----------------Main animation start here-------- */}
            <div
                style={{
                    width: '100%',
                    height: isClose ? '40px' : 'calc(100vh - 100px)',
                    background: '#000',
                    position: 'relative',
                    overflow: 'hidden'
                }}
                onClick={() => setIsClose(false)}
            >
                {
                    isClose && (
                        <div
                            style={{
                                cursor: 'pointer',
                                color: 'white',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: '10px',
                                marginTop: '8px',
                                background: 'transparent'
                            }}
                        >
                            <p>
                                প্রতিষ্ঠা বার্ষিকীর বিশেষ আয়োজন
                            </p>
                            <TbClick size={24} color="white" />
                        </div>
                    )
                }

                <div style={{ overflow: 'hidden' }}>
                    <Confetti width={windowSize[0]} height={windowSize[1]}> </Confetti>
                </div>
                <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', display: isClose ? 'none' : 'block' }}>
                    <Solar/>
                </div>
                <MouseAnimation />
            </div>
            {/* --------------Main animation end here---------- */}
        </>

    )

}

export default Anniversary