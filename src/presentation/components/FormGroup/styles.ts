import { styled } from '@mui/system';
import { Colors } from '@resources/utils/ColorManager';
import { FontWeight, FontSize } from '@resources/utils/FontManager';
import { Sizes } from '@resources/utils/SizesManager';

import { FormGroupProps } from './index';

export const Container = styled('div')((props: FormGroupProps) => ({
  marginBottom: props.size === 'lg' ? Sizes.s24 : Sizes.s16,
}));

export const Label = styled('label')({
  fontWeight: FontWeight.semiBold,
  fontSize: FontSize.s12,
  marginBottom: Sizes.s5,
  display: 'block',
  color: Colors.text,
  textTransform: 'capitalize',
});
