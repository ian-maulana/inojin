import { styled, spacing } from '@mui/system';
import { Colors } from '@resources/utils/ColorManager';

export const Container = styled('div')((props: any) => {
  return {
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: '#d0d3e8',
    borderRadius: '50%',
    borderTopStyle: 'solid',
    borderTopWidth: '2px',
    borderTopColor: Colors.info,
    width: '16px',
    height: '16px',
    WebkitAnimation: 'spin 2s linear infinite',
    animation: 'spin 2s linear infinite',
    marginLeft: props.marginLeft ?? 0,
    marginRight: props.marginRight ?? 0,
    spacing,

    '@keyframes spin': {
      '0%': { transform: 'rotate(0deg)' },
      '100%': { transform: 'rotate(360deg)' },
    },
  };
});
