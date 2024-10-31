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
    description: 'Sumérgete en un baño de suavidad y revitalización. Nuestra mascarilla de tejido, enriquecida con ceramidas, te transportará a un oasis de hidratación. Sentirás cómo tu piel se transforma, recuperando su luminosidad natural.\n\nContenido/Formato: 25 ml.\nTipo de piel: Todo tipo de piel.\nPaso de la rutina: 5. Mascarilla\nApto para embarazadas / Natural / Vegano\nIngredientes Clave: Aloe Barbadensis Leaf Juice, Panthenol, Ceramides.'
  },
  {
    name: 'RICH MOIST SOOTHING SERUM',
    price: '€23.99',
    image: richMoistSerum,
    description: 'Hidratación profunda y equilibrio perfecto. Este sérum, tu aliado para una piel saludable, penetra en las capas más profundas de tu piel, proporcionando una hidratación duradera.\n\nContenido/Formato: 80 ml.\nTipo de piel: Todo tipo de piel.\nPaso de la rutina: 7. Sérum\nApto para embarazadas / Natural / Vegano\nIngredientes Clave: Lipidure, Sodium Hyaluronate.'
  },
  {
    name: 'FUNDAMENTAL NOURISHING EYE BUTTER',
    price: '€26.99',
    image: nourishingEyeButter,
    description: 'Despierta tu mirada con un toque de juventud. Nuestro contorno de ojos, con su textura cremosa y rica en antioxidantes, nutre profundamente la piel apagada.\n\nContenido/Formato: 20 g.\nTipo de piel: Todo tipo de piel; ideal para piel seca y madura.\nPaso de la rutina: 8. Contorno de ojos\nApto para embarazadas / Natural / Vegano\nIngredientes Clave: Sunflower Seed Oil, Quad-peptides.'
  },
  {
    name: 'FRESHLY JUICED VITAMIN E MASK',
    price: '€30.99',
    image: vitaminEMask,
    description: 'El secreto para una piel joven y luminosa. Nuestra crema, con su fórmula antiedad, combate los signos del envejecimiento y unifica el tono de la piel.\n\nContenido/Formato: 90 ml.\nTipo de piel: Todo tipo de piel.\nPaso de la rutina: 10. Mascarillas de noche\nNatural / Vegano\nIngredientes Clave: Vitamin E, Niacinamide, Adenosine.'
  },
  {
    name: 'GENTLE BLACK DEEP CLEANSING OIL',
    price: '€24.99',
    image: cleansingOil,
    description: 'Descubre la limpieza más suave y eficaz. Nuestro aceite limpiador, enriquecido con una mezcla de aceites naturales, elimina a fondo el maquillaje y las impurezas sin resecar tu piel.\n\nContenido/Formato: 150 ml.\nTipo de piel: Todo tipo de piel.\nPaso de la rutina: 1. Desmaquillante\nApto para embarazadas / Best Seller / Natural / Vegano\nIngredientes Clave: Black Bean Oil, Black Sesame Oil, Black Currant Seed Oil.'
  },
  {
    name: 'FUNDAMENTAL EYE AWAKENING GEL',
    price: '€26.99',
    image: EyeAwakening,
    description: 'Despierta tu mirada con una explosión de frescura. Nuestro contorno de ojos en gel, con su fórmula ligera y refrescante, revitaliza instantáneamente la piel del contorno ocular.\n\nContenido/Formato: 35 ml.\nTipo de piel: Todo tipo de piel; ideal para pieles grasas.\nPaso de la rutina: 8. Contorno de ojos\nApto para embarazadas / Natural / Vegano\nIngredientes Clave: Caffeine, Red Bean Extract.'
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
