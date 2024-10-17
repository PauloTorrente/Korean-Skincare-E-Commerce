import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  background-color: #FFB6C1;
  padding: 1rem 2rem;
  display: flex;
  justify-content: center; /* Centers the navbar links horizontally */
  align-items: center;

  a {
    color: #D5006D; /* Darker pink for better contrast */
    text-decoration: none;
    margin: 0 1.5rem; /* Adjusted margin for even spacing */
  }

  @media (max-width: 768px) {
    flex-direction: row; /* Ensures it remains horizontal even on mobile */
    flex-wrap: wrap; /* Wraps content if space is tight */
    justify-content: center;

    a {
      margin: 0.5rem 1rem; /* Adjusted margin for mobile */
    }
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <Link to="/">Inicio</Link>
      <Link to="/products">Productos</Link>
      <Link to="/about">Sobre Nosotros</Link>
      <Link to="/contact">Contacto</Link>
    </NavbarContainer>
  );
};

export default Navbar;
