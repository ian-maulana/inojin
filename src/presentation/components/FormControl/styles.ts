import { styled } from '@mui/system';
import { AppColor, AppSize, AppFontSize } from '@components/Theme/config';

export const Error = styled('div')((props: any) => {
  return {
    margin: props.margin,
    color: AppColor.critical,
    fontSize: AppFontSize.s12,
    marginTop: AppSize.s5,
  };
});
