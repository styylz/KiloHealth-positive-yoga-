import React from 'react';
import { Box, Typography } from '@mui/material';
import diet from '../../../assets/plans-images/diet.svg';
import bookcheck from '../../../assets/plans-images/bookcheck.svg';
import exercise from '../../../assets/plans-images/exercise.svg';
import plan from '../../../assets/plans-images/plan.svg';
import shoe from '../../../assets/plans-images/shoe.svg';
import smartwatch from '../../../assets/plans-images/smartwatch.svg';
import whistle from '../../../assets/plans-images/whistle.svg';

type PlansProps = {
  id: string;
  title: string;
  description: string;
  svg: JSX.Element;
};

const plansInformation: PlansProps[] = [
  {
    id: '1',
    title: 'A personalized yoga program',
    description: 'Completely safe and focused on your key goals',
    svg: <img alt="plan" src={plan as string} />,
  },
  {
    id: '2',
    title: 'Easy & enjoyable yoga workouts for your level',
    description: 'Program adjusts to your level and pace',
    svg: <img alt="plan" src={exercise as string} />,

  },
  {
    id: '3',
    title: 'No special preparation needed',
    description: 'Perfect for begginners! Requires no special preparation or equipment',
    svg: <img alt="plan" src={shoe as string} />,

  },
  {
    id: '4',
    title: 'Daily motivation & accountability',
    description: 'Track your progress, develop a healthy routine, reach goals faster',
    svg: <img alt="plan" src={diet as string} />,

  },
  {
    id: '5',
    title: 'Browse from various yoga challenges',
    description: '30 d morning yoga, mindful yoga, back flexibility challenge, and more!',
    svg: <img alt="plan" src={whistle as string} />,

  },
  {
    id: '6',
    title: 'Easy access on any device',
    description: 'Do your yoga anywhere across all types of devices',
    svg: <img alt="plan" src={smartwatch as string} />,

  },
  {
    id: '7',
    title: 'A complete guide to get started',
    description: 'Best tips, guidelines, advice, and recommendations for successful practice',
    svg: <img alt="plan" src={bookcheck as string} />,
  },
];
const FitProgram: React.FC = () => (
  <Box sx={{
    mt: '5px',
    mb: {
      xs: '40px',
      lg: '48px',
    },
  }}
  >
    <Typography
      variant="h3"
      component="h3"
    >
      What&apos;s in my program?
    </Typography>
    <Box sx={{
      mt: '39px',
      pt: {
        xs: '0',
        lg: '20',
      },
    }}
    >
      <Box sx={{
      }}
      >
        {plansInformation.map(({
          title, description, svg, id,
        }) => (
          <Box
            key={id}
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
  </Box>
);

export default FitProgram;
