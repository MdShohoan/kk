import Section from "../common/Section/Section"
import BangladeshMap from '../../components/common/BangladeshMap/BangladeshMap'
import Title from "../common/Title/Title"
import UnofficialResult from "../UnofficialResult/UnofficialResult"
import SeatNavigator from '../../components/common/SeatNavigator/SeatNavigator'

function Maps() {
    return (
        <Section>
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="border-0 lg:border rounded pt-4">
                        <Title>
                            নির্বাচনের তথ্য জানতে জেলার উপর ক্লিক করুন
                        </Title>
                        <BangladeshMap />
                    </div>
                    <div className="border-0 lg:border rounded pt-4 px-0 md:px-2">
                        <Title>নির্বাচনের তথ্য জানতে আসন নির্বাচন করুন</Title>
                        <SeatNavigator className={'grid-cols-2 lg:grid-cols-2 mb-12 px-0 md:px-2'}/>
                        <UnofficialResult />
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default Maps