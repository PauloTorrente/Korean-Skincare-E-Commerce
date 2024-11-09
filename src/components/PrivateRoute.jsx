import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useUserContext } from '../components/UserContext'; // Import the context

const PrivateRoute = ({ element }) => {
  const { user } = useUserContext(); // Access the user from context

  return user ? element : <Navigate to="/login" />; // If user is authenticated, render element, else redirect to login
};

export default PrivateRoute;
