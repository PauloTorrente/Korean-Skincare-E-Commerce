import { useState, useEffect } from 'react';
import { useUserContext } from '../components/UserContext';

const useApi = (url, method = 'GET', body = null) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { user, login } = useUserContext();

  // Helper function for API calls
  const fetchData = async (url, method, body, token) => {
    setIsLoading(true);
    try {
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: body ? JSON.stringify(body) : null,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to fetch');
      }
      
      const result = await response.json();
      return result;
    } catch (err) {
      setError(err.message);
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  // Login functionality
  const loginUser = async (username, password) => {
    setIsLoading(true);
    try {
      const response = await fetch('https://korean-skincare-blog-backend.onrender.com/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.message || 'Invalid credentials');
        setIsLoading(false);
        return null;
      }

      const data = await response.json();
      // Store token and user data in localStorage and context
      localStorage.setItem('token', data.token);

      login({
        token: data.token,
        refreshToken: data.refreshToken,
        role: data.user?.role || null,
        userId: data.user?.id || null,
      });

      setData(data);
      setIsLoading(false);
      return data;
    } catch (err) {
      setError('Error during login');
      setIsLoading(false);
      return null;
    }
  };

  useEffect(() => {
    if (url) {
      const token = user?.token;
      if (!token) {
        setError('No token available');
        setIsLoading(false);
        return;
      }

      fetchData(url, method, body, token).then((result) => {
        if (result) setData(result);
      });
    }
  }, [url, method, body, user?.token]);

  return { data, error, isLoading, loginUser };
};

export default useApi;
