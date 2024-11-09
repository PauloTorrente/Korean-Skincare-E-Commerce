// src/pages/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Importing useNavigate for routing
import useApi from '../api/useApi'; // Importing the useApi hook

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const { data, error, isLoading, loginUser } = useApi(); // Using the useApi hook
  const navigate = useNavigate();  // Replacing useHistory with useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      setErrorMessage('Please fill in both fields');
      return;
    }
    const result = await loginUser(username, password); // Call loginUser function
    if (!result) {
      setErrorMessage(error || 'Login failed');
    } else {
      setErrorMessage('');
      // Redirect the user to the admin page after successful login
      navigate('/admin');  // Use navigate() instead of history.push()
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Logging in...' : 'Log In'}
        </button>
      </form>
      {errorMessage && <div>{errorMessage}</div>}
      {error && <div>Error: {error}</div>}
      {data && <div>Login successful! {data.message}</div>}
    </div>
  );
};

export default LoginPage;
