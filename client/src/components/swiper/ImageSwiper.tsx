import React from 'react';
import { Swiper } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import styled from '@emotion/styled';
import { ButtonProps } from '@mui/material';

const StyledSwiper = styled(Swiper)({
  height: '700px',
  width: '100vw',
  maxWidth: '100vw',
  margin: '0 calc(-50vw + 50%)',
  marginBottom: '38px',
});

const ImageSwiper: React.FC<ButtonProps> = ({ children }) => {
  SwiperCore.use([Pagination]);
  return (
    <StyledSwiper
      pagination
      slidesPerView={1}
      breakpoints={{
        300: {
          slidesPerView: 1,
          spaceBetween: 16,
        },
      }}
    >
      {children}
    </StyledSwiper>
  );
};
export default ImageSwiper;
