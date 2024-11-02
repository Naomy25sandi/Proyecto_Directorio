import React, { useState, useEffect } from 'react';
import LoginForm from '../components/Loginform';
import { postData } from '../Services/api';
import Swal from 'sweetalert2';
import Saludar from '../components/Saludar';
import '../Style/login.css';
import { useNavigate } from 'react-router-dom';
import { crearCookie } from '../Services/cookies';


const Login = () => {
    const [correo, setCorreo] = useState("");
    const [clave, setClave] = useState("");
    const [cargando, setCargando] = useState(false); // Estado para indicar si se está cargando
    const [userName, setUserName] = useState("");
    
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    const validarEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const validaUsuario = async (e) => {
        e.preventDefault();

        if (correo.trim() === "" || clave.trim() === "") {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Completa todos los campos',
            });
            return;
        };

        if (!validarEmail(correo)) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Correo electrónico inválido',
            });
            return;
        }

        const usuario = {
            email: correo,
            password: clave
        };

        setCargando(true);
        try {
            const respuesta = await postData(usuario, "inicio/");
            
            setCargando(false);
            if (respuesta && respuesta.success) {
                Swal.fire({
                    icon: 'success',
                    title: '¡Bienvenido!',
                    text: 'Has iniciado sesión correctamente.',
                });
                const { id, username, super: isSuperUser } = respuesta.data.usuario || {};
                console.log(id, username, isSuperUser);
                setUserName(username || "usuario");
                setIsLoggedIn(true);
                crearCookie("super", isSuperUser, 1);
                crearCookie("usuario", username, 1);
                navigate('/');
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: respuesta.message || 'Credenciales incorrectas',
                });
            }
        } catch (error) {
            setCargando(false);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No se pudo iniciar sesión. Intenta de nuevo.',
            });
        }
    };

    useEffect(() => {
        if (userName) {
            
            console.log(`Bienvenido ${userName}`);
        }
    }, [userName]);


    return (
        <div className="login-container">
            {isLoggedIn ? (
                <Saludar username={userName}/>
            ): (

                <>

            <div className="login-image">
                <img src="src/assets/corazon.avif" alt="Inicio Sesión" />
            </div>
            <LoginForm
                alEnviar={validaUsuario}
                setCorreo={setCorreo}
                setClave={setClave}
                correo={correo}
                clave={clave}
                cargando={cargando}
            />
            </>
            )}
        </div>
    );
};

export default Login;

