import ElectionShortStatistics from '../components/ElectionShortStatistics/ElectionShortStatistics'
import QuickLinks from '../components/QuickLinks/QuickLinks'
import Video from '../components/Video/Video'
// import UnofficialResult from '../components/UnofficialResult/UnofficialResult'
import ResultsHistory from '../components/ResultsHistory/ResultsHistory'
import LatestNews from '../components/LatestNews/LatestNews'
// import Sponsor from '../components/Sponsor/Sponsor'
import Layout from '../components/common/Layout/Layout'
import { ScrollRestoration } from 'react-router-dom'
import Maps from '../components/Maps/Maps'
import Schedule from '../components/common/Schedule/Schedule'
// import Section from '../components/common/Section/Section'
import result from '../assets/data/result.json'

function HomePage() {
    const chartData = result.data.map((item)=>{
        return {year: item.year, series: [item?.alSeat, item?.bnpSeat, item?.jpSeat, item?.aoSeat]}
    })
    return (
        <>
            <ScrollRestoration />
            <Layout>
                {/* <Sponsor /> */}
                <Schedule />
                <ElectionShortStatistics />
                {/* <div className='w-[300px] h-[250px] lg:h-[250px] lg:w-[970px] mx-auto bg-gray-200 mb-8 flex justify-center items-center font-extrabold text-[36px]'>
                    ads: 970*250
                </div> */}
                <QuickLinks />
                {/* <ElectionInformation /> */}
                <Maps />
                {/* <Section>
                    <div className='container'>
                        <UnofficialResult />
                    </div>
                </Section> */}
                <ResultsHistory data={chartData}/>
                <Video />
                <LatestNews />
            </Layout>
        </>
    )
}

export default HomePage