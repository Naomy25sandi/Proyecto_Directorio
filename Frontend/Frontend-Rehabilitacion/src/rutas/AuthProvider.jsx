// Importaciones necesarias desde React y react-router-dom
import React, { createContext, useState, useContext } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado para saber si el usuario está autenticado
    const [isSuperUser, setIsSuperUser] = useState(false); // Estado para superusuario
    const [token, setToken] = useState(null)
    return (
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, isSuperUser, setIsSuperUser, token, setToken }}>
            {children}
        </AuthContext.Provider>
    );
};

// Hook para usar el contexto fácilmente
export const useAuth = () => useContext(AuthContext);