import { styled } from '@mui/system';
import { Colors } from '@resources/utils/ColorManager';
import { FontFamily, FontSize, FontWeight } from '@resources/utils/FontManager';
import { Sizes } from '@resources/utils/SizesManager';

import { TextareaFieldProps } from './index';

export const Textarea = styled('textarea')((props: TextareaFieldProps) => ({
  padding: props.inputSize === 'lg' ? '16px 24px' : '10px 16px',
  color: Colors.text,
  width: '100%',
  background: Colors.white,
  borderWidth: '1px',
  borderColor: Colors.white,
  borderStyle: 'solid',
  borderBottomWidth: '1px',
  borderRadius: Sizes.s24,
  minHeight: '150px',
  lineHeight: 1.5,
  fontFamily: FontFamily.default,
  fontSize: FontSize.s14,
  fontWeight: FontWeight.regular,
  boxShadow: '0px 5px 20px 0px rgba(69, 67, 96, 0.1)',
  minWidth: '100%',
  maxWidth: '100%',

  '&::placeholder': {
    color: Colors.textSurface,
    fontWeight: FontWeight.regular,
  },

  '&:focus': {
    outline: 'none',
    borderColor: Colors.text,
    borderStyle: 'solid',
    borderWidth: '1px',
  },

  '&:disabled': {
    color: Colors.textDisabled,
    borderColor: Colors.textDisabled,
    backgroundColor: Colors.textSurface,

    '&::placeholder': {
      color: Colors.textSurface,
    },
  },
}));

export const Relative = styled('div')(() => ({
  position: 'relative',
}));

export const Toggle = styled('div')((props: any) => ({
  position: 'absolute',
  right: '13px',
  top: '10px',

  '& svg': {
    '& path': {
      fill: props.disabled ? Colors.textDisabled : Colors.primary,
    },
  },
}));
