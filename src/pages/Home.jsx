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
import newProduct1 from '../assets/14.jpg';
import newProduct2 from '../assets/18.jpg';

const Hero = styled.div`
  background-image: url(${heroImage});
  background-size: cover;
  background-position: center;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #F9F9F9;
  text-align: center;
  box-shadow: inset 0 0 100px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    height: 50vh;
  }
`;

const HeroText = styled.div`
  margin-top: 1rem;
  text-align: center;

  h1 {
    font-size: 3rem;
    font-family: 'Playfair Display', serif; /* Fuente elegante */
    color: #D47294; /* Rosa pálido */
    margin-bottom: 0.5rem;

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }
`;

const FeaturedProducts = styled.div`
  padding: 2rem;
  text-align: center;
  background-color: #FDFDFD; /* Fondo neutro para destacar los productos */
  color: #333333; /* Texto oscuro suave para contraste */

  h2 {
    margin: 1.2rem 0;
    color: #8E3B6D; /* Tono rosa oscuro */
    font-size: 1rem;
  }
`;

const ProductCard = styled(motion.div)`
  background-color: #FFFFFF;
  border: 1px solid #E0E0E0;
  border-radius: 8px;
  padding: 1rem;
  margin: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  max-width: 250px; /* Tamaño aumentado */

  @media (max-width: 768px) {
    max-width: 400px;
  }
`;

const ProductDescription = styled.p`
  color: #606060;
`;

const PriceTag = styled.p`
  color: #D47294;
  font-weight: bold;
`;

const Home = () => {
  const products = [
    { id: 6, name: 'Gentle Black Deep Cleasing Oil', image: img6, description: 'Aceite limpiador profundo', price: '€12.49' },
    { id: 7, name: 'Fundamental Nourishing Eye Butter', image: newProduct1, description: 'Mantequilla nutritiva para ojos', price: '€14.99' },
    { id: 8, name: 'Gentle Black Deep Cleansing Oil', image: newProduct2, description: 'Aceite de limpieza profunda', price: '€18.99' },
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <Hero />
      <HeroText>
        <h1>Cuidado Coreano para tu piel y tu Alma</h1>
      </HeroText>
      <FeaturedProducts>
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
              <ProductCard
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <ProductImage src={product.image} alt={product.name} />
                <h2>{product.name}</h2>
                <ProductDescription>{product.description}</ProductDescription>
                <PriceTag>Precio: {product.price}</PriceTag>
              </ProductCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </FeaturedProducts>
    </motion.div>
  );
};

export default Home;
