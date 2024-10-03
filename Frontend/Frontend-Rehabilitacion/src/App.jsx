import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Mycard from './components/Mycard'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Mycard/>
      <Mycard/>
    </>
  )
}

export default App
