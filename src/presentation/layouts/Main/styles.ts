import { styled } from '@mui/system';
import { Sizes } from '@resources/utils/SizesManager';

export const Container = styled('div')(({ theme }) => ({
  maxWidth: '1080px',
  paddingTop: '100px',
  paddingLeft: Sizes.s16,
  paddingRight: Sizes.s16,
  minWidth: '320px',
  margin: '0 auto',

  [theme.breakpoints.up('sm')]: {
    paddingTop: '120px',
  },
}));
