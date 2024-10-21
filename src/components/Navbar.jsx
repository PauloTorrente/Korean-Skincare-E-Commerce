import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/Logo.png';

const NavbarContainer = styled.nav`
  background-color: #FFB6C1;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    display: flex;
    align-items: center;

    img {
      width: 50px;
      height: auto;
    }
  }

  .nav-links {
    display: flex;
    justify-content: center;
    align-items: center;

    a {
      color: #D5006D; 
      text-decoration: none;
      margin: 0 1.5rem; 
    }
  }

  @media (max-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between; 

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
