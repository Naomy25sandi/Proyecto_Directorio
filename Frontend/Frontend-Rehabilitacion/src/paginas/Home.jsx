import React from 'react'
import Mybarra from '../components/Mybarra'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ListaCards from '../components/ListaCards'
import Map from '../components/Map'
import { useState, useEffect } from 'react'
import { GetData } from '../Services/api'
import '../Style/Home.css'


const Home = () => {
  const [centros, setCentros] = useState([])

  useEffect(() => {
    const traerCentros = async () => {
      const centro = await GetData('centros/api/centros/')
      setCentros(centro)
    }
    traerCentros()
  }, [centros])
  return (
    <>
      <Navbar />
      <Mybarra />
      <h1 className="text-center mt-5">Centros de Rehabilitación</h1>
      <div className='lista-centros'>
        {centros.length === 0 ? <h1>No hay centros</h1> : <ListaCards cards={centros} />}
      </div>
    
      <Footer />
    </>
  )
}

export default Home
