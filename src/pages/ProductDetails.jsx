import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';

const ProductDetailsContainer = styled.div`
  padding: 1.5rem;
  background-color: #F2F2F2;
  display: flex;
  flex-direction: column;
  align-items: center;

  .details-wrapper {
    display: flex;
    flex-direction: row;
    gap: 1.5rem;
    max-width: 1000px; /* Reduzimos um pouco a largura */
    width: 100%;
    background-color: #FFF;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 1.5rem; /* Padding ajustado */
    
    @media (max-width: 768px) {
      flex-direction: column;
      padding: 1rem; /* Padding reduzido para dispositivos móveis */
    }
  }

  .images-section {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    .main-image {
      width: 250px; /* Diminuímos um pouco a largura */
      height: 250px; /* Diminuímos a altura também */
      object-fit: contain;
      border: 2px solid #94E9F2;
      border-radius: 8px;

      @media (max-width: 768px) {
        width: 100%; /* No celular, ocupa toda a largura disponível */
        height: auto; /* Mantemos a proporção */
      }
    }

    .thumbnails {
      display: flex;
      gap: 0.8rem; /* Diminuímos o espaço entre as miniaturas */
      justify-content: center; /* Para centralizar as miniaturas */
      
      img {
        width: 50px; /* Reduzimos um pouco as miniaturas */
        height: 50px;
        object-fit: cover;
        border: 2px solid transparent;
        border-radius: 8px;
        cursor: pointer;
        transition: transform 0.2s ease, border-color 0.3s ease;

        &:hover {
          transform: scale(1.1);
        }

        &.selected {
          border-color: #94E9F2;
        }

        @media (max-width: 768px) {
          width: 40px; /* No celular, miniaturas ainda menores */
          height: 40px;
        }
      }
    }
  }

  .info-section {
    flex: 2;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h1 {
      font-size: 1.7rem; /* Font-size reduzido para h1 */
      color: #010326;
      text-align: left;

      @media (max-width: 768px) {
        font-size: 1.5rem;
        text-align: center; /* Centraliza o título no celular */
      }
    }

    p {
      font-size: 0.95rem; /* Font-size reduzido para descrição */
      color: #333;

      @media (max-width: 768px) {
        font-size: 0.9rem;
        text-align: justify; /* Justifica o texto na descrição */
      }
    }

    span {
      font-size: 1.4rem; /* Font-size reduzido para o preço */
      color: #94E9F2;
      font-weight: bold;

      @media (max-width: 768px) {
        font-size: 1.2rem;
        text-align: center; /* Centraliza o preço no celular */
      }
    }
  }
`;

const ProductDetails = () => {
  const { productId } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState('');

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(
          `https://korean-skincare-blog-backend.onrender.com/api/products/${productId}`
        );
        const productData = response.data;

        // Apply the getImgurImageUrl logic to each image in the array
        const processedImages = productData.images.map(getImgurImageUrl);

        setProduct({ ...productData, images: processedImages });
        setMainImage(processedImages[0]); // Set the first image as default
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchProductDetails();
  }, [productId]);

  const getImgurImageUrl = (url) => {
    if (url && url.includes('imgur.com')) {
      const imageId = url.split('/').pop();
      return `https://i.imgur.com/${imageId}.jpg`;
    }
    return url;
  };

  const handleImageClick = (image) => {
    setMainImage(image);
  };

  if (!product) return <p>Loading...</p>;

  return (
    <ProductDetailsContainer>
      <div className="details-wrapper">
        <div className="images-section">
          <motion.img
            key={mainImage}
            className="main-image"
            src={mainImage}
            alt={product.name}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          />
          <div className="thumbnails">
            {product.images.map((image, index) => (
              <motion.img
                key={index}
                src={image}
                alt={`Thumbnail ${index}`}
                className={image === mainImage ? 'selected' : ''}
                onClick={() => handleImageClick(image)}
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.1 }}
              />
            ))}
          </div>
        </div>
        <div className="info-section">
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <span>€{product.price}</span>
        </div>
      </div>
    </ProductDetailsContainer>
  );
};

export default ProductDetails;
