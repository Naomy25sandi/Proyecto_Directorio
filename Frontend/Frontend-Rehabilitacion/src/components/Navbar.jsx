import React, { useContext, useState } from 'react';
import Button from '../components/Button';
import Contacto from '../components/Contacto';
import '../Style/navbar.css';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../rutas/AuthProvider";// Importa el contexto
import { traerCookie, borrarTodoCookies } from '../Services/cookies';

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { token, isSuperUser, setToken, cerrar } = useContext(AuthContext); // Accede al contexto
  const navigate = useNavigate();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleLoginClick = () => {
    navigate('/inicio');
  };

  const handleRegisterClick = () => {
    navigate('/Registro');
  };

  const AboutUs = () => {
    navigate('/AcercaNosotros');
  };

  const Centros = () => {
    navigate('/centros');
  };

  const handleHomeClick = () => {
    navigate('/');
  };

  const handleLogoutClick = () => {
    setToken(false); 
    cerrar();// Cierra la sesión
    navigate('/'); // Redirige al home
    borrarTodoCookies()
  };

  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg navbar">
        <div className="container-fluid">
          <a className="navbar-brand logo" onClick={handleHomeClick}>
            <img src="src/assets/logo.png" alt="logo de la marca" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav nav-links">
              <li className="nav-item">
                <a className="nav-link" onClick={AboutUs} style={{ cursor: 'pointer' }}>
                  Sobre Nosotros
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={Centros} style={{ cursor: 'pointer' }}>
                  Centros
                </a>
              </li>
              {token ? (
                <>
                  <li className="nav-item">
                    <a className="nav-link" onClick={() => navigate('/micuenta')} style={{ cursor: 'pointer' }}>
                      Mi Cuenta
                    </a>
                  </li>
                  {isSuperUser && (
                    <li className="nav-item">
                      <a className="nav-link" onClick={() => navigate('/admin')} style={{ cursor: 'pointer' }}>
                        Admin
                      </a>
                    </li>
                  )}
                  <li className="nav-item">
                    <a className="nav-link" onClick={handleLogoutClick} style={{ cursor: 'pointer' }}>
                    {traerCookie("token") ? "Cerrar Sesión" : "Iniciar Sesión" }
                    </a>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <a className="nav-link" onClick={handleRegisterClick} style={{ cursor: 'pointer' }}>
                      Regístrate
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" onClick={handleLoginClick} style={{ cursor: 'pointer' }}>
                      Inicia sesión
                    </a>
                  </li>
                </>
              )}
            </ul>
            <a className="btn" onClick={openModal}>
              <Button className="btn btn-primary" titulo='Contáctenos' evento={openModal} />

            </a>
            <Contacto isOpen={isModalOpen} onClose={closeModal} />

          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;




