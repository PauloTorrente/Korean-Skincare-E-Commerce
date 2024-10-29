import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Import images
import richMoistSheetMask from '/src/assets/Richmoissoothing(bolsitafrente).jpg';
import richMoistSerum from '/src/assets/Serum(fueradecaja).jpg';
import nourishingEyeButter from '/src/assets/8809572890581_1.jpg';
import vitaminEMask from '/src/assets/freshlyjuicedemask(fueradecaja).jpg';
import freePouch from '/src/assets/Logo.png';
import cleansingOil from '/src/assets/8809115025258_2.jpg';
import unscentedToner from '/src/assets/8809572890901_2.jpg';
import newProduct1 from '/src/assets/14.jpg';
import newProduct2 from '/src/assets/18.jpg';

// Styled components
const ProductsContainer = styled.div`
  padding: 2rem;
  background-color: #F2F2F2; /* Fondo claro para el contenedor principal */

  h1 {
    font-size: 2rem;
    text-align: center;
    color: #010326; /* Color oscuro para los encabezados */
  }

  .products-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
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
    border: 2px solid #94E9F2; /* Borde azul claro alrededor de las imágenes */
  }

  .product-card h2 {
    font-size: 1.2rem;
    color: #010326; /* Color oscuro para los títulos de los productos */
  }

  .product-card p {
    font-size: 1rem;
    color: #666; /* Gris suave para el texto de referencia */
  }

  .product-card span {
    display: block;
    font-size: 1.1rem;
    color: #94E9F2; /* Azul claro para el precio */
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
      font-size: 0.9rem;
    }
  }
`;

// Datos de productos
const products = [
  {
    name: 'RICH MOIST SOOTHING TENCEL SHEET MASK',
    reference: 'KLIRMA',
    price: '€1.99',
    image: richMoistSheetMask,
  },
  {
    name: 'RICH MOIST SOOTHING SERUM',
    reference: 'KLRISE',
    price: '€11.99',
    image: richMoistSerum,
  },
  {
    name: 'FRESHLY JUICED VITAMIN E MASK',
    reference: 'KLIVMA',
    price: '€15.49',
    image: vitaminEMask,
  },
  {
    name: 'GENTLE BLACK DEEP CLEANSING OIL',
    reference: 'KLGE01',
    price: '€12.49',
    image: cleansingOil,
  },
  {
    name: 'SUPPLE PREPARATION UNSCENTED TONER',
    reference: 'KLUNTO',
    price: '€11.99',
    image: unscentedToner,
  },
  {
    name: 'Fundamental Nourishing Eye Butter',
    reference: 'NEWPROD1',
    price: '€14.99',
    image: newProduct1,
  },
  {
    name: 'Gentle Black Deep Cleansing Oil',
    reference: 'NEWPROD2',
    price: '€18.99',
    image: newProduct2,
  },
];

// Products page
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
            <p>Referencia: {product.reference}</p>
            <span>{product.price}</span>
          </motion.div>
        ))}
      </div>
    </ProductsContainer>
  );
};

export default Products;
