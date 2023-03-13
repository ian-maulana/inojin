import { styled } from '@mui/system';
import { AppFontSize, AppFontWeight, AppSize } from '@components/Theme/config';

export const Title = styled('div')(() => ({
  fontSize: AppFontSize.s36,
  fontWeight: AppFontWeight.bold,
  margin: 0,
  marginLeft: AppSize.s14,
  marginBottom: AppSize.s24,
  position: 'relative',

  '&::before': {
    content: '""',
    backgroundImage: `url(https://jthemes.net/themes/html/bolby/demo/images/dots-bg.svg)`,
    display: 'block',
    height: '37px',
    left: `-${AppSize.s14}`,
    top: `-${AppSize.s14}`,
    position: 'absolute',
    width: '37px',
  },
}));
