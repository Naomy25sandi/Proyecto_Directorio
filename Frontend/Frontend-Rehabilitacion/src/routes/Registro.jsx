import React, { useEffect } from 'react'
import Button from '../components/Button'
import { useRef , useState } from 'react';
import { GetData, postData } from '../Services/api';
import Swal from "sweetalert2";


const Registro = () => {
    const [usuario, SetUsurio] = useState("");
    const [correo, setCorreo] = useState("");
    const [contra, setContra] = useState("");

    const nombreRef = useRef("");
    const apellidosRef= useRef("");
    const emailRef = useRef("");
    const passwordRef= useRef("");

    const [data, setData] = useState([]);
    // const navigate = useNavigate();

    useEffect(()=>{
        const obtenerUsuarios = async ()=>{
            const dataUsuarios= await GetData("users"); // preguntarle si estos user son los user de la base de datos
            setData(dataUsuarios);
        };
         obtenerUsuarios()
    }, []);

    const handleRegister = (e) => {
          e.preventDefault();

          const nombreTrim = nombreRef.current.value.trim();
          const apellidosTrim= apellidosRef.current.value.trim();
          const emailTrim = emailRef.current.value.trim();
          const passwordTrim = passwordRef.current.value.trim();

          const user = data.find((user) => user.email === emailTrim);
          if (user){
            Swal.fire({
                icon: "error",
                title:"Usuario existente",
                text:"El correo electrónico ya está registrado"
                
            });
            // navigate ("/login") aun tengo que crear las rutas
          } else {
            if( !nombreTrim || !apellidosTrim || emailTrim || !passwordTrim){
                Swal.fire({
                    icon: "error",
                    text: "Llene todos los campos"
                });
            }else{
                // enviar datos del nuevo usuario 
                // await postData({

                // })
            }


          }
          
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
                    <input type="text" placeholder="Nombre" ref={nombreRef} required  onChange={(e)=> SetUsurio(e.target.value)}/>
                    <input type="text" placeholder="Apellidos" ref={apellidosRef} required />
                    <input type="email" placeholder="Correo Electrónico" ref={emailRef} onChange={(e)=> setCorreo(e.target.value)} required />
                    <input type="password" placeholder="Contraseña"  ref={passwordRef}required onChange={(e)=>setContra(e.target.value)} />
                    <Button titulo="Registrarse" type="submit" />
                </form>
            </div>
        </div>
    </div>
  )
}

export default Registro
