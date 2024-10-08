import React from 'react'
import Button from 'react-bootstrap/Button';
// creacion del componente boton dandole props reutilizables para llamarlas y darle la funcionalidad que necesito

const Button = ({ titulo, type, evento, className = "outline-secondary" }) => {

    return (
        <button className={className} type={type} onClick={evento}>{titulo}</button>
    )
}
export default Button
