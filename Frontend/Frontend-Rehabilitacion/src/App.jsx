import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Mycard from './components/Mycard'
import Mybarra from './components/Mybarra'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Mybarra/>
      <Mycard/>
      
    </>
  )
}

export default App
