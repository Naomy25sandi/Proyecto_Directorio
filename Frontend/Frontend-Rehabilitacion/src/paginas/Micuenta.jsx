import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Saludar from '../components/Saludar'
import Button from '../components/Button'


const Micuenta = () => {
 
  
  return (
    <div>
      <Navbar/>
      <br />
      <Saludar/>
      <br />
      <Button titulo = {"Editar información"}/>
      <Button titulo={"Cerrar Sesion"}/>
      <Footer/>
    </div>
  )
}

export default Micuenta



