import React from 'react';
import Button from './Button';
// Define el componente LoginForm que recibe varias props: alEnviar, setCorreo, setClave, correo, clave y cargando
const LoginForm = ({ alEnviar, setCorreo, setClave, correo, clave, cargando }) => {
    return (
        <div className="login-form">{/* Contenedor principal del formulario de inicio de sesión */}
            <h2>Inicia Sesión</h2>
            <form onSubmit={alEnviar}>{/* Maneja el evento de envío del formulario */}
                <input
                    type="email"
                    placeholder="Correo Electrónico"
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                    required // Hace que este campo sea obligatorio
                />
                <input
                    type="password"
                    placeholder="Contraseña"
                    value={clave}
                    onChange={(e) => setClave(e.target.value)}
                    required
                />
                <Button 
                    titulo={cargando ? "Cargando..." : "Inicia Sesión"} 
                    type="submit" 
                    disabled={cargando} 
                />
            </form>
            <p className="register-link">
                No tienes cuenta? <a href="/Registro">Regístrate aquí</a>{/*Si no tiene cuenta lo dirige a Registro */}
            </p>
        </div>
    );
};

export default LoginForm;
