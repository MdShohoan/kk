import './App.css'
import ElectionShortStatistics from './components/ElectionShortStatistics/ElectionShortStatistics'
import ElectionInformation from './components/ElectionInformation/ElectionInformation'
import UnofficialResult from './components/UnofficialResult/UnofficialResult'
import ResultsHistory from './components/ResultsHistory/ResultsHistory'

function App() {
  return (
    <>
      <ElectionShortStatistics />
      <ElectionInformation />
      <UnofficialResult/>
      <ResultsHistory/>
    </>
  )
}

export default App
