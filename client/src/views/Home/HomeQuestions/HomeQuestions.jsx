import React from 'react';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import StyledAccordion from './HomeQuestions.styles';

const Questions = ({
  id, title, description, expanded, tooglePanel,
}) => (
  <StyledAccordion
    square
    onChange={tooglePanel(Number(id))}
    expanded={expanded[Number(id)]}
    disableGutters
  >
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
    >
      <Typography
        component="h5"
        variant="h5"
      >
        {title}
      </Typography>
    </AccordionSummary>
    <AccordionDetails sx={{ padding: '0 16px 16px 16px' }}>
      <Typography>
        {description}
      </Typography>
    </AccordionDetails>
  </StyledAccordion>

);
export default Questions;
