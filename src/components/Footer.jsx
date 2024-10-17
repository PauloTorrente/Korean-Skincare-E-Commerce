import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

const FooterContainer = styled.footer`
  background-color: #FFB6C1;
  color: #D5006D;  /* Darker pink for better contrast */
  padding: 2rem;
  text-align: center;

  div {
    margin-top: 1rem;

    a {
      margin: 0 1rem;
      color: #D5006D;  /* Ensure icons also match */
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

const iconVariants = {
  hover: { scale: 1.2, color: '#94E9F2', transition: { duration: 0.3 } },
};

const Footer = () => {
  return (
    <FooterContainer>
      <p>Bienestar en la piel y en el alma.</p>
      <div>
        <motion.a
          href="https://facebook.com"
          whileHover="hover"
          variants={iconVariants}
        >
          <FaFacebook size={24} />
        </motion.a>
        <motion.a
          href="https://twitter.com"
          whileHover="hover"
          variants={iconVariants}
        >
          <FaTwitter size={24} />
        </motion.a>
        <motion.a
          href="https://instagram.com"
          whileHover="hover"
          variants={iconVariants}
        >
          <FaInstagram size={24} />
        </motion.a>
      </div>
    </FooterContainer>
  );
};

export default Footer;
