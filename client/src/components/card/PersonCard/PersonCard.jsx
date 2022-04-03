import React from 'react';
import { Box, Rating, Typography } from '@mui/material';
import CardImage from './PersonCard.styles';

const PersonCard = ({
  name, age, location, description, image,
}) => (
  <Box sx={{
    width: '323px',
    height: '607px',
    boxShadow: '0px 16px 32px rgba(57, 53, 60, 0.08)',
    borderRadius: '16px',
    padding: '16px',
    margin: '16px 16px 48px 16px',
  }}
  >
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    }}
    >
      <Box sx={{
        height: '54px',
        display: 'flex',
        flexDirection: 'column',
      }}
      >
        <Typography
          variant="p"
          sx={{
            fontWeight: 'bold',
            fontSize: '15px',
            lineHeight: '20px',
            // letterSpacing: '-0.4px',
          }}
        >
          {name}
          ,
          {age}
        </Typography>
        <Typography
          variant="p"
          sx={{
            fontWeight: 'regular',
            fontSize: '12px',
            letterSpacing: '-0.4px',
            lineHeight: '20px',
          }}
        >
          {location}
        </Typography>
      </Box>
      <Box sx={{
        height: '54px',
      }}
      >
        <Rating name="read-only" value={5} readOnly />

      </Box>
      <Box sx={{
        height: '169px',
        width: '20px',
      }}
      >
        <CardImage myProp backgroundImage={image} />
      </Box>
      <Box>
        <Typography sx={{
          fontWeight: 'regular',
          fontSize: '16px',
          lineHeight: '24px',
          mixBlendMode: 'normal',
        }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  </Box>
);

export default PersonCard;
