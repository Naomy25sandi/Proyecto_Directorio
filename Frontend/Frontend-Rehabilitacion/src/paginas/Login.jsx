import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../rutas/AuthProvider';//lo pase para aca a ver si era eso?
import LoginForm from '../components/Loginform';
import { postData, usuariosPost } from '../Services/api';
import Swal from 'sweetalert2';
import Saludar from '../components/Saludar';
import '../Style/login.css';
import { useNavigate } from 'react-router-dom';
import { crearCookie, traerCookie } from '../Services/cookies';
import { useAuth } from '../rutas/AuthProvider';


const Login = () => {
    const [correo, setCorreo] = useState("");
    const [clave, setClave] = useState("");
    const [cargando, setCargando] = useState(false); // Estado para indicar si se está cargando
    const [userName, setUserName] = useState("");
    const navigate = useNavigate();
    const { inicia, cerrar, setToken, setIsSuperUser } = useAuth();  // Usar el hook para acceder al contexto
    const token = traerCookie("token")
    useEffect(() => {
        const tokenCookie = traerCookie("token");  // Método para obtener la cookie "token"
        if (tokenCookie) {
            setToken(true);
        }
    }, []);

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
            const respuesta = await usuariosPost(usuario, "inicio/");

            setCargando(false);

            if (respuesta && respuesta.success) {
                Swal.fire({
                    icon: 'success',
                    title: '¡Bienvenido!',
                    text: 'Has iniciado sesión correctamente.',
                });

                const { id, username, super: isSuperUser, correo, apellido, token_acceso } = respuesta.data.usuario || {};
                console.log(id, username, isSuperUser);
                setUserName(username || "usuario");

                setToken(true);
                inicia();
                setIsSuperUser(isSuperUser);
                crearCookie("super", isSuperUser, 1);
                crearCookie("usuario", username, 1);
                crearCookie("apellido", apellido, 1)
                crearCookie("correo", correo, 1)
                crearCookie("token", token_acceso, 1)
                if (isSuperUser) {
                    navigate('/admin');
                } else {
                    navigate('/micuenta');
                }

            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: respuesta.message || 'Credenciales incorrectas',
                });
            }
        } catch (error) {
            console.log(error)
            setCargando(false);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No se pudo iniciar sesión. Intenta de nuevo.',
            });
            navigate('/');
        }
    };

    useEffect(() => {
        if (userName) {

            console.log(`Bienvenido ${userName}`);
        }
    }, [userName]);


    return (
        <div className="login-container">
            {token ? (
                <Saludar username={userName} />
            ) : (

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

