import { useState, useEffect } from 'react';
import { useUserContext } from '../components/UserContext'; // Importing user context

// Custom hook for handling general API calls and login
const useApi = (url, method = 'GET', body = null) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { login } = useUserContext(); // Accessing the login function from user context

  // Function to handle user login
  const loginUser = async (username, password) => {
    setIsLoading(true);
    try {
      console.log('Sending login request with username:', username);
      const response = await fetch('https://korean-skincare-blog-backend.onrender.com/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Login error:', errorData);
        setError(errorData.message || 'Invalid credentials');
        setIsLoading(false);
        return null;
      }

      const data = await response.json();
      console.log('Login successful, received data:', data);

      // Check if `data.user` exists before accessing its properties
      const user = data.user || {};
      localStorage.setItem('token', data.token);
      console.log('Token stored in localStorage:', localStorage.getItem('token'));

      // Calling the login function from context to store user data
      login({
        token: data.token,
        refreshToken: data.refreshToken,
        role: user.role || null,
        userId: user.id || null,
      });

      setData(data);
      setIsLoading(false);
      return data;
    } catch (err) {
      console.error('Error during login:', err);
      setError('Error during login');
      setIsLoading(false);
      return null;
    }
  };

  // General API call logic (for fetching data)
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url, {
          method,
          headers: {
            'Content-Type': 'application/json',
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
  }, [url, method, body]);

  return { data, error, isLoading, loginUser }; // Return both general API data and loginUser function
};

export default useApi;
