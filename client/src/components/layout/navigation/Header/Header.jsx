import React from 'react';
import { Box, Typography } from '@mui/material';
import * as S from './Header.styles';
import badge from '../../../../assets/headerBadge.svg';
import logo from '../../../../assets/Logo.png';

const Header = () => (
  <>
    <S.Header>
      <Box>
        <img alt="badge" src={badge} />
        <Typography sx={{
          fontSize: '15px',
          fontWeight: '600',
          lineHeight: '20px',
          // TODO: create another font
          fontFamily: 'SF-PRO-DISPLAY-REGULAR',
          fontStyle: 'normal',
        }}
        >
          <span>50%</span>
          discount only valid for
          <span>00:15:49</span>
        </Typography>
      </Box>
    </S.Header>
    <S.Nav>
      <img alt="badge" src={logo} />
    </S.Nav>
  </>

);

export default Header;
