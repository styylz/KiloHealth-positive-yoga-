import React from 'react';
import { Box, Typography } from '@mui/material';
import CompaniesLogos from '../../../assets/companies-logos.png';
import PrimaryButton from '../../Button/PrimaryButton/PrimaryButton';

const DiscountLayout = ({ children }) => (
  <Box sx={{
    marginBottom: '30px',
    width: '352px',
  }}
  >
    <Box sx={{
      mb: '16px',
      pl: '5px',

    }}
    >
      <Typography component="h3" variant="h3">
        Choose your plan and get
        <Typography
          component="span"
          sx={{
            ml: '4px',
            color: 'orange',
            fontWeight: '700',
            fontSize: {
              xs: '20px',
              lg: '24',
            },
            lineHeight: {
              xs: '28px',
              lg: '32px',
            },
          }}
        >
          7 days free trial
        </Typography>
      </Typography>
    </Box>
    <Box sx={{
      mb: 2,
    }}
    >
      {children}
    </Box>
    <Box sx={{
      textAlign: 'center',
      mb: 2,
    }}
    >
      <PrimaryButton>Get my plan</PrimaryButton>
    </Box>
    <Box>
      <Box sx={{
        textAlign: 'center',
      }}
      >
        <Typography
          component="figcaption"
          variant="caption"
        >
          After 7 days free trial subscription payment is automatically charged
          from your account unless it is canceled at least 24 hours before
          the end of the trial period.
        </Typography>
      </Box>
      <Box sx={{
        textAlign: 'center',
        mb: 2,
      }}
      >
        <Typography
          component="figcaption"
          variant="caption"
        >
          By choosing a payment method you agree to the
          <Typography
            variant="span"
            sx={{
              color: '#eff4fb',
            }}
          >
            T&Cs
          </Typography>
          and Privacy Policy
        </Typography>
      </Box>
      <Box>
        <img alt="companies-logos" src={CompaniesLogos} />
      </Box>
    </Box>

  </Box>
);

export default DiscountLayout;
