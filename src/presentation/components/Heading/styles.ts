import { styled } from '@mui/system';
import { Colors } from '@resources/utils/ColorManager';
import { FontSize, FontWeight } from '@resources/utils/FontManager';
import { Sizes } from '@resources/utils/SizesManager';

export const Title = styled('div')(() => ({
  fontSize: FontSize.s36,
  fontWeight: FontWeight.bold,
  margin: 0,
  marginLeft: Sizes.s14,
  marginBottom: Sizes.s32,
  position: 'relative',
  color: Colors.textBold,

  '&::before': {
    content: '""',
    backgroundImage: `url(https://jthemes.net/themes/html/bolby/demo/images/dots-bg.svg)`,
    display: 'block',
    height: '37px',
    left: `-${Sizes.s14}`,
    top: `-${Sizes.s14}`,
    position: 'absolute',
    width: '37px',
  },
}));
