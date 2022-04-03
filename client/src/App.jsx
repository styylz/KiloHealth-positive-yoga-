import { Container, CssBaseline } from '@mui/material';
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import Header from './components/layout/navigation/Header/Header';
import HomePage from './views/Home/HomePage/HomePage';
import { getWindowWidth } from './utils/helpers/window-helper';
import theme from './styles/theme';

const App = () => {
  const screenWidth = getWindowWidth();
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
};

export default App;
