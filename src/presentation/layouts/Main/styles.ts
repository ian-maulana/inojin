import { AppSize } from '@components/Theme/config';
import { styled } from '@mui/system';

export const Container = styled('div')(() => ({
  maxWidth: '100%',
  paddingTop: '84px',
  paddingLeft: AppSize.s16,
  paddingRight: AppSize.s16,
  minWidth: '320px',
}));