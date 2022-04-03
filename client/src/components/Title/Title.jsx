import React from 'react';
import { Box, Typography } from '@mui/material';

const Title = () => (
  <>
    <Typography sx={{
      textAlign: {
        xs: 'left',
        lg: 'center',
      },
      fontSize: '14px',
      fontWeight: '400',
    }}
    >
      Over
      <Typography
        variant="span"
        sx={{
          fontWeight: 'bold',
          mx: '3px',
        }}
      >
        52 147
      </Typography>
      plans ordered.
    </Typography>
    <Box sx={{
      width: {
        xs: '100%',
        lg: '80%',
      },
      mb: '24px',
      mt: '8px',
      mx: {
        xs: 0,
        lg: 25,
      },
    }}
    >
      <Typography
        component="h1"
        variant="h1"
        sx={{
          fontSize: {
            xs: '28px',
            lg: '40px',
          },
          fontWeight: 'bold',
          lineHeight: {
            xs: '36px',
            lg: '56px',
          },
          textAlign: {
            xs: 'left',
            lg: 'left',
          },
        }}

      >
        Get access to your yoga program now!

      </Typography>
    </Box>
  </>

);

export default Title;
