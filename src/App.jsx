// src/App.jsx
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
import { UserProvider } from './components/UserContext'; 

const checkAuth = () => {
  const user = localStorage.getItem('user');
  try {
    return user ? JSON.parse(user) : null;  // Ensure valid JSON
  } catch (error) {
    return null; // If invalid JSON, return null
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
            {/* Home Route */}
            <Route path="/" element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Home />
              </motion.div>
            } />

            {/* Products Route */}
            <Route path="/products" element={
              <motion.div
                initial={{ x: -100 }}
                animate={{ x: 0 }}
                exit={{ x: 100 }}
                transition={{ type: "spring", stiffness: 50 }}
              >
                <Products />
              </motion.div>
            } />

            {/* About Route */}
            <Route path="/about" element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <About />
              </motion.div>
            } />

            {/* Contact Route */}
            <Route path="/contact" element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Contact />
              </motion.div>
            } />

            {/* Login Route */}
            <Route path="/login" element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Login setIsAuthenticated={handleLogin} />
              </motion.div>
            } />

            {/* Admin Route - Accessible when the user is authenticated */}
            <Route path="/admin" element={isAuthenticated ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Admin handleLogout={handleLogout} />
              </motion.div>
            ) : (
              <Navigate to="/login" replace />
            )} />

            {/* Admin Blogs Route */}
            <Route path="/admin/blogs" element={isAuthenticated ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <BlogForm />
              </motion.div>
            ) : (
              <Navigate to="/login" replace />
            )} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </Router>
    </UserProvider>
  );
}

export default App;
