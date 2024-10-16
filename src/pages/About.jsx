import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutContainer = styled.div`
  padding: 2rem;
  text-align: center;

  h1 {
    font-size: 2.5rem;
  }

  p {
    font-size: 1.2rem;
    margin: 1rem 0;
    color: #333;
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
      <p>Somos una empresa dedicada al cuidado de la piel coreana. Nuestro objetivo es ofrecer los mejores productos para el bienestar y el cuidado personal.</p>
      <p>Con años de experiencia en el mercado, nos hemos convertido en un referente para quienes buscan productos de alta calidad y resultados efectivos.</p>
    </AboutContainer>
  );
};

export default About;
