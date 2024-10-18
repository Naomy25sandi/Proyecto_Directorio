import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import React, { useState, useEffect } from 'react'
import ListaCards from '../components/ListaCards'
import { traerCookie } from '../Services/cookies'
import { GetData } from '../Services/api'
import ModalAggCentros from '../components/ModalAggCentros'
const Admin = () => {
  const [centros, setCentros] = useState([]);
  const esAdmin = traerCookie("super")
  const [modal, setModal] = useState(false)

  useEffect(() => {
    const traerCentros = async () => {
      const centro = await GetData('centros/api/centros/')
      setCentros(centro)
    }
    traerCentros()
  }, [centros])
  
  const abrirModal = () => {
    setModal(true)
  }
  const cerrarModal = () => {
    setModal(false)
  } 
  return (
    <div>
      <Navbar />

      <ListaCards cards={centros} mostrarBotones={esAdmin} />

      
      <ModalAggCentros mostrar={modal} cerrar={cerrarModal} abrir={abrirModal}/>
      <Footer />  


    </div>
  )
}

export default Admin
