// Importaciones necesarias desde React y react-router-dom
import React, { createContext, useState, useContext } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isSuperUser, setIsSuperUser] = useState(false);  // Estado para superusuario
    const [token, setToken] = useState(null);  // Estado para el token de autenticación

    const inicia = () => setToken(true);  // Inicializa el token (usuario autenticado)
    const cerrar = () => setToken(false);  // Cierra la sesión (elimina el token)

    return (
        <AuthContext.Provider value={{ isSuperUser, setIsSuperUser, token, setToken, inicia, cerrar }}>
            {children}
        </AuthContext.Provider>
    );
};

// Hook para usar el contexto fácilmente
export const useAuth = () => useContext(AuthContext);