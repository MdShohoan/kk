import { Link } from "react-router-dom"
import mapData from '../../../assets/data/map/mapData'
function SeatMap() {
    return (
        <div>
            <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 300 472"
                style={{
                    enableBackground: 'new 0 0 300 472',
                    width: '300px'
                }}
                xmlSpace="preserve"
            >
                {
                    mapData[11]?.data?.map((seat) => (
                        <Link to="/" key={seat?.id}>
                            {
                                seat.seatNo === '222' | '223' && (
                                    <path
                                        id={`seat_${seat?.id}`}
                                        className=" fill-[#9db3f6] stroke-white stroke-1 hover:fill-[#ffd740] transition-all duration-1000"
                                        style={{ strokeMiterlimit: 10 }}
                                        d={seat?.points}
                                    />
                                )
                            }
                            <polyline
                                id={`seat_${seat?.id}`}
                                className=" fill-[#9db3f6] stroke-white stroke-1 hover:fill-[#ffd740] transition-all duration-1000"
                                style={{ strokeMiterlimit: 10 }}
                                points={seat?.points}
                            />
                            <text transform={seat?.transform} className="fill-black text-base font-bold pointer-events-none">
                                {seat?.text}
                            </text>
                        </Link>
                    ))
                }
            </svg>
        </div>
    )
}

export default SeatMap