
import React from 'react';
import Button from './Button';
import Contacto from '../components/Contacto';
import { useState } from 'react';
import '../Style/navbar.css'




const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg navbar">
        <div className="container-fluid">
          <a className="navbar-brand logo" href="#">
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
                <a className="nav-link" href="#">Acerca de Nosotros</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Registrate</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Inicia sesión</a>
              </li>
            </ul>
            <a href="#" className="btn">
              <Button className="btn btn-primary" titulo ='Contáctenos' evento={openModal}/>
              <Contacto isOpen={isModalOpen} onClose={closeModal} />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;




