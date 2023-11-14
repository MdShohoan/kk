import './App.css'
import ElectionShortStatistics from './components/ElectionShortStatistics/ElectionShortStatistics'
import ElectionInformation from './components/ElectionInformation/ElectionInformation'
import UnofficialResult from './components/UnofficialResult/UnofficialResult'
import ResultsHistory from './components/ResultsHistory/ResultsHistory'
import Hero from './components/Hero/Hero'

function App() {
  return (
    <>
      <Hero/>
      <ElectionShortStatistics />
      <ElectionInformation />
      <UnofficialResult/>
      <ResultsHistory/>
    </>
  )
}

export default App
