import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useApi from '../api/useApi';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #fbe3e8;
  font-family: 'Arial', sans-serif;

  h2 {
    font-size: 2rem;
    color: #c71585;
    margin-bottom: 1.5rem;
  }
`;

const Form = styled.form`
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
  max-width: 400px;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  outline: none;

  &:focus {
    border-color: #c71585;
    box-shadow: 0 0 4px rgba(199, 21, 133, 0.4);
  }
`;

const Button = styled.button`
  background-color: #c71585;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #a30d6f;
  }

  &:disabled {
    background-color: #ddd;
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.p`
  color: #d9534f;
  font-size: 0.9rem;
  margin-top: -0.5rem;
`;

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const { loginUser } = useApi();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await loginUser(username, password);
    if (response && response.token) {
      localStorage.setItem('token', response.token);
      setIsLoggedIn(true); // Establecer estado de login exitoso
    } else {
      setErrorMessage('Invalid credentials');
    }
  };

  const handleGoToAdmin = () => {
    navigate('/admin'); // Redirigir al admin cuando se haga clic en el botón
  };

  return (
    <Container>
      <h2>Login</h2>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" disabled={!username || !password}>
          Login
        </Button>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </Form>

      {isLoggedIn && (
        <Button onClick={handleGoToAdmin}>Go to Admin</Button> // Mostrar el botón de redirección
      )}
    </Container>
  );
};

export default LoginPage;
