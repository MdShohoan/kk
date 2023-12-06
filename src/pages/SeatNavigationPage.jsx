// import { useNavigate } from "react-router-dom";
import Layout from "../components/common/Layout/Layout";
import Title from "../components/common/Title/Title";
import SeatNavigationMap from "../components/common/SeatNavigationMap/SeatNavigationMap";

export default function SeatNavigationPage() {
    // const navigate = useNavigate()
    // const handleDivisionChange = (e) => {
    //     navigate(`/districts/${e.target.value}`)
    // }
    return (
        <Layout>
            <section className="mb-12">
                <div className="container">
                    <div className="mb-8">
                        <Title text={'আসন ভিত্তিক নির্বাচনী তথ্য'} underline="type1" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="col-span-full md:col-start-1 md:col-end-2 border p-2 md:p-8">
                            {/* <div className={`grid grid-cols-2 lg:grid-cols-2} gap-4 md:gap-8`}>
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
                                                        <option className="cursor-pointer" key={i} value={district?.districtCode}>{district?.districtName}</option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                    ))
                                }
                            </div> */}
                        </div>
                        <div className="col-span-full md:col-start-2 md:col-end-4 border">
                            <SeatNavigationMap/>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}
