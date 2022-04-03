import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import DiscountCard from '../../../components/card/DiscountCard/DiscountCard';
import Discount from '../../../components/layout/discount-area/Discount';
import Title from '../../../components/Title/Title';
import subscriptionData from '../../../data/subscriptionData';
import FitProgram from '../HomeFitProgram/HomeFitProgram';

const HomePage = () => (
  <main>
    <Box>
      <Title />
    </Box>

    <Grid
      container
      direction="row"
      alignItems="flex-start"
      justifyContent="center"
      spacing={4}
    >
      <Grid item xs={12} lg={4}>
        <Discount>
          {subscriptionData.map((subscription) => (
            <DiscountCard {...subscription} />
          ))}
        </Discount>
      </Grid>
      <Grid item xs={12} lg={4}>
        <FitProgram />
      </Grid>
    </Grid>

    <Box sx={{
      textAlign: {
        xs: 'left',
        lg: 'center',
      },
    }}
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: '700',
          lineHeight: '28px',
          fontFamily: 'SF-PRO-DISPLAY-REGULAR',
          fontStyle: 'normal',
          color: '#22222C',
          fontSize: {
            lg: '24px',
          },
        }}
      >
        Hear success stories from our clients
      </Typography>
    </Box>
  </main>
);

export default HomePage;
