import React from 'react'

const InfoCentros = () => {
  return (
    <div>
      <Navbar />
      <h1>{centro.nombre}</h1>
      <p>{centro.descripcion}</p>
      <p>{centro.provincia}</p>
      <p>{centro.distrito}</p>
      
      {/* Agrega más información según lo que tengas disponible */}
      <Footer />
    </div>
  )
}

export default InfoCentros
