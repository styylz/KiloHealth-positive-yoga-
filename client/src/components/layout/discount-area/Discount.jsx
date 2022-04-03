import React from 'react';
import { Box, Typography } from '@mui/material';
import CompaniesLogos from '../../../assets/companies-logos.png';
import * as S from './Discount.styles';

// TODO: get colors from theme
const DiscountLayout = ({ children }) => (
  <Box sx={{
    marginBottom: '48px',
    width: '352px',
  }}
  >
    <Box sx={{
      mb: '16px',
    }}
    >
      <S.Heading
        variant="h3"
        sx={{
          fontSize: {
            xs: '20px',
            lg: '24px',
          },
          lineHeight: {
            xs: '28px',
            lg: '32px',
          },
        }}
      >
        Choose your plan and get
        <Typography
          variant="span"
          sx={{
            ml: '4px',
            color: 'orange',
          }}
        >
          7 days free trial
        </Typography>
      </S.Heading>
    </Box>
    <Box sx={{
      mb: 2,
    }}
    >
      {children}
    </Box>
    <Box className="plans-container__information">
      <Box sx={{
        textAlign: 'center',
      }}
      >
        <Typography
          variant="p"
          sx={{
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '12px',
            lineHeight: '18px',
          }}
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
          variant="p"
          sx={{
          // TODO: change font family
          // fontFamily: 'SF Pro Text';
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '12px',
            lineHeight: '18px',
          // #eff4fb
          }}
        >
          By choosing a payment method you agree to the
          <Typography
            variant="span"
            sx={{
            // TODO: get right color
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
