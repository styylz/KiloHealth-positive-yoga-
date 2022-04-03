import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: [
      'SF Pro Display',
      'sans-serif',
    ].join(','),
    h3: {
      fontWeight: '600',
      fontFamily: 'SF Pro Display',
      fontStyle: 'normal',
      color: 'red',
      fontSize: '16px',
    },
  },
});

const defaultTheme = createTheme(theme, {
  typography: {
    fontFamily: [
      'SF Pro Display',
      'sans-serif',
    ].join(','),
    h3: {
      [theme.breakpoints.up('xs')]: {
        fontSize: '20px',
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: '24px',
      },
    },
  },
});

export default defaultTheme;
