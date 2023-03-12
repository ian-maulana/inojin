import {
  AppColor,
  AppFontSize,
  AppFontWeight,
  AppSize,
} from '@components/Theme/config';
import { styled } from '@mui/system';

export const Container = styled('div')(() => ({
  marginBottom: AppSize.s20,
}));

export const Title = styled('div')(() => ({
  fontWeight: AppFontWeight.semiBold,
  fontSize: AppFontSize.s14,
  marginBottom: AppSize.s5,
}));

export const Progress = styled('div')(() => ({
  fontWeight: AppFontWeight.regular,
  fontSize: AppFontSize.s14,
  marginBottom: AppSize.s5,
}));

export const Group = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}));

interface BarProps {
  color: 'primary' | 'secondary' | 'warning';
  width: string;
}

export const Bar = styled('div')((props: BarProps) => ({
  height: AppSize.s8,
  width: '100%',
  borderRadius: '20px',
  backgroundColor: '#F1F1F1',
  position: 'relative',

  '&::after': {
    content: '""',
    position: 'absolute',
    width: props.width ?? 0,
    height: AppSize.s8,
    backgroundColor: AppColor[props.color],
    zIndex: '1',
    borderRadius: '20px',
  },
}));
