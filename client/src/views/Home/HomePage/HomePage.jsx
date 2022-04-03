import { Box, Grid, Typography } from '@mui/material';
import { SwiperSlide } from 'swiper/react';
import React from 'react';
import DiscountCard from '../../../components/card/DiscountCard/DiscountCard';
import PersonCard from '../../../components/card/PersonCard/PersonCard';
import Discount from '../../../components/layout/discount-area/Discount';
import ImageSwiper from '../../../components/swiper/ImageSwiper';
import Title from '../../../components/Title/Title';
import subscriptionData from '../../../data/subscriptionData';
import personData from '../../../data/personData';
import FitProgram from '../HomeFitProgram/HomeFitProgram';
import PrimaryButton from '../../../components/Button/PrimaryButton/PrimaryButton';
import Banner from '../HomeBanner/HomeBanner';

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
          <PrimaryButton>Get my plan</PrimaryButton>
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
    <ImageSwiper>
      {
        personData.map((userInfo) => (
          <SwiperSlide>
            <PersonCard {...userInfo} />
          </SwiperSlide>
        ))
      }
    </ImageSwiper>

    <Box sx={{
      width: '343px',
      alignItems: 'center',
      m: 'auto',
    }}
    >
      <PrimaryButton>Get my plan</PrimaryButton>
    </Box>

    <Grid
      container
      direction="row"
      alignItems="flex-start"
      justifyContent="center"
      sx={{
        mt: {
          xs: 5,
          lg: 6,
        },
      }}
    >
      <Grid item xs={12} lg={5}>
        <Box>
          <Typography
            variant="h3"
            sx={{
              fontWeight: '600',
              // TODO: create another font
              fontFamily: 'SF-PRO-DISPLAY-REGULAR',
              fontStyle: 'normal',
              fontSize: {
                xs: '20',
                lg: '28px',
              },
              lineHeight: {
                xs: '28px',
                lg: '32px',
              },
            }}
          >
            Start your yoga journey now!
          </Typography>
        </Box>
        <Banner />
      </Grid>
      <Grid item xs={12} lg={5} />
    </Grid>
  </main>
);

export default HomePage;
