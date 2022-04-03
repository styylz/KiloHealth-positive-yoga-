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
      height: {
        xs: '120px',
        lg: '131px',
      },
      position: 'relative',
      alignItems: 'center',
      mb: '8px',
    }}
    key={title}
  >
    <Box sx={{
      position: 'absolute',
      left: 120,
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
      pt: {
        xs: '14px',
        lg: '16px',
      },

    }}
    >
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '90%',
      }}
      >
        <Typography
          component="h5"
          variant="h5"
        >
          {title}
        </Typography>

        <Box sx={{
          mb: '4px',
          pt: {
            xs: '7px',
            lg: '1px',
          },
        }}
        >
          <Typography
            component="h2"
            variant="h2"
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
        <Box sx={{
          display: 'flex',
        }}
        >

          <Typography component="p" variant="p">
            <Typography
              component="span"
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
              component="span"
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

          </Typography>
          <Box>
            <Typography
              component="p"
              variant="p"
              sx={{
              }}
            >
              {currPrice ? `${description}` : `${description.charAt(0).toUpperCase() + description.slice(1)}`}
            </Typography>
          </Box>
        </Box>

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
