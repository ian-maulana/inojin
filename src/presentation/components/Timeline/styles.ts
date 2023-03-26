import { styled } from '@mui/system';
import { Colors } from '@resources/utils/ColorManager';
import { FontSize, FontWeight } from '@resources/utils/FontManager';
import { Sizes } from '@resources/utils/SizesManager';

export const Year = styled('div')(() => ({
  fontSize: FontSize.s14,
  fontWeight: FontWeight.regular,
  color: Colors.textSecondary,
}));

export const Title = styled('div')(() => ({
  fontSize: FontSize.s18,
  fontWeight: FontWeight.bold,
  color: Colors.textBold,
  marginTop: Sizes.s5,
  marginBottom: Sizes.s5,
}));

export const Description = styled('p')(() => ({
  marginBottom: Sizes.s36,
  color: Colors.text,
}));

export const List = styled('ul')(() => ({
  listStyleType: 'none',
  color: Colors.primary,
  padding: '10px 0 0 24px',

  '& li': {
    position: 'relative',

    '&::before': {
      content: '""',
      position: 'absolute',
      width: '8px',
      height: '8px',
      left: '-24px',
      top: '6px',
      backgroundColor: Colors.primary,
    },
  },
}));
