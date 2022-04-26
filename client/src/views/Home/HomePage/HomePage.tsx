import React, { useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { SwiperSlide } from 'swiper/react';
import DiscountCard from 'components/card/DiscountCard/DiscountCard';
import PersonCard from '../../../components/card/PersonCard/PersonCard';
import Discount from '../../../components/layout/discount-area/Discount';
import ImageSwiper from '../../../components/swiper/ImageSwiper';
import Title from '../../../components/Title/Title';
import FitProgram from '../HomeFitProgram/HomeFitProgram';
import PrimaryButton from '../../../components/Button/PrimaryButton/PrimaryButton';
import Banner from '../HomeBanner/HomeBanner';
import Benefits from '../HomeBenefits/HomeBenefits';
import Questions from '../HomeQuestions/HomeQuestions';
import { getWindowWidth } from '../../../utils/helpers/window-helper';
import Panel from '../../../types/panel';
import {
  subscriptionData,
  reviewData,
  benefitsData,
  questionsData,
} from '../../../data/constants';

const HomePage: React.FC = () => {
  const [expandedPanel, setExpandedPanel] = useState<Panel>({
    1: true,
    2: false,
    3: false,
    4: false,
  });

  const [discountCheck, setDiscountCheck] = useState<number>(0);

  const handleChange = (panelName: number) => (e: React.SyntheticEvent, newExpanded: boolean) => {
    setExpandedPanel({
      ...expandedPanel,
      [panelName]: newExpanded,
    });
  };

  const handleDiscountCheck = (index: number): void => {
    setDiscountCheck(index);
  };

  return (
    <Box component="main">
      <Box sx={{ pl: '5px' }}>
        <Title />
      </Box>
      <Grid
        container
        direction="row"
        alignItems="flex-start"
        justifyContent="center"
      >
        <Grid item xs={12} lg={4}>
          <Discount>
            {subscriptionData.map((subscription, i) => (
              <DiscountCard
                index={i}
                changeState={handleDiscountCheck}
                checked={discountCheck === i}
                key={subscription.id}
                {...subscription}
              />
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
          component="h3"
          variant="h3"
        >
          Hear success stories from our clients
        </Typography>
      </Box>

      {getWindowWidth() > 900 ? (
        <Box sx={{
          display: 'flex',
        }}
        >
          <Box sx={{
            display: 'flex',
            mx: 'auto',
          }}
          >
            {reviewData.map((userInfo) => (
              <PersonCard key={userInfo.id} {...userInfo} />
            ))}
          </Box>
        </Box>
      ) : (
        <ImageSwiper>
          {
            reviewData.map((userInfo) => (
              <SwiperSlide
                key={userInfo.id}
              >
                <PersonCard {...userInfo} />
              </SwiperSlide>
            ))
          }
        </ImageSwiper>
      )}
      <Grid
        container
        direction="row-reverse"
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
                component="h3"
                variant="h3"
              >
                Is Positive Yoga right for me?
              </Typography>
            </Box>
            {benefitsData.map((benefit) => <Benefits key={benefit.id} {...benefit} />)}
          </Box>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Box>
            <Typography
              component="h3"
              variant="h3"
            >
              Start your yoga journey now!
            </Typography>
          </Box>
          <Banner />
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
            component="h3"
            variant="h3"
            sx={{
              textAlign: 'center',
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
      <Box sx={{
        textAlign: 'center',
        mb: '48px',
      }}
      >
        <PrimaryButton>Get my plan</PrimaryButton>
      </Box>
      <Typography
        component="h2"
        variant="h2"
        sx={{
          textAlign: 'center',
        }}
      >
        Start your yoga program today!
      </Typography>
      <Grid
        container
        direction="row"
        alignItems="flex-start"
        justifyContent="center"
        sx={{
          mt: {
            xs: '24px',
            lg: '32px',
          },
        }}
      >
        <Grid item xs={12} lg={4}>
          <Discount>
            {subscriptionData.map((subscription, i) => (
              <DiscountCard
                index={i}
                changeState={handleDiscountCheck}
                checked={discountCheck === i}
                key={subscription.id}
                {...subscription}
              />
            ))}
          </Discount>
        </Grid>
        <Grid item xs={12} lg={4}>
          <FitProgram />
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomePage;
