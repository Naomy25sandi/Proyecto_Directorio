import React from 'react'
// Componente Saludar que recibe una prop llamada usuario
const Saludar = ({usuario}) => {
  return <h1>Bienvenido, {usuario}  !</h1>
  // Renderiza un saludo con el nombre del usuario
}

export default Saludar // exporto el componente.

