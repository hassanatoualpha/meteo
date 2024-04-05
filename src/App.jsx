import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Meteoconakry from './component/Meteoconakry'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Meteoconakry></Meteoconakry>
    
    </>
  )
}

export default App
