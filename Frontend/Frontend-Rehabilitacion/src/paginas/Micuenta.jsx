import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Saludar from '../components/Saludar'
import Button from '../components/Button'
import ModalAggPaciente from '../components/ModalAggPaciente'
import { traerCookie } from '../Services/cookies'


const Micuenta = () => {


  return (
    <div>
      <Navbar />
      <br />
      <Saludar usuario={traerCookie("usuario")} />
      <br />
      <ModalAggPaciente />
      <Button titulo={"Editar información"} />
      <p>Apellido {traerCookie("apellido")}</p>
      <p>Correo {traerCookie("correo")}</p>
      <Footer />
    </div>
  )
}

export default Micuenta



