/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Box, Typography } from '@mui/material';
import diet from '../../../assets/plans-images/diet.svg';
import bookcheck from '../../../assets/plans-images/bookcheck.svg';
import exercise from '../../../assets/plans-images/exercise.svg';
import plan from '../../../assets/plans-images/plan.svg';
import shoe from '../../../assets/plans-images/shoe.svg';
import smartwatch from '../../../assets/plans-images/smartwatch.svg';
import whistle from '../../../assets/plans-images/whistle.svg';

const plansInformation = [
  // TODO: try to get images from public folder without importing
  // TODO: make dynamic by name
  {
    id: '1',
    title: 'A personalized yoga program',
    description: 'Completely safe and focused on your key goals',
    svg: <img alt="plan" src={plan} />,
  },
  {
    id: '2',
    title: 'Easy & enjoyable yoga workouts for your level',
    description: 'Program adjusts to your level and pace',
    svg: <img alt="plan" src={exercise} />,

  },
  {
    id: '3',
    title: 'No special preparation needed',
    description: 'Perfect for begginners! Requires no special preparation or equipment',
    svg: <img alt="plan" src={shoe} />,

  },
  {
    id: '4',
    title: 'Daily motivation & accountability',
    description: 'Track your progress, develop a healthy routine, reach goals faster',
    svg: <img alt="plan" src={diet} />,

  },
  {
    id: '5',
    title: 'Browse from various yoga challenges',
    description: '30 d morning yoga, mindful yoga, back flexibility challenge, and more!',
    svg: <img alt="plan" src={whistle} />,

  },
  {
    id: '6',
    title: 'Easy access on any device',
    description: 'Do your yoga anywhere across all types of devices',
    svg: <img alt="plan" src={smartwatch} />,

  },
  {
    id: '7',
    title: 'A complete guide to get started',
    description: 'Best tips, guidelines, advice, and recommendations for successful practice',
    svg: <img alt="plan" src={bookcheck} />,
  },
];
const FitProgram = () => (
  <>
    <Typography
      variant="h3"
      component="h3"
    >
      What's in my program?
    </Typography>
    <Box sx={{ marginTop: '48px' }}>
      <Box sx={{
      }}
      >
        {plansInformation.map(({
          title, description, svg,
        }) => (
          <Box
            sx={{
              display: 'flex',
              paddingBottom: '12px',
            }}
          >
            <Box sx={{
              display: 'flex',

            }}
            >
              <Box sx={{
                width: '48px',
                height: '48px',
                marginRight: '16px',
              }}
              >
                {svg}
              </Box>
              <Box>
                <Typography
                  variant="h5"
                  component="h5"
                >
                  {title}
                </Typography>
                <Typography
                  component="figcaption"
                  variant="caption"
                >
                  {description}
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>

  </>

);

export default FitProgram;
