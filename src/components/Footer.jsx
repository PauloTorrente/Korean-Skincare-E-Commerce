import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: #010326;
  color: #F2F2F2;
  padding: 2rem;
  text-align: center;

  div {
    margin-top: 1rem;

    a {
      margin: 0 1rem;
      color: #F2F2F2;
      text-decoration: none;

      &:hover {
        color: #94E9F2;
      }
    }
  }

  @media (max-width: 768px) {
    div a {
      margin: 0 0.5rem;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2023 Cuidado Coreano. Todos los derechos reservados.</p>
      <div>
        <a href="https://facebook.com">
          <FaFacebook size={24} />
        </a>
        <a href="https://twitter.com">
          <FaTwitter size={24} />
        </a>
        <a href="https://instagram.com">
          <FaInstagram size={24} />
        </a>
      </div>
    </FooterContainer>
  );
};

export default Footer;
