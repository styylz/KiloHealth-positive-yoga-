import { Box, Grid } from '@mui/material';
import React from 'react';
import DiscountCard from '../../../components/card/DiscountCard/DiscountCard';
import Discount from '../../../components/layout/discount-area/Discount';
import Title from '../../../components/Title/Title';

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
          <DiscountCard />
        </Discount>
      </Grid>

    </Grid>
  </main>
);

export default HomePage;
