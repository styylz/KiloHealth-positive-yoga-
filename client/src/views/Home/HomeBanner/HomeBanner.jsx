import { Box } from '@mui/material';
import React from 'react';
import phone from '../../../assets/banner-images/phone1.png';
import phone2 from '../../../assets/banner-images/phone2.png';
import accent from '../../../assets/banner-images/accent.svg';

const Banner = () => (
  <Box sx={{
    backgroundImage: {
      xs: `url(${accent})`,
      lg: 'url()',
    },
    backgroundRepeat: 'no-repeat',
    height: '433px',
    width: {
      xs: '100vw',
      lg: '21vw',
    },
    maxWidth: '100vw',
    margin: {
      xs: '0 calc(-50vw + 50%)',
      lg: '0',
    },
    position: 'relative',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
  >
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
      <img alt="phone" src={phone} />
    </Box>
    <Box sx={{
      position: 'absolute',
      bottom: '27.37px',
      right: {
        xs: '26.05px',
        lg: '60px',
      },
    }}
    >
      <img alt="phone2" src={phone2} />
    </Box>
  </Box>
);

export default Banner;
