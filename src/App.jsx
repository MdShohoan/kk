import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState } from 'react'
import ElectionStatistics from './components/ElectionStatistics/ElectionStatistics'

function App() {
  const [count, setCount] = useState(0)
  return (
    <ElectionStatistics />
  )
}

export default App
