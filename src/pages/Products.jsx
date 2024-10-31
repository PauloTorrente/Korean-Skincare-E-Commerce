import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import richMoistSheetMask from '/src/assets/Richmoissoothing(bolsitafrente).jpg';
import richMoistSerum from '/src/assets/Serum(fueradecaja).jpg';
import nourishingEyeButter from '/src/assets/8809572890581_1.jpg';
import vitaminEMask from '/src/assets/freshlyjuicedemask(fueradecaja).jpg';
import cleansingOil from '/src/assets/8809115025258_2.jpg';
import unscentedToner from '/src/assets/8809572890901_2.jpg';
import EyeAwakening from '/src/assets/Funamental eye awakening gel.jpg';
import Juiced from '/src/assets/Freshly Juiced vitamin e.jpg';
import newProduct1 from '/src/assets/14.jpg';
import newProduct2 from '/src/assets/18.jpg';

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
    max-width: 100%;
    height: auto;
    object-fit: cover;
    margin-bottom: 1rem;
    border-radius: 8px;
    border: 2px solid #94E9F2;
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

const products = [
  {
    name: 'RICH MOIST SOOTHING TENCEL SHEET MASK',
    price: '€3.99',
    image: richMoistSheetMask,
    description: 'Mascarilla de tejido con ceramidas para hidratación y revitalización. Suave y calmante, ideal para todo tipo de piel. Contenido: 25 ml.'
  },
  {
    name: 'FRESHLY JUICED VITAMIN E MASK',
    price: '€30.99',
    image: vitaminEMask,
    description: 'Crema antiedad con vitamina E y niacinamida, combate arrugas y unifica el tono de la piel. Uso nocturno para todos los tipos de piel. Contenido: 90 ml.'
  },
  {
    name: 'RICH MOIST SOOTHING SERUM',
    price: '€23.99',
    image: richMoistSerum,
    description: 'Sérum de hidratación profunda con ácido hialurónico para una piel suave y flexible. Ideal para todo tipo de piel. Contenido: 80 ml.'
  },
  {
    name: 'GENTLE BLACK DEEP CLEANSING OIL',
    price: '€24.99',
    image: cleansingOil,
    description: 'Aceite limpiador con sésamo y grosella negra, limpia profundamente sin resecar. Ideal para todo tipo de piel.'
  },
  {
    name: 'Fundamental Eye Awakening Gel',
    price: '€26.99',
    image: EyeAwakening,
    description: 'Gel para ojos con cafeína y extracto de frijol rojo, reduce ojeras y bolsas. Contenido: 35 ml.'
  },
  {
    name: 'Fundamental Nourishing Eye Butter',
    price: '€26.99',
    image: nourishingEyeButter,
    description: 'Crema de ojos con aceite de girasol y tetrapéptidos, nutre y revitaliza la piel del contorno. Ideal para piel seca y madura.'
  },
  {
    name: 'SUPPLE PREPARATION UNSCENTED TONER',
    price: '€11.99',
    image: unscentedToner,
    description: 'Tónico sin fragancia que hidrata y equilibra el pH de la piel. Ideal para piel sensible. Contenido: 180 ml.'
  },
  {
    name: 'FRESHLY JUICED VITAMIN C DROP',
    price: '€23.99',
    image: Juiced,
    description: 'Sérum con vitamina C para iluminar y mejorar la textura de la piel, reduciendo manchas.'
  },
];

const Products = () => {
  return (
    <ProductsContainer>
      <h1>Productos Destacados</h1>
      <div className="products-grid">
        {products.map((product, index) => (
          <motion.div
            className="product-card"
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <span>{product.price}</span>
          </motion.div>
        ))}
      </div>
    </ProductsContainer>
  );
};

export default Products;
