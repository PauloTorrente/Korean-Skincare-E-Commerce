import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import axios from 'axios';

const ProductsContainer = styled.div`
  padding: 2rem;
  background-color: #F2F2F2;

  h1 {
    font-size: 1.5rem;
    text-align: center;
    color: #010326;
    font-weight: bold;
  }

  .products-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
    margin-top: 2rem;
  }

  .product-card {
    background-color: white;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
    padding: 1rem;
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-10px);
    }
  }

  .product-card img {
    width: 100%;  /* Ensures the image takes the full width of the card */
    height: 200px;  /* Set a fixed height for the image */
    object-fit: contain;  /* Ensures the entire image is shown without distortion */
    max-width: 100%; /* Prevents overflow */
    border-radius: 8px;
  }

  .product-card h2 {
    font-size: 1.2rem;
    color: #010326;
  }

  .product-card p {
    font-size: 0.95rem;
    color: #333;
    margin-top: 0.5rem;
  }

  .product-card span {
    display: block;
    font-size: 1.1rem;
    color: #94E9F2;
    margin-top: 0.5rem;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    .products-grid {
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    }

    .product-card h2 {
      font-size: 1rem;
    }

    .product-card p {
      font-size: 0.85rem;
    }
  }
`;

const animationSettings = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const Products = () => {
  const [products, setProducts] = useState([]);

  // Fetch the products when the component mounts
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          'https://korean-skincare-blog-backend.onrender.com/api/products'
        );
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  // Function to handle imgur URLs and return the correct image URL
  const getImgurImageUrl = (url) => {
    if (url && url.includes('imgur.com')) {
      const imageId = url.split('/').pop();  // Extract image ID from the URL
      return `https://i.imgur.com/${imageId}.jpg`;  // Use high-quality image
    }
    return url; // Return the URL as is if it's not from imgur
  };

  return (
    <ProductsContainer>
      <h1>Available Products</h1>
      <div className="products-grid">
        {products.map((product, index) => (
          <motion.div
            className="product-card"
            key={product.id}
            {...animationSettings}
            transition={{ ...animationSettings.transition, delay: index * 0.1 }}
          >
            {/* Display only the first image */}
            {product.images && product.images[0] && (
              <img
                src={getImgurImageUrl(product.images[0])}
                alt="Product image"
              />
            )}
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <span>€{product.price}</span>
          </motion.div>
        ))}
      </div>
    </ProductsContainer>
  );
};

export default Products;
