import { styled } from '@mui/system';
import { Colors } from '@resources/utils/ColorManager';
import { FontSize } from '@resources/utils/FontManager';
// import { Color, Size } from '@components/Theme/config';

export const Container = styled('div')(() => ({
  marginTop: '100px',
  padding: '36px 0',
  borderTop: `solid 1px rgba(0, 0, 0, 0.05)`,
  fontSize: FontSize.s14,
  textAlign: 'center',
  color: Colors.textSurface,
  // backgroundColor: Color.white,
  // boxShadow: '0px 5px 20px 0px rgba(69, 67, 96, 0.1)',
  // padding: Size.s24,
  // borderRadius: Size.s20,
}));
