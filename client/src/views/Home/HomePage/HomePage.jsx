import { Box, Grid, Typography } from '@mui/material';
import { SwiperSlide } from 'swiper/react';
import React, { useState } from 'react';
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
import Benefits from '../HomeBenefits/HomeBenefits';
import benefitsData from '../../../data/benefitsData';
import questionsData from '../../../data/questionsData';
import Questions from '../HomeQuestions/HomeQuestions';

const HomePage = () => {
  const [expandedPanel, setExpandedPanel] = useState({
    1: true,
    2: false,
    3: false,
    4: false,
  });

  const handleChange = (panelName) => (event, newExpanded) => {
    console.log(panelName, newExpanded);
    setExpandedPanel({
      ...expandedPanel,
      [panelName]: newExpanded,
    });
  };
  return (
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
              <DiscountCard key={subscription.id} {...subscription} />
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
          <SwiperSlide key={userInfo.id}>
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
        <Grid item xs={12} lg={4}>
          <Box sx={{
            mb: '42px',
          }}
          >
            <Box sx={{
              mb: {
                xs: '20px',
                lg: '24px',
              },
            }}
            >
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
                Is Positive Yoga right for me?
              </Typography>
            </Box>
            {benefitsData.map((benefit) => <Benefits key={benefit.id} {...benefit} />)}
          </Box>
        </Grid>
      </Grid>

      <Box sx={{
        py: '8px',
        width: {
          xs: '99%',
          lg: '61%',
        },
        margin: 'auto',
      }}
      >

        <Box>
          <Typography
            variant="h3"
            sx={{
              fontWeight: '600',
              fontFamily: 'SF-PRO-DISPLAY-REGULAR',
              fontStyle: 'normal',
              fontSize: {
                xs: '20px',
                lg: '24px',
              },
              lineHeight: {
                xs: '28px',
                lg: '32px',
              },
              textAlign: 'center',
              // TODO: delete later mb
              mb: 2,
            }}
          >
            Frequently Asked Questions
          </Typography>
        </Box>
        {questionsData.map((question) => (
          <Questions
            key={question.id}
            expanded={expandedPanel}
            tooglePanel={handleChange}
            {...question}
          />
        ))}
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
              <DiscountCard key={subscription.id} {...subscription} />
            ))}
            <PrimaryButton>Get my plan</PrimaryButton>
          </Discount>
        </Grid>
        <Grid item xs={12} lg={4}>
          <FitProgram />
        </Grid>
      </Grid>
    </main>
  );
};

export default HomePage;
