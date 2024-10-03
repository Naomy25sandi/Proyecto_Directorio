import React from 'react'
import Button from '../components/Button'


const Registro = () => {


  
 const handleRegister = (e) => {
          e.preventDefault();
          // Lógica para manejar el registro
      };
  return (
    <div>
      <div className="register-container">
            <div className="register-image">
                <img src = "src/assets/corazon.avif"  />
            </div>
            <div className="register-form">
                <h2>Regístrate</h2>
                <p>
                    O <a href="/login">inicia sesión</a>
                </p>
                <form onSubmit={handleRegister}>
                    <input type="text" placeholder="Nombre" required />
                    <input type="text" placeholder="Apellidos" required />
                    <input type="email" placeholder="Correo Electrónico" required />
                    <input type="password" placeholder="Contraseña" required />
                    <Button titulo="Registrarse" type="submit" />
                </form>
            </div>
        </div>
    </div>
  )
}

export default Registro
