import { styled } from '@mui/system';
import {
  AppColor,
  AppSize,
  AppFontFamily,
  AppFontSize,
  AppFontWeight,
} from '@components/Theme/config';

import { TextareaFieldProps } from './index';

export const Textarea = styled('textarea')((props: TextareaFieldProps) => ({
  padding: props.inputSize === 'lg' ? '16px 24px' : '10px 16px',
  color: AppColor.text,
  width: '100%',
  background: AppColor.white,
  borderWidth: '1px',
  borderColor: AppColor.white,
  borderStyle: 'solid',
  borderBottomWidth: '1px',
  borderRadius: AppSize.s24,
  minHeight: '150px',
  lineHeight: 1.5,
  fontFamily: AppFontFamily.default,
  fontSize: AppFontSize.s14,
  fontWeight: AppFontWeight.regular,
  boxShadow: '0px 5px 20px 0px rgba(69, 67, 96, 0.1)',

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
}));

export const Toggle = styled('div')((props: any) => ({
  position: 'absolute',
  right: '13px',
  top: '10px',

  '& svg': {
    '& path': {
      fill: props.disabled ? AppColor.textDisabled : AppColor.primary,
    },
  },
}));
