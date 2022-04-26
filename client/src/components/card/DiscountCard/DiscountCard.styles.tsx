import { Box, Chip, styled } from '@mui/material';

interface DiscountCardProps {
  myProp?: boolean;
}
export const DiscountChip = styled(Chip)({
  '&&': {
    minWidth: '77px',
    minHeight: '24px',
    padding: '3px',
    backgroundColor: '#FFE082',
    borderRadius: '6px',
    fontSize: '12px',
    fontWeight: 'bold',
    lineHeight: '18px',
  },
  '& .MuiChip-label': {
    padding: 0,
  },
});

export const DiscountCard = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'border' && prop !== 'myProp',
})<DiscountCardProps>(({ theme, myProp }) => ({
  width: '343px',
  border: myProp ? '2px solid #FF9B4E' : '2px solid rgba(0, 0, 0, 0.08)',
  padding: '0 16px',
  borderRadius: '16px',
  position: 'relative',
  alignItems: 'center',
  margin: 'auto 0',
  marginBottom: '8px',
  [theme.breakpoints.up('xs')]: {
    height: '120px',
  },
  [theme.breakpoints.up('lg')]: {
    height: '131px',
  },
}));

export default DiscountChip;
