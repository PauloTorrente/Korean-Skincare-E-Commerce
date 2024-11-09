import React, { createContext, useContext, useState, useEffect } from 'react';

// Creating User Context
const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    token: localStorage.getItem('token'),
    refreshToken: localStorage.getItem('refreshToken'),
    role: localStorage.getItem('role'),
    userId: localStorage.getItem('userId'),
  });

  // Function to update user context
  const login = ({ token, refreshToken, role, userId }) => {
    console.log('Logging in user:', { token, refreshToken, role, userId });

    // Update state and save to localStorage
    setUser({ token, refreshToken, role, userId });
    localStorage.setItem('token', token);
    localStorage.setItem('refreshToken', refreshToken);
    localStorage.setItem('role', role);
    localStorage.setItem('userId', userId);

    console.log('User data saved to localStorage:', {
      token: localStorage.getItem('token'),
      refreshToken: localStorage.getItem('refreshToken'),
      role: localStorage.getItem('role'),
      userId: localStorage.getItem('userId'),
    });
  };

  // Logout function to clear user data
  const logout = () => {
    console.log('Logging out user');

    setUser({ token: null, refreshToken: null, role: null, userId: null });
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('role');
    localStorage.removeItem('userId');
  };

  useEffect(() => {
    console.log('useEffect: Checking localStorage for user data');
    const token = localStorage.getItem('token');
    const refreshToken = localStorage.getItem('refreshToken');
    const role = localStorage.getItem('role');
    const userId = localStorage.getItem('userId');

    if (token && role) {
      console.log('Found user data in localStorage, setting user:', { token, refreshToken, role, userId });
      setUser({ token, refreshToken, role, userId });
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
