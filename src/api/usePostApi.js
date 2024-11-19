import { useState } from 'react';

function usePostApi() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Helper function for making the fetch request
  const postData = async ({ route, payload, method = 'POST' }) => {
    setIsLoading(true);

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('No token found');
        return;
      }

      const response = await fetch(`https://korean-skincare-blog-backend.onrender.com/${route}`, {
        method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: method === 'DELETE' ? null : JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorResponse = await response.json();
        setError(errorResponse.message || `Error sending data: ${response.status}`);
        return;
      }

      const responseAsJson = await response.json();
      setData(responseAsJson);
    } catch (err) {
      setError(`Error sending data: ${err.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return { data, postData, error, isLoading };
}

export default usePostApi;
