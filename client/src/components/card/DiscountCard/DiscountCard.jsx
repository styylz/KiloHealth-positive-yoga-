/*eslint-disable*/
import {
  Box, Typography,
} from '@mui/material';
import React from 'react';
import DiscountChip from './DiscountCard.styles';
import OrangeCircle from '../../../assets/orange-circle.svg'
import GreyCircle from '../../../assets/grey-circle.svg'
import * as S from './DiscountCard.styles'

const DiscountCard = ({
  title,
  price,
  oldPrice,
  currPrice,
  description,
  discount,
  index,
  changeState,
  checked
}) => (
  <S.DiscountCard
    myProp={checked}
    border

    onClick={() => changeState(index)}
    key={title}
  >
    <Box sx={{
      position: 'absolute',
      left: 113,
      top: {
        xs: 9,
        lg: 13,
      },
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
      <Box
          sx={{
            backgroundImage: `${checked ? `url(${OrangeCircle})` : `url(${GreyCircle})`  }`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            width: '20px',
            height: '20px',
          }}
        />
    </Box>
  </S.DiscountCard>
);

export default DiscountCard;
