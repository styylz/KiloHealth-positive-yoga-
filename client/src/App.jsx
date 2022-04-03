import { CssBaseline } from '@mui/material';
import React from 'react';
import Header from './components/layout/navigation/Header/Header';
import HomePage from './views/Home/HomePage/HomePage';

const App = () => (
  <>
    <CssBaseline />
    <Header />
    <HomePage />
  </>
);

export default App;
