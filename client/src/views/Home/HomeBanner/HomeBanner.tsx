import React from 'react';
import { Box } from '@mui/material';
import * as S from './HomeBanner.styles';
import phone from '../../../assets/banner-images/phone1.png';
import phone2 from '../../../assets/banner-images/phone2.png';

const Banner: React.FC = () => (
  <S.Banner>
    <Box sx={{
      position: 'absolute',
      top: '47px',
      left: {
        xs: '26.05px',
        lg: '5px',
      },
      filter: 'drop-shadow(0px 2.33429px 18.6743px rgba(0, 0, 0, 0.16))',
    }}
    >
      <img alt="phone" src={phone as string} />
    </Box>
    <Box sx={{
      position: 'absolute',
      bottom: '27.37px',
      right: {
        xs: '26.05px',
        lg: '80px',
      },
    }}
    >
      <img alt="phone2" src={phone2 as string} />
    </Box>
  </S.Banner>
);

export default Banner;
