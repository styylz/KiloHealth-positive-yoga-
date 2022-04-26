import React from 'react';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import StyledAccordion from './HomeQuestions.styles';
import { getWindowWidth } from '../../../utils/helpers/window-helper';
import Panel from '../../../types/panel';
import { Question } from '../../../data/constants';

interface QuestionsProps extends Question {
  expanded: Panel
  tooglePanel: (panelName: number) => (e: React.SyntheticEvent, newExpanded: boolean) => void;
}
const Questions: React.FC<QuestionsProps> = ({
  id, title, description, expanded, tooglePanel,
}) => (
  <StyledAccordion
    square
    onChange={tooglePanel(Number(id))}
    expanded={getWindowWidth() > 900 ? expanded[Number(id) as keyof Panel] : true}
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
      <Typography component="p" variant="p">
        {description}
      </Typography>
    </AccordionDetails>
  </StyledAccordion>

);
export default Questions;
