import React from 'react'

// creacion del componente boton dandole props reutilizables para llamarlas y darle la funcionalidad que necesito

const Button = ({ titulo, type, evento, className = "btn btn-success" }) => {

    return (
        <button className={className} type={type} onClick={evento}>{titulo}</button>
    )
}
export default Button