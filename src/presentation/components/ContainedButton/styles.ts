import { Theme, styled } from '@mui/system';
import {
  AppColor,
  AppFontFamily,
  AppFontSize,
  AppFontWeight,
  AppSize,
} from '@components/Theme/config';

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
    fontFamily: AppFontFamily.default,
    lineHeight: 1,
    color: AppColor.white,
    justifyContent: 'center',
    textDecoration: 'none',
    verticalAlign: 'middle',
    cursor: 'pointer',
    userSelect: 'none',
    borderWidth: '1px',
    borderStyle: 'solid',
    backgroundColor: AppColor[props.color],
    borderColor: AppColor[props.color],
    paddingTop: props.size === 'sm' ? AppSize.s8 : AppSize.s12,
    paddingBottom: props.size === 'sm' ? AppSize.s8 : AppSize.s12,
    paddingLeft: props.size === 'sm' ? AppSize.s18 : AppSize.s32,
    paddingRight: props.size === 'sm' ? AppSize.s18 : AppSize.s32,
    fontSize: props.size === 'sm' ? AppFontSize.s12 : AppFontSize.s16,
    fontWeight:
      props.size === 'sm' ? AppFontWeight.semiBold : AppFontWeight.bold,
    borderRadius: AppSize.s32,
    transition: `color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out`,
    width: props.fullWidth ? '100%' : 'auto',

    '&:hover': {
      // backgroundColor: shadeColor(hoverBgColor, -10),
      // borderColor: shadeColor(hoverBorderColor, -10),
    },

    '&:disabled': {
      color: AppColor.text,
      borderColor: AppColor.text,
      backgroundColor: AppColor.text,
    },
  };
});
