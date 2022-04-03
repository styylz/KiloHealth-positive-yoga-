import styled from '@emotion/styled';
import { Box } from '@mui/material';

const CardImage = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'backgroundImage' && prop !== 'myProp',
})(({ myProp, backgroundImage }) => ({
  backgroundImage: myProp ? `url(${backgroundImage})` : 'red',
  backgroundRepeat: 'no-repeat',
  height: '153px',
  width: '153px',
}));

export default CardImage;
