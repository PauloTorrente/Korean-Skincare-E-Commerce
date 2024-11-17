import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUserContext } from '../components/UserContext'; 

const PrivateRoute = ({ children }) => {
  const { user } = useUserContext(); 
  return user?.token ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
