import {
  Box, Typography,
} from '@mui/material';
import React from 'react';
import DiscountChip from './DiscountCard.styles';

const DiscountCard = ({
  title, price, oldPrice, currPrice, description, discount,
}) => (
  <Box
    sx={{
      border: '2px solid rgba(0, 0, 0, 0.08)',
      padding: '0 16px',
      borderRadius: '16px',
      height: '120px',
      position: 'relative',
      alignItems: 'center',
      mb: '8px',
    }}
    key={title}
  >
    <Box sx={{
      position: 'absolute',
      left: 100,
      top: 13,
    }}
    >
      { discount
        ? (
          <DiscountChip
            label={discount.charAt(0).toUpperCase() + discount.slice(1)}
          />
        ) : null }
    </Box>
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      pt: '12px',

    }}
    >
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '90%',
      }}
      >
        <Typography sx={{
          letterSpacing: '-0.4px',
          lineHeight: '32px',
        }}
        >
          {title}
        </Typography>

        <Box sx={{
          mb: '4px',
        }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: '24px',
              fontWeight: 'bold',
              fontFamily: 'SF-PRO-DISPLAY-REGULAR',
              lineHeight: '32px',
            }}
          >
            $
            {price}
            <Typography
              variant="span"
              sx={{
                fontSize: '14px',
                fontWeight: '400',
                color: 'black',
                lineHeight: '23px',
                marginLeft: 'px',
              }}
            >
              / month
            </Typography>
          </Typography>
        </Box>
        <Typography
          variant="p"
          sx={{
            lineHeight: '20px',
            fontSize: '14px',
          }}
        >
          <Typography
            variant="p"
            sx={{
              textDecoration: 'line-through',
              fontWeight: 'bold',
              fontSize: '14px',
            }}
          >
            {oldPrice ? `$${oldPrice}` : ''}
          </Typography>
          <Typography
            variant="span"
            sx={{
              lineHeight: '20px',
              fontWeight: 'bold',
              fontSize: '14px',
              color: (oldPrice && 'orange'),
              ml: (oldPrice && '8px'),
              mr: (oldPrice && '4px'),
            }}
          >
            {currPrice ? `$${currPrice}` : ''}
          </Typography>
          {currPrice ? `${description}` : `${description.charAt(0).toUpperCase() + description.slice(1)}`}
        </Typography>
      </Box>

      {/* TODO: checkboxes for card */}
      {/* <RadioGroup
          value={title}
          onChange={handleChange}
        >
          <FormControlLabel checked={state.level === title} value={title} control={<Radio />} />
        </RadioGroup> */}

      {/* <input
        type="radio"
        value={title}
        name="content"
        id={title}
        onClick={handleChange}
        checked={state.level === title}
      /> */}
      {/* <Box>{state.level}</Box> */}
    </Box>
  </Box>
);

export default DiscountCard;
