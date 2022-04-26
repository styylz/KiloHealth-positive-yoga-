import styled from '@emotion/styled';
import { Box } from '@mui/material';

interface RootProps {
  myProp?: boolean;
  backgroundImage: string;
}

const CardImage = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'backgroundImage' && prop !== 'myProp',
})<RootProps>(({ myProp, backgroundImage }) => ({
  backgroundImage: myProp ? `url(${backgroundImage})` : 'red',
  backgroundRepeat: 'no-repeat',
  height: '153px',
  width: '153px',
}));

export default CardImage;
