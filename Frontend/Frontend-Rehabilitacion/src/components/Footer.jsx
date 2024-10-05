import React from 'react'

const Footer = () => {
  return (
    <div className='container-fluid'>

        <div className="row p-5 bg-secondary text-white">

          <div className="col-xs-12 col-md-lg-6 col-lg-3">
            <p className='h-3'>Sobre Nosotros</p>
           
          </div>

          <div className="col-xs-12 col-md-lg-6 col-lg-3">
             <p className='h-5' >Políticas y Términos</p>
             <p className='h-5'>Política de privacidad</p>
             <p className='h-5'>Términos de uso</p>
             <p className='h-5'>Aviso legal</p>
          </div>

          <div className="col-xs-12 col-md-lg-6 col-lg-3">
             <p className='h-5'>Nuestra ubicación</p>
             <p>Estamos ubicados en Jardín de Lourdes, Piedades de Santa Ana, Costa Rica.</p>
             
          </div>

          <div className="col-xs-12 col-md-lg-6 col-lg-3">
             <p className='h-5'>Contacto</p>
             <p>Email: <a href="mailto:info@renacer.com">info@renacer.com</a></p>
             <p>Teléfono: <a href="tel:+1234567890">(561)85657138 </a></p>
          </div>
        
        </div>
      
    </div>
  )
}

export default Footer
