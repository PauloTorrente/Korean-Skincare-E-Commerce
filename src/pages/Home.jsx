import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

import img1 from '../assets/gel_cream.png';
import img2 from '../assets/serm(caja).jpg';
import img3 from '../assets/8809572890581_2.jpg';
import img4 from '../assets/8809572890581_1.jpg';
import img5 from '../assets/freshlyjuicedemask(caja).jpg';
import img6 from '../assets/freshlyjuicedemask(fueradecaja).jpg';
import heroImage from '../assets/Heroico.jpg';

const Hero = styled.div`
  background-image: url(${heroImage});
  background-size: cover;
  background-position: center;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #F2F2F2;
  text-align: center;

  @media (max-width: 768px) {
    height: 50vh;
  }
`;

const HeroText = styled.div`
  h1 {
    font-size: 3rem;
    font-family: 'Belgiano Serif', serif;
    color: #1E1E1E; /* Charcoal color in harmony with pastel pink */

    @media (max-width: 768px) {
      font-size: 1.9rem;
    }
  }

  a {
    margin-top: 2rem;  
    padding: 0.8rem 2rem;
    background-color: #F2F2F2;
    color: #010326;
    text-decoration: none;
    border-radius: 8px;
    transition: background-color 0.3s;

    &:hover {
      background-color: #FFB6C1;
    }
  }
`;

const FeaturedProducts = styled.div`
  padding: 2rem;
  text-align: center;
  background-color: #F2F2F2;

  h2 {
    margin: 2rem 0;
    color: #010326;
  }
`;

const ProductImage = styled.img`
  width: 100%;
  max-width: 200px;

  @media (max-width: 768px) {
    max-width: 150px;
  }
`;

const Home = () => {
  const products = [
    { id: 1, name: 'RICH MOIST SOOTHING TENCEL SHEET MASK', image: img1, description: 'Mascarilla facial nutritiva', price: '€1.99' },
    { id: 2, name: 'RICH MOIST SOOTHING SERUM', image: img2, description: 'Sérum anti-envejecimiento', price: '€11.99' },
    { id: 3, name: 'FUNDAMENTAL WATER GEL CREAM', image: img3, description: 'Crema de gel hidratante', price: '€16.99' },
    { id: 4, name: 'FUNDAMENTAL NOURISHING EYE BUTTER', image: img4, description: 'Mantequilla nutritiva para los ojos', price: '€13.49' },
    { id: 5, name: 'FRESHLY JUICED VITAMIN E MASK', image: img5, description: 'Mascarilla de vitamina E', price: '€15.49' },
    { id: 6, name: 'GENTLE BLACK DEEP CLEANSING OIL', image: img6, description: 'Aceite limpiador profundo', price: '€12.49' },
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <Hero>
        <HeroText>
          <h1>Cuidado Coreano para tu Alma</h1>
        </HeroText>
      </Hero>
      <FeaturedProducts>
        <h2>Productos Destacados</h2>
        <Swiper
          modules={[Autoplay]} 
          autoplay={{
            delay: 2500, 
            disableOnInteraction: false, 
          }}
          spaceBetween={10}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5 }} 
              >
                <ProductImage src={product.image} alt={product.name} />
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <p>Precio: {product.price}</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </FeaturedProducts>
    </motion.div>
  );
};

export default Home;
