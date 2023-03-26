import { Theme, styled } from '@mui/system';
import { Colors } from '@resources/utils/ColorManager';
import { FontFamily, FontSize, FontWeight } from '@resources/utils/FontManager';
import { Sizes } from '@resources/utils/SizesManager';

interface Props {
  theme?: Theme;
  fullWidth: boolean;
  size: 'md' | 'sm';
  color: 'primary' | 'secondary';
}

export const Button = styled('button')((props: Props) => {
  return {
    display: 'inline-flex',
    alignItems: 'center',
    fontFamily: FontFamily.default,
    lineHeight: 1,
    color: Colors.white,
    justifyContent: 'center',
    textDecoration: 'none',
    verticalAlign: 'middle',
    cursor: 'pointer',
    userSelect: 'none',
    borderWidth: '1px',
    borderStyle: 'solid',
    backgroundColor: Colors[props.color],
    borderColor: Colors[props.color],
    paddingTop: props.size === 'sm' ? Sizes.s8 : Sizes.s12,
    paddingBottom: props.size === 'sm' ? Sizes.s8 : Sizes.s12,
    paddingLeft: props.size === 'sm' ? Sizes.s18 : Sizes.s32,
    paddingRight: props.size === 'sm' ? Sizes.s18 : Sizes.s32,
    fontSize: props.size === 'sm' ? FontSize.s12 : FontSize.s16,
    fontWeight: props.size === 'sm' ? FontWeight.semiBold : FontWeight.bold,
    borderRadius: Sizes.s32,
    transition: `color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out`,
    width: props.fullWidth ? '100%' : 'auto',

    '&:hover': {
      // backgroundColor: shadeColor(hoverBgColor, -10),
      // borderColor: shadeColor(hoverBorderColor, -10),
    },

    '&:disabled': {
      color: Colors.text,
      borderColor: Colors.text,
      backgroundColor: Colors.text,
    },
  };
});
