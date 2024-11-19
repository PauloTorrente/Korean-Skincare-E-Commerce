import { useState, useEffect } from 'react';
import { useUserContext } from '../components/UserContext';

const useApi = (url, method = 'GET', body = null) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { user, login } = useUserContext();

  const fetchData = async (url, method, body, token) => {
    setIsLoading(true);
    try {
      console.log('Fetching data from:', url);  // Debug API call URL
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
        console.error('Error fetching data:', errorData);  // Debug error response
        throw new Error(errorData.message || 'Failed to fetch');
      }
      
      const result = await response.json();
      console.log('API Response:', result);  // Debug API success response
      return result;
    } catch (err) {
      console.error('Error during fetch:', err);
      setError(err.message || 'An unexpected error occurred');
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  const loginUser = async (username, password) => {
    setIsLoading(true);
    console.log('Logging in with:', username, password);  // Debug login attempt
    try {
      const response = await fetch('https://korean-skincare-blog-backend.onrender.com/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),  // Send username, not email
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        console.error('Login failed:', errorData);  // Debug error response
        setError(errorData.message || 'Invalid credentials');
        setIsLoading(false);
        return null;
      }
  
      const data = await response.json();
      console.log('Login success, token:', data.token);  // Debug token received
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
      console.error('Error during login:', err);
      setError(err.message || 'Error during login');
      setIsLoading(false);
      return null;
    }
  };

  useEffect(() => {
    if (url && user?.token) {
      fetchData(url, method, body, user.token).then((result) => {
        if (result) setData(result);
      });
    } else {
      setError('No valid token available');
    }
  }, [url, method, body, user?.token]);

  return { data, error, isLoading, loginUser };
};

export default useApi;
