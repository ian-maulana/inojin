import { styled } from '@mui/system';
import {
  AppColor,
  AppFontSize,
  AppFontWeight,
  AppSize,
} from '@components/Theme/config';

export const Container = styled('div')(() => ({
  backgroundColor: AppColor.white,
  boxShadow: '0px 5px 20px 0px rgba(69, 67, 96, 0.1)',
  padding: AppSize.s24,
  borderRadius: AppSize.s20,
  position: 'relative',
}));

export const Category = styled('div')(() => ({
  backgroundColor: AppColor.primary,
  color: AppColor.white,
  fontSize: AppFontSize.s12,
  padding: '7px 16px',
  borderRadius: '0 0 12px 12px',
  position: 'absolute',
  top: 0,
  left: '24px',
}));

export const Group = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px 0',
  position: 'relative',
  top: '10px',
}));

export const Image = styled('img')(() => ({
  height: 'auto',
  width: '100%',
}));

export const Title = styled('div')(() => ({
  fontWeight: AppFontWeight.bold,
  fontSize: AppFontSize.s16,
}));
