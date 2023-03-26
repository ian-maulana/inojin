import { styled } from '@mui/system';
import { Colors } from '@resources/utils/ColorManager';
import { Sizes } from '@resources/utils/SizesManager';

export const Container = styled('div')(() => ({
  backgroundColor: Colors.white,
  boxShadow: '0px 5px 20px 0px rgba(69, 67, 96, 0.1)',
  padding: Sizes.s24,
  borderRadius: Sizes.s20,
}));
