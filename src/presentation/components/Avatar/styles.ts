import ReactAvatar from 'react-avatar';
import { styled } from '@mui/system';
import { Colors } from '@resources/utils/ColorManager';
import { FontSize, FontWeight, FontFamily } from '@resources/utils/FontManager';

import { AvatarProps } from './index';

export const AvatarImage = styled(ReactAvatar)((props: AvatarProps) => ({
  '& span': {
    fontSize: props.fontSize ?? FontSize.s16,
    fontWeight: FontWeight.medium,
    fontFamily: FontFamily.default,
    color: props.fontColor ?? Colors.white,
  },
}));
