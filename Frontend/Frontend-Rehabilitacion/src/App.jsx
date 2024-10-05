import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Mycard from './components/Mycard'
import Mybarra from './components/Mybarra'
import Footer from './components/Footer'
import RutasPag from './rutas/RutasPag'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RutasPag/>
      
    </>
  )
}

export default App
