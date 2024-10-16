import React from 'react';
import Button from './Button';

const LoginForm = ({ alEnviar, setCorreo, setClave, correo, clave, cargando }) => {
    return (
        <div className="login-form">
            <h2>Inicia Sesión</h2>
            <form onSubmit={alEnviar}>
                <input
                    type="email"
                    placeholder="Correo Electrónico"
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                    required
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
                No tienes cuenta? <a href="/Registro">Regístrate aquí</a>
            </p>
        </div>
    );
};

export default LoginForm;
