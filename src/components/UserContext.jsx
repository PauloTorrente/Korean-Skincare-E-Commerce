import React, { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    token: localStorage.getItem('token'),
    refreshToken: localStorage.getItem('refreshToken'),
    role: localStorage.getItem('role'),
    userId: localStorage.getItem('userId'),
  });

  const login = ({ token, refreshToken, role, userId }) => {
    setUser({ token, refreshToken, role, userId });
    localStorage.setItem('token', token);
    localStorage.setItem('refreshToken', refreshToken);
    localStorage.setItem('role', role);
    localStorage.setItem('userId', userId);
  };

  const logout = () => {
    setUser({ token: null, refreshToken: null, role: null, userId: null });
    localStorage.clear();
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');
    if (token && role) {
      setUser({ token, role });
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
