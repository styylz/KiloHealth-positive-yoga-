import { styled, Box } from '@mui/material';
import accent from '../../../assets/banner-images/accent.svg';

export const Banner = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    backgroundImage: `url(${accent as string})`,
    width: '100vw',
    margin: '0 calc(-50vw + 50%)',
  },
  [theme.breakpoints.up('lg')]: {
    backgroundImage: 'url()',
    width: '21vw',
    margin: '0',
  },
  backgroundRepeat: 'no-repeat',
  height: '433px',
  maxWidth: '100vw',
  position: 'relative',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
}));

export default Banner;
