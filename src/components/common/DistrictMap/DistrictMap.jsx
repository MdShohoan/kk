import { Link, useParams } from "react-router-dom"
import mapData from '../../../assets/data/map/mapData'
import cn from "../../../lib/cn"
// import districtList from '../../../assets/data/districtsList/districtsList'
function DistrictMap() {
    const { seatNo } = useParams()
    const { districtNo } = useParams()


    let currentDistrict
    if (seatNo) {
        currentDistrict = mapData.find((district) => district?.containedSeats?.includes(seatNo))
    }
    else if (districtNo) {
        currentDistrict = mapData?.find((district) => district?.districtCode === districtNo)
    }

    //Find district by id
    // function findDistrictById() {
    //     for (const division of districtList) {
    //         const foundDistrict = division.districts.find(district => district?.districtCode === currentDistrict?.districtCode);

    //         if (foundDistrict) {
    //             return foundDistrict.districtName;
    //         }
    //     }
    // }

    return (
        <>
            {/* <h1 className="capitalize text-center font-semibold text-gray1 text-lg mb-2">{findDistrictById()} জেলা</h1> */}
            <div>
                <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox={
                        currentDistrict?.district === 'dhaka' ? "0 0 624 385.9" : 
                        (currentDistrict.district ==='kurigram'||currentDistrict.district ==='bhola' || currentDistrict.district ==='noakhali') ? "0 0 300 600": "0 0 300 430"
                    }
                    style={{
                        enableBackground: `
                        ${currentDistrict?.district === 'dhaka' ? 'new 0 0 624 385.9' :
                        ( currentDistrict.district ==='kurigram'||currentDistrict.district ==='bhola' || currentDistrict.district ==='noakhali') ? "new 0 0 300 600": 'new 0 0 300 430'}
                        `,
                        width: '300px',
                        height: '300px'
                    }}
                    xmlSpace="preserve"
                >
                    {
                        currentDistrict?.data?.map((seat) => {
                            //For Dhaka District
                            if (parseInt(seat?.seatNo) >= 174 && parseInt(seat?.seatNo) <= 193) {
                                return (
                                    <>
                                        <Link key={seat?.seatNo} to={`/seats/${seat?.seatNo}`}>
                                            <polyline
                                                id={`seat_${seat?.seatNo}`}
                                                className={cn(
                                                    "fill-[#B9A37E] stroke-white stroke-1 hover:fill-[#82A775] transition-all duration-1000",
                                                    {
                                                        'fill-[#82A775]': seatNo === seat?.seatNo,

                                                    }
                                                )}
                                                style={{ strokeMiterlimit: 10 }}
                                                points={seat?.points}
                                            />
                                            <text
                                                transform={seat?.transform}
                                                className={cn(
                                                    "fill-black text-base font-bold pointer-events-none",
                                                    {
                                                        'text-[6px]': parseInt(seat?.seatNo) > 176 && parseInt(seat?.seatNo) < 192
                                                    }
                                                )}>
                                                {seat?.text}
                                            </text>
                                        </Link>
                                    </>
                                )
                            }
                            else {
                                //All except Dhaka District
                                return (
                                    <Link to={`/seats/${seat.seatNo}`} key={seat?.seatNo}>
                                        {
                                            seat?.seatNo === '222' | '223' | '110' && (
                                                <path
                                                    id={`seat_${seat?.seatNo}`}
                                                    style={{ strokeMiterlimit: 10 }}
                                                    d={seat?.points}
                                                    className={cn(
                                                        "fill-[#B9A37E] stroke-white stroke-1 hover:fill-[#82A775] transition-all duration-1000",
                                                        {
                                                            'fill-[#82A775]': seatNo === seat?.seatNo,
                                                        }
                                                    )}
                                                />
                                            )
                                        }
                                        <polyline
                                            id={`seat_${seat?.seatNo}`}
                                            className={cn(
                                                "fill-[#B9A37E] stroke-white stroke-1 hover:fill-[#82A775] transition-all duration-1000",
                                                {
                                                    'fill-[#82A775]': seatNo === seat?.seatNo,

                                                }
                                            )}
                                            style={{ strokeMiterlimit: 10 }}
                                            points={seat?.points}
                                        />
                                        <text
                                            transform={seat?.transform}
                                            className={cn(
                                                "fill-black text-base font-bold pointer-events-none",
                                                {
                                                    'text-[8px]': parseInt(seat?.seatNo) > 176 && parseInt(seat?.seatNo) < 192,
                                                },

                                            )}>
                                            {seat?.text}
                                        </text>
                                    </Link>
                                )
                            }


                        })
                    }

                    {/* Zoom section for Dhaka District start here */}
                    {
                        currentDistrict?.district === 'dhaka' && (
                            <>
                                <rect style={{ strokeMiterlimit: 10 }} x="187.8" y="91.5" className="fill-none stroke-red-600 stroke-2" width="105.7" height="147.2" />
                                {
                                    currentDistrict?.zoom.map((seat) => (
                                        <g key={seat.seatNo}>
                                            <Link to={`/seats/${seat?.seatNo}`}>
                                                {console.log(seatNo === seat?.seatNo, 'Matches')}
                                                <polyline
                                                    id={`seat_${seat?.seatNo}`}
                                                    className={cn(
                                                        "fill-[#B9A37E] stroke-white stroke-1 hover:fill-[#82A775] transition-all duration-1000", seatNo === seat?.seatNo && 'fill-[#82A775]'
                                                    )}
                                                    points={seat?.points} />
                                                <g>
                                                    <text transform={seat?.transform} className="fill-black text-base font-bold pointer-events-none">{seat?.text}</text>
                                                </g>
                                            </Link>
                                        </g>
                                    ))
                                }
                                <line style={{ strokeMiterlimit: 10 }} className="fill-none stroke-red-600 stroke-2" x1="292.6" y1="149.7" x2="354.5" y2="149.9"></line>
                            </>
                        )
                    }

                </svg >
            </div>
        </>
    )
}

export default DistrictMap