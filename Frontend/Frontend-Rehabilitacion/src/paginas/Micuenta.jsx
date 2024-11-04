import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Saludar from '../components/Saludar'
import Button from '../components/Button'
import ModalAggPaciente from '../components/ModalAggPaciente'


const Micuenta = () => {
 
  
  return (
    <div>
      <Navbar/>
      <br />
      <Saludar/>
      <br />
      <ModalAggPaciente/>
      <Button titulo = {"Editar información"}/>
      
      <Footer/>
    </div>
  )
}

export default Micuenta



