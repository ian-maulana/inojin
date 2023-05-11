import { styled } from '@mui/system';
import { Colors } from '@resources/utils/ColorManager';
import { FontFamily, FontSize, FontWeight } from '@resources/utils/FontManager';
import { Sizes } from '@resources/utils/SizesManager';

import { TextFieldProps } from './index';

const radiusStyle = (props: TextFieldProps) => {
  if (props.endAndornment && props.startAndornment) {
    return '0 !important';
  } else if (props.endAndornment) {
    return '24px 0 0 24px !important';
  } else {
    return Sizes.s24;
  }
};

export const Input = styled('input')((props: TextFieldProps) => ({
  padding: props.inputSize === 'lg' ? '4px 24px' : '4px 16px',
  color: Colors.text,
  width: '100%',
  background: Colors.white,
  borderWidth: '1px',
  borderColor: Colors.white,
  borderStyle: 'solid',
  borderBottomWidth: '1px',
  borderRadius: radiusStyle(props),
  height: props.inputSize === 'lg' ? '48px' : '41.5px',
  lineHeight: 1.5,
  fontFamily: FontFamily.default,
  fontSize: props.inputSize === 'lg' ? FontSize.s14 : FontSize.s14,
  fontWeight: FontWeight.regular,
  paddingRight: props.type === 'password' ? '50px' : '16px',

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
  width: '100%',
}));

export const Toggle = styled('button')((props) => ({
  position: 'absolute',
  background: 'transparent',
  border: 'none',

  '&.toggle': {
    '&.md': {
      top: '10px',
      right: '10px',
    },

    '&.lg': {
      top: '16px',
      right: '13px',
    },
  },

  '& svg': {
    '& path': {
      fill: props.disabled ? Colors.textDisabled : Colors.text,
    },
  },
}));

export const StartAndornment = styled('div')((props: TextFieldProps) => ({
  display: 'flex',
  height: props.inputSize === 'lg' ? '55px' : '41.5px',

  '& + .relative': {
    '& input': {
      borderRadius: '0 10px 10px 0',
    },
  },
}));

export const EndAndornment = styled('div')(() => ({
  display: 'flex',
  height: '41.5px',
}));

export const Container = styled('div')((props: TextFieldProps) => ({
  display: 'flex',
  alignItems: 'center',
  overflow: 'hidden',
  height: props.inputSize === 'lg' ? '48px' : '41.5px',
  borderRadius: radiusStyle(props),
  boxShadow: '0px 5px 20px 0px rgba(69, 67, 96, 0.1)',
}));
