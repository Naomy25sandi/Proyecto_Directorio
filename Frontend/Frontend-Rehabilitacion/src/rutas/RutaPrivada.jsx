import React from 'react'; // Importa React
import { AuthContext } from './AuthProvider'; // Importa el contexto de autenticación desde AuthProvider
import { useContext } from 'react'; // Importa el hook useContext de React
import { Navigate } from 'react-router-dom'; // Importa el componente Navigate de react-router-dom
import { traerCookie } from '../Services/cookies';

// Componente de RutaPrivada
// Cambia de "autentica" a "token"
const RutaPrivada = ({ route }) => {
    const { token } = useContext(AuthContext);  // Verifica el estado token
    return token ? route : <Navigate to="/inicio" />;
};
export const RutaPrivadaSuperUsuario = ({ route }) => {
    const { token, isSuperUser } = useContext(AuthContext);  // Verifica tanto "token" como "isSuperUser"

    return token && isSuperUser ? route : <Navigate to="/inicio" />;
};


export default RutaPrivada 