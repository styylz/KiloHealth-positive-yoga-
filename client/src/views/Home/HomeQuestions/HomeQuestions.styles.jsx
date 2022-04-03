import styled from '@emotion/styled';
import { Accordion } from '@mui/material';

const StyledAccordion = styled(Accordion)(() => ({
  width: '100%',
  marginBottom: '8px',
  borderRadius: '16px',
  border: '1px solid rgba(0, 0, 0, 0.08)',

  '&.MuiAccordion-root:before': {
    backgroundColor: 'white',
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

  p: {
    fontSize: '14px',
    fontWeight: 'regular',
    lineHeight: '20px',

  },

  h5: {
    fontSize: '15px',
    fontWeight: 'bold',
  },

}));

export default StyledAccordion;
