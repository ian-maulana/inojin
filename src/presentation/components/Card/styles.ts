import { styled } from '@mui/system';
import { AppColor, AppSize } from '@components/Theme/config';

export const Container = styled('div')(() => ({
  backgroundColor: AppColor.white,
  boxShadow: '0px 5px 20px 0px rgba(69, 67, 96, 0.1)',
  padding: AppSize.s24,
  borderRadius: AppSize.s20,
}));
