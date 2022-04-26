import React from 'react';
import { Box, Typography } from '@mui/material';
import * as S from './Header.styles';
import badge from '../../../../assets/headerBadge.svg';
import logo from '../../../../assets/Logo.png';

const Header: React.FC = () => (
  <>
    <S.Header>
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '56px',
      }}
      >
        <img width="20px" height="20px" alt="badge" src={badge as string} />
        <Typography
          component="p"
          sx={{
            fontSize: '15px',
            fontWeight: '400',
            lineHeight: '20px',
            fontFamily: 'SF Pro Display',
            letterSpacing: '0.5px',
          }}
        >
          <Typography
            component="span"
            sx={{
              fontWeight: '400',
              mx: '8px',
            }}
          >
            50%
          </Typography>
          discount only valid for
          <Typography
            component="span"
            sx={{
              fontWeight: '400',
              mx: '8px',
            }}
          >
            00:15:49
          </Typography>
        </Typography>
      </Box>
    </S.Header>
    <S.Nav>
      <img alt="badge" src={logo as string} />
    </S.Nav>
  </>
);

export default Header;
