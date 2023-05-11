import { styled } from '@mui/system';
import { Colors } from '@resources/utils/ColorManager';
import { FontWeight, FontSize } from '@resources/utils/FontManager';
import { Sizes } from '@resources/utils/SizesManager';

export const Container = styled('div')(() => ({
  padding: '8px 0',
}));

export const Title = styled('div')(() => ({
  fontWeight: FontWeight.semiBold,
  fontSize: FontSize.s14,
  marginBottom: Sizes.s5,
  color: Colors.textBold,
}));

export const Progress = styled('div')(() => ({
  fontWeight: FontWeight.regular,
  fontSize: FontSize.s14,
  marginBottom: Sizes.s5,
}));

export const Group = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}));

interface BarProps {
  color: 'primary' | 'secondary' | 'warning';
  width: string;
}

export const Bar = styled('div')((props: BarProps) => ({
  height: Sizes.s8,
  width: '100%',
  borderRadius: '20px',
  backgroundColor: '#F1F1F1',
  position: 'relative',

  '&::after': {
    content: '""',
    position: 'absolute',
    width: props.width ?? 0,
    height: Sizes.s8,
    backgroundColor: Colors[props.color],
    zIndex: '1',
    borderRadius: '20px',
  },
}));
