import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import styled from '@emotion/styled';

const StyledSwiper = styled(Swiper)({
  height: '700px',
  width: '95vw',
  maxWidth: '100vw',
  margin: '0 calc(-50vw + 50%)',
  paddingRight: '5vw',
  marginBottom: '38px',

});

const ImageSwiper = ({ children }) => (
  <StyledSwiper
    slidesPerView={1}
    breakpoints={{
      300: {
        slidesPerView: 1,
        spaceBetween: 16,
      },
    }}
  >
    <SwiperSlide>
      {children}
    </SwiperSlide>
  </StyledSwiper>
);
export default ImageSwiper;
