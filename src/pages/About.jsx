import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutContainer = styled.div`
  padding: 2rem;
  text-align: center;

  h1 {
    font-size: 2.5rem;
    color: #010326; /* Use your main text color for the heading */
  }

  p {
    font-size: 1.2rem;
    margin: 1rem 0;
    color: #666; /* Softer gray for better visibility */
  }

  @media (max-width: 768px) {
    p {
      font-size: 1rem;
    }
  }
`;

const About = () => {
  return (
    <AboutContainer as={motion.div} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <h1>Sobre Nosotros</h1>
      <p>
        Somos una empresa dedicada al cuidado de la piel coreana. Nuestro objetivo es ofrecer los mejores productos para el bienestar y el cuidado personal.
      </p>
      <p>
        Con años de experiencia en el mercado, nos hemos convertido en un referente para quienes buscan productos de alta calidad y resultados efectivos.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
      </p>
    </AboutContainer>
  );
};

export default About;
