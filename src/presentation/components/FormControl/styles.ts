import { styled } from '@mui/system';
import { Colors } from '@resources/utils/ColorManager';
import { FontSize } from '@resources/utils/FontManager';
import { Sizes } from '@resources/utils/SizesManager';

export const Error = styled('div')((props: any) => {
  return {
    margin: props.margin,
    color: Colors.critical,
    fontSize: FontSize.s12,
    marginTop: Sizes.s5,
  };
});
