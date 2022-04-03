import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: [
      'SF Pro Display',
      '-apple-system',
      'sans-serif',
    ].join(','),
    h2: {
      fontWeight: '700',
      fontFamily: 'SF Pro Display',
      fontStyle: 'normal',
    },
    h3: {
      fontWeight: '700',
      fontFamily: 'SF Pro Display',
      fontStyle: 'normal',
      fontSize: '16px',
    },

  },
});

const defaultTheme = createTheme(theme, {
  typography: {
    h2: {
      [theme.breakpoints.up('xs')]: {
        fontSize: '24px',
        lineHeight: '32px',
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: '32px',
        lineHeight: '44px',
      },
    },
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
