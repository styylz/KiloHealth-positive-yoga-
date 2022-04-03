import React from 'react';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import StyledAccordion from './HomeQuestions.styles';

const Questions = ({ title, description }) => (
  <StyledAccordion
    square
    expanded
    disableGutters
  >
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
    >
      <Typography variant="h5">{title}</Typography>
    </AccordionSummary>
    <AccordionDetails sx={{ padding: '0 16px 16px 16px' }}>
      <Typography>
        {description}
      </Typography>
    </AccordionDetails>
  </StyledAccordion>

);
export default Questions;
