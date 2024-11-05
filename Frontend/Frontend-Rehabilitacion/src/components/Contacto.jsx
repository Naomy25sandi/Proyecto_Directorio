import React, { useState } from 'react';
import Button from './Button';
import '../Style/contacto.css';
import emailjs from 'emailjs-com';

// Componente Contacto, que recibe dos props: isOpen y onClose
const Contacto = ({ isOpen, onClose }) => {
  if (!isOpen) return null;  // Si isOpen es falso, no muestra nada

  // Estados para el nombre, correo y mensaje
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [mensaje, setMensaje] = useState('');

  // Función para enviar el formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevenir la recarga de la página

    const templateParams = {
      from_name: nombre,
      from_email: correo,
      message: mensaje,
    };

    // Enviar el correo usando emailjs
    emailjs
      .send(
        'template_tz9m39q',
        'service_5qywgro', 
        templateParams,
        'gyavNxfTiy_WxTDId' 
      )
      .then(
        (response) => {
          console.log('Correo enviado!', response.status, response.text);
          // Limpiar los campos después de enviar el correo
          setNombre('');
          setCorreo('');
          setMensaje('');
          alert('¡Mensaje enviado correctamente!');
        },
        (error) => {
          console.error('Error al enviar el correo:', error);
          alert('Hubo un error al enviar el mensaje. Intenta nuevamente.');
        }
      );
  };

  return (
    <div className="modal-overlay"> 
      <div className="modal-content"> 
        <p className='h-5'>Contáctenos</p> 
        <form onSubmit={handleSubmit}>
          <div className='input_container'>
            <input
              className='input'
              type="text"
              placeholder='Nombre'
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
            <input
              className='input'
              type="email"
              placeholder='Su correo'
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              required
            />
            <textarea
              className='input2'
              placeholder='Mensaje'
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
              required
            />
          </div>
          <div className="modal-actions">
         
            <Button titulo='Enviar' type="submit" /> 
            <Button evento={onClose} titulo='Cerrar' /> 
          </div>
        </form>
        <div className="contact-info">
          <a href="mailto:info@renacer.com">Email: info@renacer.com</a>
          <a href="tel:+1234567890">Teléfono: (561)85657138</a>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
