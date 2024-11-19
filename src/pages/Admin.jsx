import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #fbe3e8;
  text-align: center;
  font-family: 'Arial', sans-serif;

  h1 {
    font-size: 2.5rem;
    color: #c71585;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    color: #555;
    margin-bottom: 2rem;
  }
`;

const Button = styled.button`
  background-color: #c71585;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin: 0.5rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #a30d6f;
  }

  &:disabled {
    background-color: #ddd;
    cursor: not-allowed;
  }
`;

const AdminPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  const checkAuth = () => {
    // Check if the token exists in localStorage
    const token = localStorage.getItem('token');
    
    if (!token) {
      // If no token, redirect to login page
      navigate('/login');
    } else {
      // If token exists, we are authenticated
      setIsLoading(false);
    }
  };

  useEffect(() => {
    checkAuth(); // Run the auth check on component mount
  }, [navigate]);

  const handleCreateBlogClick = () => {
    navigate('/admin/blogs');
  };

  const handleUploadProductClick = () => {
    navigate('/admin/upload-product');
  };

  if (isLoading) {
    // Show loading state while checking the token
    return <p>Loading...</p>;
  }

  return (
    <Container>
      <h1>Admin Dashboard</h1>
      <p>Welcome to the admin dashboard!</p>
      <Button onClick={handleCreateBlogClick}>Create Blog Post</Button>
      <Button onClick={handleUploadProductClick}>Upload Product</Button>
    </Container>
  );
};

export default AdminPage;
