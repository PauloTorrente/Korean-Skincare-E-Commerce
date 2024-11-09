import { useState } from 'react';

function usePostApi() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  async function postData({ route, payload, method = 'POST' }) {
    setIsLoading(true);

    try {
      const token = localStorage.getItem('token');
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
        setError(errorResponse.message || 'Error sending data');
        return;
      }

      const responseAsJson = await response.json();
      setData(responseAsJson);
    } catch (err) {
      setError('Error sending data');
    } finally {
      setIsLoading(false);
    }
  }

  return { data, postData, error, isLoading };
}

export default usePostApi;
