import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: [
      'SF Pro Display',
      'sans-serif',
    ].join(','),
    h3: {
      fontWeight: '700',
      fontFamily: 'SF Pro Display',
      fontStyle: 'normal',
      color: 'red',
      fontSize: '16px',
      lineHeight: '32px',
    },
  },
});

const defaultTheme = createTheme(theme, {
  typography: {
    h3: {
      [theme.breakpoints.up('xs')]: {
        fontSize: '20px',
        lineHeight: '28px',
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: '24px',
        lineHeight: '32px',
      },
    },
  },
});

export default defaultTheme;
