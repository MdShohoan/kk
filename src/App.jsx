import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState } from 'react'
import ElectionShortStatistics from './components/ElectionShortStatistics/ElectionShortStatistics'
import ElectionInformation from './components/ElectionInformation/ElectionInformation'

function App() {
  return (
    <>
      <ElectionShortStatistics />
      <ElectionInformation />
    </>
  )
}

export default App
