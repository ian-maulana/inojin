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
}

export const Button = styled('button')((props: Props) => {
  return {
    display: 'inline-flex',
    alignItems: 'center',
    fontFamily: AppFontFamily.default,
    fontWeight: AppFontWeight.bold,
    lineHeight: 1,
    color: AppColor.white,
    justifyContent: 'center',
    textDecoration: 'none',
    verticalAlign: 'middle',
    cursor: 'pointer',
    userSelect: 'none',
    borderWidth: '1px',
    borderStyle: 'solid',
    backgroundColor: AppColor.primary,
    borderColor: AppColor.primary,
    paddingTop: AppSize.s12,
    paddingBottom: AppSize.s12,
    paddingLeft: AppSize.s32,
    paddingRight: AppSize.s32,
    fontSize: AppFontSize.s16,
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
