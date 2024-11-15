import { useState, useEffect } from 'react';
import { useUserContext } from '../components/UserContext';

const useApi = (url, method = 'GET', body = null) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { user, login } = useUserContext();

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
      // Store the token in localStorage
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
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url, {
          method,
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${user.token}`,
          },
          body: body ? JSON.stringify(body) : null,
        });
        if (!response.ok) throw new Error('Failed to fetch');
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (url) fetchData();
  }, [url, method, body, user.token]);

  return { data, error, isLoading, loginUser };
};

export default useApi;
