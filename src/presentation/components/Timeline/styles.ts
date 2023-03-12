import { styled } from '@mui/system';
import {
  AppColor,
  AppFontSize,
  AppFontWeight,
  AppSize,
} from '@components/Theme/config';

export const Year = styled('div')(() => ({
  fontSize: AppFontSize.s14,
  fontWeight: AppFontWeight.regular,
  color: AppColor.textSecondary,
}));

export const Title = styled('div')(() => ({
  fontSize: AppFontSize.s18,
  fontWeight: AppFontWeight.bold,
  color: AppColor.text,
  marginTop: AppSize.s5,
  marginBottom: AppSize.s5,
}));

export const Description = styled('p')(() => ({
  marginBottom: AppSize.s36,
  color: AppColor.text,
}));

export const List = styled('ul')(() => ({
  listStyleType: 'none',
  color: AppColor.primary,
  padding: '10px 0 10px 24px',

  '& li': {
    position: 'relative',

    '&::before': {
      content: '""',
      position: 'absolute',
      width: '8px',
      height: '8px',
      left: '-24px',
      top: '6px',
      backgroundColor: AppColor.primary,
    },
  },
}));
