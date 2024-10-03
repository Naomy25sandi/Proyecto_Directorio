import React from 'react';
import Button from '../components/Button'; 


const Login = () => {
    const handleLogin = (e) => {
        e.preventDefault();
        // Logica para manejar el inicio de sesion y la funcion para recargar la pagina, preguntar si esto se hace dentro del use effect
    };

    return ( // preguntar como hago para separar este registro si ya tiene la funcion incluida
        <div className="login-container">
            <div className="login-image">
                <img src="src/assets/corazon.avif" alt="Inicio Sesión" />
            </div>
            <div className="login-form">
                <h2>Inicia Sesión</h2>
                <form onSubmit={handleLogin}>
                    <input type="email" placeholder="Correo Electrónico" required />
                    <input type="password" placeholder="Contraseña" required />
                    <Button titulo="Inicia Sesión" type="submit" />
                </form>
                <p className="register-link">
                    No tienes cuenta? <a href="/register">Regístrate aquí</a>
                </p>
            </div>
        </div>
    );
};

export default Login;
