import { Box, Typography } from '@mui/material';
import React from 'react';
import GreenCheckMark from '../../../assets/green-checkmark.svg';

const Benefits = ({ title }) => (
  <Box sx={{
    display: 'flex',
  }}
  >
    <Box sx={{
      minHeight: '40px',
      width: '40px',
    }}
    >
      <img alt="checkmark-logo" src={GreenCheckMark} />
    </Box>
    <Box sx={{
      width: '303px',
      mb: '8px',
    }}
    >
      <Typography
        variant="p"
        sx={{
          lineHeight: '20px',
        }}
      >
        {title}
      </Typography>
    </Box>
  </Box>
);

export default Benefits;
