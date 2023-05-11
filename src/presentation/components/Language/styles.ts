import { styled } from '@mui/system';
import { Colors } from '@resources/utils/ColorManager';
import { FontSize, FontWeight } from '@resources/utils/FontManager';

export const Container = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const Tabs = styled('div')(() => ({
  display: 'flex',
  position: 'relative',
  backgroundColor: Colors.secondary,
  border: `1px solid ${Colors.secondary}`,
  padding: '1px',
  borderRadius: '99px',
}));

interface TabProps {
  current: string;
  value: string;
  selectedIndex: number;
  minWidth: string;
  maxWidth: string;
}

export const Tab = styled('label')(
  ({ current, value, selectedIndex, minWidth, maxWidth }: TabProps) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: current === value ? Colors.text : Colors.white,
    height: '24px',
    width: minWidth,
    fontSize: FontSize.s12,
    fontWeight: FontWeight.bold,
    borderRadius: '99px',
    cursor: 'pointer',
    transition: 'color 0.15s ease-in',
    zIndex: 2,

    '@media(min-width: 768px)': {
      width: maxWidth,
    },

    '& ~ .glider': {
      transform: `translateX(${selectedIndex * 100}% ) !important`,
    },
  }),
);

interface SliderProps {
  minWidth: string;
  maxWidth: string;
  color: string;
}

export const Slider = styled('span')(
  ({ minWidth, maxWidth, color }: SliderProps) => ({
    position: 'absolute',
    display: 'flex',
    height: '24px',
    width: minWidth,
    backgroundColor: color,
    zIndex: 1,
    borderRadius: '99px',
    transition: '0.25s ease-out',

    '@media(min-width: 768px)': {
      width: maxWidth,
    },
  }),
);
