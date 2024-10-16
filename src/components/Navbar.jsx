import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  background-color: #010326;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    color: #F2F2F2;
    text-decoration: none;
    margin: 0 1rem;

    &:hover {
      color: #94E9F2;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;

    a {
      margin: 0.5rem 0;
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
