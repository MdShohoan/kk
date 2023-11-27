import { Link, useParams } from "react-router-dom"
import mapData from '../../../assets/data/map/mapData'
import clsx from "clsx"
function SeatMap() {
    const { seatNo } = useParams()
    const district = mapData.find((district) => district?.containedSeats?.includes(seatNo))
    return (
        <div>
            <h1 className="capitalize text-center">{district?.district}</h1>
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
                    district?.data?.map((seat) => (
                        <Link to={`/seat/${seat.seatNo}`} key={seat?.seatNo}>
                            {
                                seat.seatNo === '222' | '223' | '110' && (
                                    <path
                                        id={`seat_${seat?.seatNo}`}
                                        style={{ strokeMiterlimit: 10 }}
                                        d={seat?.points}
                                        className={clsx(
                                            "fill-[#9db3f6] stroke-white stroke-1 hover:fill-[#ffd740] transition-all duration-1000",
                                            {
                                                'fill-[#ffd740]': seatNo === seat?.seatNo,
                                            }
                                        )}
                                    />
                                )
                            }
                            <polyline
                                id={`seat_${seat?.seatNo}`}
                                className={clsx(
                                    "fill-[#9db3f6] stroke-white stroke-1 hover:fill-[#ffd740] transition-all duration-1000",
                                    {
                                        'fill-[#ffd740]': seatNo === seat?.seatNo,
                                        
                                    }
                                )}
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