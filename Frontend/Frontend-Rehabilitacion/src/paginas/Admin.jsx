import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import React, { useState, useEffect } from 'react'
import ListaCards from '../components/ListaCards'
import { traerCookie } from '../Services/cookies'
import { GetData } from '../Services/api'

const Admin = () => {
  const [centros, setCentros] = useState([]);
  const esAdmin = traerCookie("super")
  useEffect(() => {
    const traerCentros = async () => {
      const centro = await GetData('centros/api/centros/')
      setCentros(centro)
    }
    traerCentros()
  }, [centros])
  return (
    <div>
      <Navbar />

      <ListaCards cards={centros} mostrarBotones={esAdmin} />

      <Footer />


    </div>
  )
}

export default Admin
