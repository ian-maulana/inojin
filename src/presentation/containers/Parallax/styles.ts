import { styled } from '@mui/system';

export const Container = styled('div')(({ theme }) => ({
  transform: 'translate3d(0px, 0px, 0px)',
  transformStyle: 'preserve-3d',
  backfaceVisibility: 'hidden',
  position: 'fixed',
  left: 0,
  right: 0,
  top: 0,
  height: '100vh',
  width: '100%',
  zIndex: -1,
  paddingTop: '120px',
  display: 'none',

  [theme.breakpoints.up('sm')]: {
    display: 'block',
  },

  '& .layer-1': {
    left: '10% !important',
    top: '10% !important',
  },

  '& .layer-2': {
    left: '25% !important',
    top: '30% !important',
  },

  '& .layer-3': {
    left: '15% !important',
    bottom: '30% !important',
    top: 'auto !important',
  },

  '& .layer-4': {
    left: '10% !important',
    bottom: '10% !important',
    top: 'auto !important',
  },

  '& .layer-5': {
    left: '45% !important',
    top: '10% !important',
  },

  '& .layer-6': {
    left: '40% !important',
    bottom: '10% !important',
    top: 'auto !important',
  },

  '& .layer-7': {
    right: '30% !important',
    top: '20% !important',
    left: 'auto !important',
  },

  '& .layer-8': {
    right: '30% !important',
    bottom: '20% !important',
    top: 'auto !important',
    left: 'auto !important',
  },

  '& .layer-9': {
    right: '10% !important',
    top: '10% !important',
    left: 'auto !important',
  },

  '& .layer-10': {
    top: '45% !important',
    right: '20% !important',
    left: 'auto !important',
  },

  '& .layer-11': {
    bottom: '10% !important',
    right: '10% !important',
    top: 'auto !important',
    left: 'auto !important',
  },
}));
