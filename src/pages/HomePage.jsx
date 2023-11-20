import Hero from '../components/Hero/Hero'
import ElectionShortStatistics from '../components/ElectionShortStatistics/ElectionShortStatistics'
import QuickLinks from '../components/QuickLinks/QuickLinks'
import Video from '../components/Video/Video'
import ElectionInformation from '../components/ElectionInformation/ElectionInformation'
import UnofficialResult from '../components/UnofficialResult/UnofficialResult'
import ResultsHistory from '../components/ResultsHistory/ResultsHistory'
import Footer from '../components/Footer/Footer'
import LatestNews from '../components/LatestNews/LatestNews'
import Sponsor from '../components/Sponsor/Sponsor'

function HomePage() {
    return (
        <>
            <Hero />
            <Sponsor/>
            <ElectionShortStatistics />
            <div className='w-[300px] h-[250px] lg:h-[250px] lg:w-[970px] mx-auto bg-gray-200 mb-8 flex justify-center items-center font-extrabold text-[36px]'>
                ads: 970*250
            </div>
            <QuickLinks />
            <Video />
            <ElectionInformation />
            <LatestNews />
            <UnofficialResult />
            <ResultsHistory />
            <Footer />
        </>
    )
}

export default HomePage