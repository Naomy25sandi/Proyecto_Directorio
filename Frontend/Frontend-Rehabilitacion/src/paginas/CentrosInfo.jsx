import React from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const CentrosInfo = () => {
  const location = useLocation()
  const { centro } = location.state || {} // Maneja el caso de que no haya estado

  return (
    <div>
      <Navbar />
      {centro ? (
        <>
          <h1>{centro.nombre}</h1>
          <p>{centro.descripcion}</p>
          <p>{centro.direccion}</p>
          {/* Agrega más información según lo que tengas disponible */}
        </>
      ) : (
        <p>No se encontró información del centro.</p>
      )}
      <Footer />
    </div>
  )
}

export default CentrosInfo
