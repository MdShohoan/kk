import Section from "../common/Section/Section"
import BangladeshMap from '../../components/common/BangladeshMap/BangladeshMap'
import SeatNavigationMap from '../../components/common/SeatNavigationMap/SeatNavigationMap'
import Title from "../common/Title/Title"
import UnofficialResult from "../UnofficialResult/UnofficialResult"

function Maps() {
    return (
        <Section>
            <div className="container">
                {/* <Title>
                    নির্বাচনের তথ্য জানতে মানচিত্রের উপর ক্লিক করুন
                </Title> */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="border rounded pt-4">
                        <Title>
                            নির্বাচনের তথ্য জানতে জেলার উপর ক্লিক করুন
                        </Title>
                        <BangladeshMap />
                    </div>
                    <div className="border rounded pt-4">
                        <UnofficialResult/>
                    </div>
                </div>
                {/* <div className=" mx-auto max-w-2xl">
                    <BangladeshMap />
                </div> */}
            </div>
        </Section>
    )
}

export default Maps