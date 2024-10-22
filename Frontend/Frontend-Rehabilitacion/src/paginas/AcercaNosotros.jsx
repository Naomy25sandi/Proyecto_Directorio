import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../Style/acercanosotros.css';

const AcercaNosotros = () => {
  return (
    <>
        <Navbar/>
         <div className='contenedor'>
         <br />
         <h2>Acerca de Nosotros</h2>
         <p>En Renacer: Directorio de Rehabilitación, creemos en la esperanza y la recuperación. Nuestra misión es apoyar a las personas y familias que enfrentan el desafío de la adicción, proporcionándoles un recurso integral y accesible para encontrar el centro de rehabilitación adecuado.</p>
         <br />
         <h3>Nuestra Historia</h3>
          <p>La idea de Renacer surge de la necesidad de crear un espacio donde la búsqueda de ayuda no sea abrumadora. Sabemos que el camino hacia la recuperación puede ser complicado y solitario, y es por eso que nos comprometemos a facilitar el acceso a información verificada y relevante. Nuestro equipo está formado por profesionales y personas con experiencia en el campo de la salud mental y la adicción, quienes han trabajado incansablemente para construir una plataforma que haga la diferencia.
         </p>
        <br />
         <h3>Nuestro Compromiso</h3>
         <p>Estamos dedicados a proporcionar un espacio seguro y solidario donde las familias puedan encontrar respuestas y apoyo. Creemos que cada persona merece una segunda oportunidad y el acceso a la ayuda necesaria para renacer.</p>
         <br />
         <h3>Únete a Nuestra Comunidad</h3>
         <p>Invitamos a todos a ser parte de esta comunidad. Ya sea que estés buscando ayuda para ti o para un ser querido, estamos aquí para acompañarte en cada paso del camino hacia la recuperación.

           Juntos, podemos transformar vidas y construir un futuro más saludable.</p>
         </div>
         <Footer/>
    </>
    
  )
}

export default AcercaNosotros
