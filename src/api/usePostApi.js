import { useState } from 'react';

function usePostApi() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Helper function for making the fetch request
  const postData = async ({ route, payload, method = 'POST' }) => {
    setIsLoading(true);
    console.log('Payload being sent:', payload); 

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('No token found');
        return;
      }

      // Determine headers based on payload type
      const isFormData = payload instanceof FormData;
      const headers = {
        Authorization: `Bearer ${token}`,
        ...(isFormData ? {} : { 'Content-Type': 'application/json' }),
      };

      // Ensure the URL is correctly constructed with the full path
      const response = await fetch(`https://korean-skincare-blog-backend.onrender.com/${route}`, {
        method,
        headers,
        body: method === 'DELETE' ? null : isFormData ? payload : JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorResponse = await response.json();
        console.error('Error Response:', errorResponse); 
        setError(errorResponse.message || `Error sending data: ${response.status}`);
        return;
      }

      const responseAsJson = await response.json();
      console.log('Response received:', responseAsJson); 
      setData(responseAsJson);
    } catch (err) {
      setError(`Error sending data: ${err.message}`);
      console.error('Error sending data:', err); 
    } finally {
      setIsLoading(false);
    }
  };

  return { data, postData, error, isLoading };
}

export default usePostApi;
