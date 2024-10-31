import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/Logo.png';
import { FaBars } from 'react-icons/fa';
import { motion } from 'framer-motion';

const NavbarContainer = styled.nav`
  background-color: #FFB6C1;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    
    img {
      width: 70px;
      height: auto;
    }
  }

  .nav-links {
    display: flex;
    gap: 1.5rem;

    @media (max-width: 768px) {
      display: none;
    }

    a {
      color: #C71585; /* Darker shade of pink for contrast */
      text-decoration: none;
      font-weight: bold; /* Make text bold */
      transition: color 0.3s ease; /* Smooth transition for hover effect */

      &:hover {
        color: #D5006D; /* Change color on hover */
      }
    }
  }

  .hamburger {
    font-size: 2rem;
    cursor: pointer;
    display: block;

    @media (min-width: 769px) {
      display: none;
    }
  }
`;

const MotionMenu = styled(motion.div)`
  display: flex;
  flex-direction: column;
  background-color: #FFB6C1;
  position: fixed;
  top: 0;
  left: 0;
  width: 80%;
  height: 100%;
  z-index: 10;
  padding: 2rem;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.5);

  a {
    color: #C71585; /* Darker shade of pink for contrast */
    text-decoration: none;
    margin: 1rem 0;
    text-align: center;
    font-size: 1.2rem;
    font-weight: bold; /* Make text bold */
    transition: color 0.3s ease; /* Smooth transition for hover effect */

    &:hover {
      color: #D5006D; /* Change color on hover */
    }
  }

  .menu-close {
    font-size: 1.5rem;
    cursor: pointer;
    text-align: right;
  }

  hr {
    border: none;
    border-bottom: 1px solid #ccc;
    margin: 1.5rem 0;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavbarContainer>
      <div className="hamburger" onClick={toggleMenu}>
        <FaBars />
      </div>
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

      {isOpen && (
        <MotionMenu
          initial={{ x: '-100%' }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
          exit={{ x: '-100%' }}
        >
          <div className="menu-close" onClick={toggleMenu}>✕</div>
          <Link to="/products" onClick={toggleMenu}>Productos</Link>
          <Link to="/about" onClick={toggleMenu}>Sobre Nosotros</Link>
          <Link to="/contact" onClick={toggleMenu}>Contacto</Link>
        </MotionMenu>
      )}
    </NavbarContainer>
  );
};

export default Navbar;
