import React, { useState, useEffect } from 'react'
import Mybarra from '../components/Mybarra'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ListaCards from '../components/ListaCards'
import '../Style/Home.css'
import { GetData } from '../Services/api'
import { traerCookie } from '../Services/cookies'

const Home = () => {
  const [centros, setCentros] = useState([])
  const esAdmin = traerCookie("super")

  useEffect(() => {
    const traerCentros = async () => {
      const centro = await GetData('centros/api/centros/')
      setCentros(centro)
    }
    traerCentros()
  }, [])

  return (
    <>
      <Navbar />
      <Mybarra />
      <h1 className="text-center mt-5">Centros de Rehabilitación</h1>
      <div className='lista-centros'>
        {centros.length === 0 ? (
          <h1>No hay centros</h1>
        ) : (
          <ListaCards cards={centros} mostrarBotones={esAdmin} />
        )}

        
      </div>
      <Footer />
    </>
  )
}

export default Home
