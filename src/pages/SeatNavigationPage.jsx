// import { useNavigate } from "react-router-dom";
import Layout from "../components/common/Layout/Layout";
import Title from "../components/common/Title/Title";
import SeatNavigationMap from "../components/common/SeatNavigationMap/SeatNavigationMap";
import DivisionNavigator from "../components/common/DivisionNavigator/DivisionNavigator";
import { ScrollRestoration } from "react-router-dom";

export default function SeatNavigationPage() {
    // const navigate = useNavigate()
    // const handleDivisionChange = (e) => {
    //     navigate(`/districts/${e.target.value}`)
    // }
    return (
        <Layout>
            <ScrollRestoration/>
            <section className="mb-12">
                <div className="container">
                    <div className="mb-8">
                        <Title text={'আসন ভিত্তিক নির্বাচনী তথ্য'} underline="type1" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="col-span-full md:col-start-1 md:col-end-2 border p-2 md:p-4">
                            <div className='text-center font-medium text-lg text-[#333] mb-5'>
                                নির্বাচনের তথ্য জানতে নিজ বিভাগ হতে আসনের উপর ক্লিক করুন
                            </div>
                            <DivisionNavigator page = 'seatNavigation'/>
                        </div>
                        <div className="col-span-full md:col-start-2 md:col-end-4 border p-2 md:p-4">
                            <div className='text-center font-medium text-lg text-[#333]'>
                                নির্বাচনের তথ্য জানতে আসনের উপর ক্লিক করুন
                            </div>
                            <SeatNavigationMap />
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}
