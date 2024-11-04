import React from 'react'; // Importa React
import { AuthContext } from './AuthProvider'; // Importa el contexto de autenticación desde AuthProvider
import { useContext } from 'react'; // Importa el hook useContext de React
import { Navigate } from 'react-router-dom'; // Importa el componente Navigate de react-router-dom

// Componente de RutaPrivada
const RutaPrivada = ({ route }) => {
    // Usa el hook useContext para acceder al contexto de autenticación
    const { autentica } = useContext(AuthContext); 

    return (
        // Comprueba si el usuario está autenticado
        autentica ? (
            // Si está autenticado, muestra la ruta o componente que se pasó como prop
            route 
        ) : (
            // Si no está autenticado, redirige al usuario a la página de inicio de sesión
            <Navigate to="/Login" />
        )
    );
}

export default RutaPrivada;