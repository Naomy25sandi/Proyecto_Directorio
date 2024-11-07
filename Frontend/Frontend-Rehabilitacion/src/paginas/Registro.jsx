import React, { useState } from 'react';
import Button from '../components/Button';
import { postData, usuariosPost } from '../Services/api';
import Swal from "sweetalert2";
import '../Style/registro.css';
import { useNavigate } from 'react-router-dom';


// Definimos los estados para manejar la información del formulario
const Registro = () => {
    const [nombre, setNombre] = useState("");
    const [apellidos, setApellidos] = useState("");
    const [correo, setCorreo] = useState("");
    const [clave, setClave] = useState("");
    const [cargando, setCargando] = useState(false);// Estado para indicar si se está cargando
    const navigate = useNavigate();

    const validarEmail = (email) => {// fncion para validar caracteres especiales 
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());//  Verifica si el correo cumple con la expresion
    };

    // Función para manejar el registro del usuario
    const registrarCuenta = async (e) => {
        e.preventDefault();// prevenir que se recargue


        // Validamos que todos los campos estén llenos
        if (nombre.trim() === "" || apellidos.trim() === "" || correo.trim() === "" || clave.trim() === "") {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Completa todos los campos',
            });
            return;
        }
        // Validamos que el correo electrónico sea válido
        if (!validarEmail(correo)) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Correo electrónico inválido',
            });
            return;
        }
        // creamos usuario para almacenar la información de cada input del formulario
        const usuario = {
            username: nombre,
            last_name: apellidos,
            email: correo,
            password: clave
        };

        setCargando(true); // activa el estado de carga
        // con la variable respuesta llamamos el metodo para enviar la información Backend
        const respuesta = await usuariosPost(usuario, "registro/");
        setCargando(false); // Desactivar estado de carga

        if (respuesta && respuesta.success) {
            Swal.fire({
                icon: 'success',
                title: 'Registro exitoso',
                text: 'Bienvenido!',
            });
            navigate("/inicio"); // Redirige a inicio de sesión
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: respuesta.error || 'Ocurrió un error al registrarte',
            });
        }
    };

    return (
        <div>
            <div className="register-container">
                <div className="register-image">
                    <img src="src/assets/corazon.avif" alt="Imagen de registro" />
                </div>
                <div className="register-form">
                    <h2>Regístrate</h2>
                    <p>
                        O <a href="/inicio">inicia sesión</a>
                    </p>
                    <form onSubmit={registrarCuenta}>
                        <input
                            type="text"
                            placeholder="Nombre"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Apellidos"
                            value={apellidos}
                            onChange={(e) => setApellidos(e.target.value)}
                        />
                        <input
                            type="email"
                            placeholder="Correo Electrónico"
                            value={correo}
                            onChange={(e) => setCorreo(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Contraseña"
                            value={clave}
                            onChange={(e) => setClave(e.target.value)}
                        />
                        <Button titulo="Registrarse" type="submit" disabled={cargando} />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Registro;
