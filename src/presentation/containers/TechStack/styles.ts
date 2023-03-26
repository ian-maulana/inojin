import { styled } from '@mui/system';

export const Container = styled('div')(() => ({
  margin: '70px 0 170px',
}));

export const Img = styled('img')(() => ({
  filter: 'opacity(0.5) grayscale(1)',

  '&:hover': {
    filter: 'unset',
  },
}));
