import ReactAvatar from 'react-avatar';
import { styled } from '@mui/system';
import { AvatarProps } from './index';
import {
  AppColor,
  AppFontFamily,
  AppFontSize,
  AppFontWeight,
} from '@components/Theme/config';

export const AvatarImage = styled(ReactAvatar)((props: AvatarProps) => ({
  '& span': {
    fontSize: props.fontSize ?? AppFontSize.s16,
    fontWeight: AppFontWeight.medium,
    fontFamily: AppFontFamily.default,
    color: props.fontColor ?? AppColor.white,
  },
}));
