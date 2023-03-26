import { styled } from '@mui/system';
import { Colors } from '@resources/utils/ColorManager';
import { FontSize } from '@resources/utils/FontManager';

export const Body = styled('div')(() => ({
  position: 'relative',
  padding: '10px 0 0',
}));

export const AutoScroll = styled('div')(() => ({
  position: 'relative',
  maxHeight: '450px',
  minHeight: '450px',
  overflowY: 'auto',
  overflowX: 'hidden',
}));

export const Category = styled('div')(() => ({
  backgroundColor: Colors.primary,
  color: Colors.white,
  fontSize: FontSize.s12,
  padding: '7px 16px',
  borderRadius: '0 0 12px 12px',
  position: 'absolute',
  top: '-24px',
  left: '5px',
}));
