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
  const [sending, setSending] = useState(false); // Para manejar el estado de envío
  const [status, setStatus] = useState(''); // Para mostrar mensajes de error o éxito

  // Función para enviar el formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevenir la recarga de la página

    if (!nombre || !correo || !mensaje) {
      setStatus('Todos los campos son obligatorios.');
      return;
    }

    setSending(true);  // Indicar que el correo se está enviando
    setStatus(''); // Limpiar estado de mensaje previo

    const templateParams = {
      from_name: nombre,
      from_email: correo,
      message: mensaje,
    };

    // Enviar el correo usando emailjs
    emailjs
      .send(
        'service_5qywgro', // Service ID
        'template_tz9m39q', // Template ID
        templateParams,
        'gyavNxfTiy_WxTDId' // User ID
      )
      .then(
        (response) => {
          console.log('Correo enviado!', response.status, response.text);
          // Limpiar los campos después de enviar el correo
          setNombre('');
          setCorreo('');
          setMensaje('');
          setStatus('¡Mensaje enviado correctamente!');
        },
        (error) => {
          console.error('Error al enviar el correo:', error);
          setStatus('Hubo un error al enviar el mensaje. Intenta nuevamente.');
        }
      )
      .finally(() => {
        setSending(false);  // Volver a cambiar el estado de envío
      });
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <p className='h-5'>Contáctenos</p>
        
        {/* Mostrar el mensaje de estado */}
        {status && <p className="status-message">{status}</p>}

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
            <Button titulo={sending ? 'Enviando...' : 'Enviar'} type="submit" disabled={sending} /> 
            <Button evento={onClose} titulo='Cerrar' />
          </div>
        </form>

        <div className="contact-info">
          <a href="mailto:info@renacer.com">Email: info@renacer.com</a>
          <br />
          <a href="tel:+1234567890">Teléfono: (561)85657138</a>
        </div>
      </div>
    </div>
  );
};

export default Contacto;

