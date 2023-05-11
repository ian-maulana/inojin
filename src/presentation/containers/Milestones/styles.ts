import { styled } from '@mui/system';
import { Colors } from '@resources/utils/ColorManager';
import { FontSize, FontWeight } from '@resources/utils/FontManager';

export const Container = styled('div')(() => ({
  padding: '0px 0 60px',
}));

export const Img = styled('img')(() => ({
  filter: 'opacity(0.5) grayscale(1)',
}));

export const Group = styled('div')(() => ({
  marginLeft: '10px',
  whiteSpace: 'nowrap',
}));

export const Total = styled('div')(() => ({
  margin: 0,
  fontWeight: FontWeight.bold,
  fontSize: FontSize.s32,
  color: Colors.textBold,
  whiteSpace: 'nowrap',
}));

export const Unit = styled('small')(() => ({
  fontSize: FontSize.s14,
}));

export const Description = styled('div')(() => ({
  whiteSpace: 'nowrap',
  fontSize: '14px',
  marginTop: '-5px',
  color: Colors.textSurface,
  textOverflow: 'ellipsis',
  overflow: 'hidden',
}));
