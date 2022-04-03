import styled from '@emotion/styled';
import { Chip } from '@mui/material';

const DiscountChip = styled(Chip)({
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

export default DiscountChip;
