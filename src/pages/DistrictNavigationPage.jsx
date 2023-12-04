import BangladeshMap from "../components/common/BangladeshMap/BangladeshMap"
import Layout from "../components/common/Layout/Layout"
import Title from "../components/common/Title/Title"
import districtList from '../assets/data/districtsList/districtsList'
import { RiArrowDropDownLine } from "react-icons/ri"
import { useNavigate } from "react-router-dom"

function DistrictNavigationPage() {
  const navigate = useNavigate()
  const handleDivisionChange = (e)=>{
    navigate(`/districts/${e.target.value}`)
  }
  
  return (
    <Layout>
      <section className="mb-12">
        <div className="container">
          <div className="mb-8">
            <Title text={'জেলা ভিত্তিক নির্বাচনী তথ্য'} underline="type2" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="col-span-full md:col-start-1 md:col-end-2 border p-2 md:p-8">
              <div className={`grid grid-cols-2 lg:grid-cols-2} gap-4 md:gap-8`}>
                {
                  districtList?.map((division, i) => (
                    <div key={i} className="relative">
                      <select
                        onChange={handleDivisionChange}
                        className="w-full border rounded-lg border-[#0000003D] bg-primary-light p-2 md:p-3 text-base font-normal appearance-none cursor-pointer"
                      >
                        <option className="cursor-pointer" value="select">{division?.text}</option>
                        {
                          division?.districts?.map((district, i) => (
                            <option key={i} value={district?.districtCode}>{district?.districtName}</option>
                          ))
                        }
                      </select>
                      <span className="absolute right-0 top-1/2 -translate-y-1/2">
                        <RiArrowDropDownLine size={28} style={{ cursor: "pointer" }} />
                      </span>
                    </div>
                  ))
                }
              </div>
            </div>
            <div className="col-span-full md:col-start-2 md:col-end-3 border">
              <BangladeshMap />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default DistrictNavigationPage