import ReactAvatar from 'react-avatar';
import { styled } from '@mui/system';
import {
  AppColor,
  AppFontFamily,
  AppFontSize,
  AppFontWeight,
} from '@components/Theme/config';

interface Theme {
  fontSize: string | undefined;
  fontColor: string | undefined;
}

export const AvatarImage = styled(ReactAvatar)((props: Theme) => ({
  '& span': {
    fontSize: props.fontSize ?? AppFontSize.s16,
    fontWeight: AppFontWeight.medium,
    fontFamily: AppFontFamily.default,
    color: props.fontColor ?? AppColor.white,
  },
}));
