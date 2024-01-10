import { useNavigate } from "react-router-dom"
import districtList from '../../../assets/data/districtsList/districtsList'
import cn from '../../../lib/cn'

function DistrictNavigator({ className }) {
    const navigate = useNavigate()
    const handleDivisionChange = (e) => {
        navigate(`/districts/${e.target.value}`)
    }

    return (
        <div className={cn(`grid grid-cols-2 lg:grid-cols-2 gap-4 md:gap-8`, className)}>
            {
                districtList?.map((division, i) => (
                    <div key={i} className="relative">
                        <select
                            onChange={handleDivisionChange}
                            className="w-full border rounded-lg border-[#0000003D] bg-primary-light p-2 text-base font-normal cursor-pointer"
                        >
                            <option className="cursor-pointer" value="select">{division?.text}</option>
                            {
                                division?.districts?.map((district, i) => (
                                    <option
                                        className="cursor-pointer"
                                        key={i}
                                        value={district?.districtCode}>
                                        {district?.districtName}
                                    </option>
                                ))
                            }
                        </select>
                    </div>
                ))
            }
        </div>
    )
}

export default DistrictNavigator