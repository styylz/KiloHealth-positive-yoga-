import { Box, Grid } from '@mui/material';
import React from 'react';
import DiscountCard from '../../../components/card/DiscountCard/DiscountCard';
import Discount from '../../../components/layout/discount-area/Discount';
import Title from '../../../components/Title/Title';
import subscriptionData from '../../../data/subscriptionData';

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

    </Grid>
  </main>
);

export default HomePage;
