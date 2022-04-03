import { Container, CssBaseline } from '@mui/material';
import React from 'react';
import Header from './components/layout/navigation/Header/Header';
import HomePage from './views/Home/HomePage/HomePage';
import { getWindowWidth } from './utils/helpers/window-helper';

const App = () => {
  const screenWidth = getWindowWidth();
  return (
    <>
      <CssBaseline />
      <Header />
      {screenWidth > 900 ? (
        <Container maxWidth="lg">
          <HomePage />
        </Container>
      ) : (
        <Container maxWidth="lg">
          <HomePage />
        </Container>
      )}
    </>
  );
};

export default App;
