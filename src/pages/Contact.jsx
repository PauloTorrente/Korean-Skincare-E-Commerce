import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ContactContainer = styled.div`
  padding: 2rem;
  text-align: center;

  h1 {
    font-size: 2.5rem;
    color: #010326; /* Dark text for the header */
  }

  p {
    font-size: 1.2rem;
    margin: 1rem 0;
    color: #666; /* Softer gray for paragraph text */
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
      border: 1px solid #94E9F2; /* Light blue border to match the theme */
      border-radius: 4px;
      background-color: #F2F2F2; /* Light background for form elements */
      color: #010326; /* Dark text inside input fields */
    }

    input::placeholder, textarea::placeholder {
      color: #666; /* Placeholder text color for better readability */
    }

    button {
      margin-top: 1rem;
      padding: 0.8rem 2rem;
      background-color: #94E9F2; /* Light blue button to match the palette */
      color: #010326; /* Dark text for button */
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-weight: bold;

      &:hover {
        background-color: #74d1de; /* Darker shade of blue on hover */
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
    <ContactContainer
      as={motion.div}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
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
