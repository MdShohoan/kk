import './App.css'
import ElectionShortStatistics from './components/ElectionShortStatistics/ElectionShortStatistics'
import ElectionInformation from './components/ElectionInformation/ElectionInformation'
import UnofficialResult from './components/UnofficialResult/UnofficialResult'
import ResultsHistory from './components/ResultsHistory/ResultsHistory'
import Hero from './components/Hero/Hero'
import QuickLinks from './components/QuickLinks/QuickLinks'
import Video from './components/Video/Video'

function App() {
  return (
    <>
      <Hero />
      <div className='h-[90px] w-[970px] mx-auto bg-gray-200 mb-8 flex justify-center items-center font-extrabold text-[36px]'>
        ads: 970*90
      </div>
      <ElectionShortStatistics />
      <div className='h-[250px] w-[970px] mx-auto bg-gray-200 mb-8 flex justify-center items-center font-extrabold text-[36px]'>
        ads: 970*250
      </div>
      <QuickLinks/>
      <Video/>
      <ElectionInformation/>
      <UnofficialResult/>
      <ResultsHistory/>
    </>
  )
}

export default App
