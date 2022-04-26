import { Box, Typography } from '@mui/material';
import React from 'react';
import GreenCheckMark from '../../../assets/green-checkmark.svg';
import { Benefit } from '../../../data/constants';

const Benefits: React.FC<Benefit> = ({ title }) => (
  <Box sx={{
    display: 'flex',
  }}
  >
    <Box sx={{
      minHeight: '40px',
      width: '40px',
    }}
    >
      <img alt="checkmark-logo" src={GreenCheckMark as string} />
    </Box>
    <Box sx={{
      width: '303px',
      mb: '8px',
    }}
    >
      <Typography
        component="p"
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
