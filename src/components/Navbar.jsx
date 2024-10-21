import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/logo.png'; // Asegúrate de tener la imagen del logo

const NavbarContainer = styled.nav`
  background-color: #FFB6C1;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between; /* Logo a la izquierda, enlaces centrados */
  align-items: center;

  .logo {
    display: flex;
    align-items: center;

    img {
      width: 50px; /* Ajusta el tamaño del logo */
      height: auto;
    }
  }

  .nav-links {
    display: flex;
    justify-content: center;
    align-items: center;

    a {
      color: #D5006D; /* Color rosa oscuro para mejor contraste */
      text-decoration: none;
      margin: 0 1.5rem; /* Espaciado entre los enlaces */
    }
  }

  @media (max-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between; /* Mantiene el logo a la izquierda y enlaces en fila */

    .nav-links {
      a {
        margin: 0.5rem 1rem;
      }
    }
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="nav-links">
        <Link to="/products">Productos</Link>
        <Link to="/about">Sobre Nosotros</Link>
        <Link to="/contact">Contacto</Link>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
