import styled from '@emotion/styled';
import { Button } from '@mui/material';

export const PrimaryButton = styled(Button)({
  backgroundColor: '#FF9B4E',
  fontWeight: 700,
  padding: '8px 40px',
  width: '343px',
  height: '56px',
  color: 'white',
  textTransform: 'none',
  boxShadow: '0px 16px 32px rgba(255, 155, 78, 0.24)',
  borderRadius: '8px',
  '&: hover': {
    '& .MuiTypography-root': {
      color: 'pink',
    },
    backgroundColor: 'orange',
    color: 'white',
  },
});

export default PrimaryButton;
