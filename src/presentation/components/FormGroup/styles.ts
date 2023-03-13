import { styled } from '@mui/system';
import {
  AppColor,
  AppSize,
  AppFontWeight,
  AppFontSize,
} from '@components/Theme/config';

import { FormGroupProps } from './index';

export const Container = styled('div')((props: FormGroupProps) => ({
  marginBottom: props.size === 'lg' ? AppSize.s24 : AppSize.s16,
}));

export const Label = styled('label')({
  fontWeight: AppFontWeight.semiBold,
  fontSize: AppFontSize.s12,
  marginBottom: AppSize.s5,
  display: 'block',
  color: AppColor.text,
  textTransform: 'capitalize',
});
