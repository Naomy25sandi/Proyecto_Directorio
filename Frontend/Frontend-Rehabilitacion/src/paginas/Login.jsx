import React, { useState } from 'react';
import LoginForm from '../components/Loginform';
import { postData } from '../Services/api';
import Swal from 'sweetalert2';
import '../Style/login.css';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const [correo, setCorreo] = useState("");
    const [clave, setClave] = useState("");
    const navigate = useNavigate()

    const validaUsuario = async (e) => {
        e.preventDefault();
        if (correo.trim() === "" || clave.trim() === "") {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Completa todos los campos',
            });
            return;
        }

        const usuario = {
            email: correo,
            password: clave
        };

        const respuesta = await postData(usuario, "inicio/");
        if (respuesta.success){
            navigate('/')
        }
    };

    return (
        <div className="login-container">
            <div className="login-image">
                <img src="src/assets/corazon.avif" alt="Inicio Sesión" />
            </div>
            <LoginForm
                alEnviar={validaUsuario}
                setCorreo={setCorreo}
                setClave={setClave}
                correo={correo}
                clave={clave}
            />
        </div>
    );
};

export default Login;
