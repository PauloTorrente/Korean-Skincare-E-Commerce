import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';  // Importing useNavigate for routing

const AdminPage = () => {
  const navigate = useNavigate();  // useNavigate hook to redirect

  useEffect(() => {
    const token = localStorage.getItem('token');
    
    if (!token) {
      // If no token is found, redirect to login page
      navigate('/login');
    }
    // Optionally, you can also check if the token is expired here
  }, [navigate]);

  const handleCreateBlogClick = () => {
    navigate('/admin/blogs');  // Redirect to the correct BlogForm page
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>Welcome to the admin dashboard!</p>
      <button onClick={handleCreateBlogClick}>Create Blog Post</button>
      {/* Add more buttons as needed */}
    </div>
  );
};

export default AdminPage;
