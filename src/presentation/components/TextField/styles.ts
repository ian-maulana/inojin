import { styled } from '@mui/system';
import {
  AppColor,
  AppSize,
  AppFontFamily,
  AppFontSize,
  AppFontWeight,
} from '@components/Theme/config';
import { TextFieldProps } from './index';

const radiusStyle = (props: TextFieldProps) => {
  if (props.endAndornment && props.startAndornment) {
    return '0 !important';
  } else if (props.endAndornment) {
    return '24px 0 0 24px !important';
  } else {
    return AppSize.s24;
  }
};

export const Input = styled('input')((props: TextFieldProps) => ({
  padding: props.inputSize === 'lg' ? '4px 24px' : '4px 16px',
  color: AppColor.text,
  width: '100%',
  background: AppColor.white,
  borderWidth: '1px',
  borderColor: AppColor.white,
  borderStyle: 'solid',
  borderBottomWidth: '1px',
  borderRadius: radiusStyle(props),
  height: props.inputSize === 'lg' ? '48px' : '41.5px',
  lineHeight: 1.5,
  fontFamily: AppFontFamily.default,
  fontSize: props.inputSize === 'lg' ? AppFontSize.s14 : AppFontSize.s14,
  fontWeight: AppFontWeight.regular,
  paddingRight: props.type === 'password' ? '50px' : '16px',

  '&::placeholder': {
    color: AppColor.textSurface,
    fontWeight: AppFontWeight.regular,
  },

  '&:focus': {
    outline: 'none',
    borderColor: AppColor.text,
    borderStyle: 'solid',
    borderWidth: '1px',
  },

  '&:disabled': {
    color: AppColor.textDisabled,
    borderColor: AppColor.textDisabled,
    backgroundColor: AppColor.textSurface,

    '&::placeholder': {
      color: AppColor.textSurface,
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
      fill: props.disabled ? AppColor.textDisabled : AppColor.text,
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
