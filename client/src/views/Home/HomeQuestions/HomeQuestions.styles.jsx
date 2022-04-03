import styled from '@emotion/styled';
import { Accordion } from '@mui/material';

const StyledAccordion = styled(Accordion)(() => ({
  width: '100%',
  marginBottom: '8px',
  borderRadius: '16px',
  boxShadow: 'none',
  border: '1px solid rgba(0, 0, 0, 0.08)',

  '&.MuiAccordion-root:before': {
    backgroundColor: 'transparent',

  },

  '&.Mui-expanded': {
    minHeight: 0,

    '&:nth-last-child(1)': {
      marginBottom: '40px',
    },
  },

  '&:nth-last-child(1)': {
    marginBottom: '40px',
  },

}));

export default StyledAccordion;
