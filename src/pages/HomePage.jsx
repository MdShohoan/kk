import ElectionShortStatistics from '../components/ElectionShortStatistics/ElectionShortStatistics'
import QuickLinks from '../components/QuickLinks/QuickLinks'
import Video from '../components/Video/Video'
import ElectionInformation from '../components/ElectionInformation/ElectionInformation'
// import UnofficialResult from '../components/UnofficialResult/UnofficialResult'
import ResultsHistory from '../components/ResultsHistory/ResultsHistory'
import LatestNews from '../components/LatestNews/LatestNews'
import Sponsor from '../components/Sponsor/Sponsor'
import Layout from '../components/common/Layout/Layout'
import { ScrollRestoration } from 'react-router-dom'
import Maps from '../components/Maps/Maps'
import Timeline from '../components/common/Timeline/Timeline'
// import Section from '../components/common/Section/Section'

function HomePage() {
    return (
        <>
            <ScrollRestoration />
            <Layout>
                <Sponsor />
                <ElectionShortStatistics />
                <div className='w-[300px] h-[250px] lg:h-[250px] lg:w-[970px] mx-auto bg-gray-200 mb-8 flex justify-center items-center font-extrabold text-[36px]'>
                    ads: 970*250
                </div>
                <Timeline />
                <QuickLinks />
                <ElectionInformation />
                <Maps />
                {/* <Section>
                    <div className='container'>
                        <UnofficialResult />
                    </div>
                </Section> */}
                <ResultsHistory />
                <Video />
                <LatestNews />
            </Layout>
        </>
    )
}

export default HomePage