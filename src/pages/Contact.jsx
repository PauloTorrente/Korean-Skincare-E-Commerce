import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ContactContainer = styled.div`
  padding: 2rem;
  text-align: center;

  h1 {
    font-size: 2.5rem;
  }

  p {
    font-size: 1.2rem;
    margin: 1rem 0;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;

    input, textarea {
      margin: 0.5rem 0;
      padding: 0.8rem;
      width: 100%;
      max-width: 400px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }

    button {
      margin-top: 1rem;
      padding: 0.8rem 2rem;
      background-color: #646cff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;

      &:hover {
        background-color: #535bf2;
      }
    }
  }

  @media (max-width: 768px) {
    form {
      width: 100%;
      input, textarea {
        max-width: 90%;
      }
    }
  }
`;

const Contact = () => {
  return (
    <ContactContainer as={motion.div} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <h1>Contacto</h1>
      <p>¿Tienes alguna pregunta? Envíanos un mensaje y nos pondremos en contacto contigo pronto.</p>
      <form>
        <input type="text" placeholder="Nombre" />
        <input type="email" placeholder="Correo electrónico" />
        <textarea placeholder="Mensaje" rows="5"></textarea>
        <button type="submit">Enviar</button>
      </form>
    </ContactContainer>
  );
};

export default Contact;
