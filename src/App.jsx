import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import Login from './pages/Login';
import BlogForm from './components/BlogForm';
import BlogList from './pages/BlogList';
import ProductUpload from './components/ProductUpload'; // New import
import { UserProvider } from './components/UserContext';

const checkAuth = () => {
  const user = localStorage.getItem('user');
  try {
    return user ? JSON.parse(user) : null;
  } catch (error) {
    return null;
  }
};

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setIsAuthenticated(checkAuth() !== null);
  }, []);

  const handleLogin = (user) => {
    localStorage.setItem('user', JSON.stringify(user));
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsAuthenticated(false);
  };

  return (
    <UserProvider>
      <Router>
        <Navbar />
        <AnimatePresence>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login setIsAuthenticated={handleLogin} />} />
            <Route path="/admin" element={isAuthenticated ? <Admin handleLogout={handleLogout} /> : <Navigate to="/login" replace />} />
            <Route path="/admin/blogs" element={isAuthenticated ? <BlogForm /> : <Navigate to="/login" replace />} />
            <Route path="/admin/upload-product" element={isAuthenticated ? <ProductUpload /> : <Navigate to="/login" replace />} /> {/* New Product Upload Route */}
            <Route path="/blogs" element={<BlogList />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </Router>
    </UserProvider>
  );
}

export default App;
