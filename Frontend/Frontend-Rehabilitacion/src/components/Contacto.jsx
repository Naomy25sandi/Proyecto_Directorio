import React from 'react'
import Button from './Button';
import { useState } from 'react';
import '../Style/contacto.css'

const Contacto = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const [nombre, setNombre]= useState('');
    const [ correo, setCorreo]= useState('');
    const  [mensaje, setMensaje]= useState('');

    
  return (
 <div className="modal-overlay">
 <   div className="modal-content">
     <p className='h-5'>Contáctenos</p>
     <div className='input_container'>
     <input className='input' type="text" placeholder='Nombre' value={nombre} onChange={(e)=>setNombre(e.target.value)}/>
     <input className='input' type="text" placeholder='Su correo' value={correo} onChange={(e)=>setCorreo(e.target.value)}/>
     <input className='input2' type="text" placeholder='Mensaje' value={mensaje} onChange={(e)=>setMensaje(e.target.value)}/>
     </div>
     <a href="mailto:info@renacer.com">Email:info@renacer.com</a>
     <a href="tel:+1234567890">Teléfono:(561)85657138 </a>

     {/* <Button evento={Enviar} titulo='Enviar'/> */}

    <Button evento={onClose} titulo='Cerrar'/>
    </div>
 </div>
  )
}

export default Contacto
