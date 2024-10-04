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
             <p className='h-5'>Encuentrános</p>
          </div>

          <div className="col-xs-12 col-md-lg-6 col-lg-3">
             <p className='h-5'>Columna</p>
          </div>
        
        </div>
      
    </div>
  )
}

export default Footer
