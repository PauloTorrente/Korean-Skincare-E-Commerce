import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

  const handleCreateBlogClick = () => {
    navigate('/admin/blogs');
  };

  const handleUploadProductClick = () => {
    navigate('/admin/upload-product'); 
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>Welcome to the admin dashboard!</p>
      <button onClick={handleCreateBlogClick}>Create Blog Post</button>
      <button onClick={handleUploadProductClick}>Upload Product</button> 
    </div>
  );
};

export default AdminPage;
