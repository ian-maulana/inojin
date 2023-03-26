import { styled } from '@mui/system';
import { Colors } from '@resources/utils/ColorManager';
import { FontSize, FontWeight } from '@resources/utils/FontManager';

export const Container = styled('div')(() => ({
  backgroundColor: '#f9f9ff',
  borderBottom: `solid 1px rgba(0, 0, 0, 0.05)`,
  fontSize: FontSize.s14,
  textAlign: 'center',
  color: Colors.textSurface,
  position: 'fixed',
  width: '100%',
  left: 0,
  top: 0,
  zIndex: 1000,
}));

export const NavbarNav = styled('div')(() => ({
  maxWidth: '1080px',
  justifyContent: 'space-between',
  alignItems: 'center',
  display: 'flex',
  margin: '0 auto',
}));

export const Title = styled('div')(({ theme }) => ({
  fontSize: '16px',
  fontWeight: FontWeight.bold,
  padding: '8px 16px',
  margin: '0.6rem 0',
  color: Colors.textBold,

  [theme.breakpoints.up('sm')]: {
    display: 'block',
    margin: '1rem 0',
  },
}));

export const NavMenu = styled('ul')(({ theme }) => ({
  listStyle: 'none',
  display: 'none',

  '& li': {
    display: 'inline-block',

    '& a': {
      display: 'block',
      padding: '8px 16px',
      fontWeight: FontWeight.bold,
      color: Colors.textBold,

      '&.active': {
        color: Colors.warning,
      },
    },
  },

  [theme.breakpoints.up('md')]: {
    display: 'block',
  },
}));
