import React, { useContext, useState } from 'react';
import Button from '../components/Button';
import Contacto from '../components/Contacto';
import '../Style/navbar.css';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../rutas/AuthProvider";// Importa el contexto

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isLoggedIn, isSuperUser, setIsLoggedIn } = useContext(AuthContext); // Accede al contexto
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

  const handleHomeClick = () => {
    navigate('/');
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false); // Cierra la sesión
    navigate('/'); // Redirige al home
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
              {isLoggedIn ? (
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
                      Cerrar Sesión
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




