import React, { useEffect } from 'react'
import Button from '../components/Button'
import { useRef, useState } from 'react';
import { GetData, postData } from '../Services/api';
import Swal from "sweetalert2";
import '../Style/registro.css'
const Registro = () => {
    const [nombre,setNombre]= useState("");
    const [apellidos,setApellidos]= useState("");
    const [correo,setCorreo]= useState("");
    const [clave,setClave]= useState("");


    const registrarCuenta=async()=>{
        if(nombre.trim()==="" || apellidos.trim()==="" || correo.trim()==="" || clave.trim()===""){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Completa todos los campos',
            })
        
        const usuario={
            username:nombre,
            last_name:apellidos,
            email:correo,
            password:clave
        }
        await 
    }

return (
        <div>
            <div className="register-container">
                <div className="register-image">
                    <img src="src/assets/corazon.avif" />
                </div>
                <div className="register-form">
                    <h2>Regístrate</h2>
                    <p>
                        O <a href="/login">inicia sesión</a>
                    </p>
                    <form onSubmit={handleRegister}>
                        <input type="text" placeholder="Nombre" value={nombre} onChange={(e)=>setNombre(e.target.value)}/>
                        <input type="text" placeholder="Apellidos" value={apellidos} onChange={(e)=>setApellidos(e.target.value)}/>
                        <input type="email" placeholder="Correo Electrónico" value={correo} onChange={(e)=>setCorreo(e.target.value)}/>
                        <input type="password" placeholder="Contraseña" value={clave} onChange={(e)=>setClave(e.target.value)}/>
                        <Button titulo="Registrarse" type="submit" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Registro
