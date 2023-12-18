import Section from "../common/Section/Section"
import BangladeshMap from '../../components/common/BangladeshMap/BangladeshMap'
import Title from "../common/Title/Title"
import UnofficialResult from "../UnofficialResult/UnofficialResult"

function Maps() {
    return (
        <Section>
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="border rounded pt-4">
                        <Title>
                            নির্বাচনের তথ্য জানতে জেলার উপর ক্লিক করুন
                        </Title>
                        <BangladeshMap />
                    </div>
                    <div className="border rounded pt-4">
                        <UnofficialResult />
                        <div className=" mx-auto flex justify-center items-center w-[300px] h-[250px] bg-gray-300 mt-8 mb-2 md:mb-0">
                            ads
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default Maps