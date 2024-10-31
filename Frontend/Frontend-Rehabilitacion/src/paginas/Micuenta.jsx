import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Saludar from '../components/Saludar'
import Button from '../components/Button'
import Formpaciente from '../components/Formpaciente'

const Micuenta = () => {
 
  
  return (
    <div>
      <Navbar/>
      <br />
      <Saludar/>
      <br />
      <Formpaciente/>
      <Button titulo={"Cerrar Sesion"}/>
      <Footer/>
    </div>
  )
}

export default Micuenta



