import { createTheme, css } from '@mui/system';
import { Colors } from '@resources/utils/ColorManager';
import { FontSize, FontFamily, FontWeight } from '@resources/utils/FontManager';
import { Radius, Sizes } from '@resources/utils/SizesManager';

export const theme = createTheme({
  palette: {
    primary: {
      main: Colors.success,
    },
    critical: {
      main: Colors.critical,
    },
    text: {
      primary: Colors.text,
      secondary: Colors.textSecondary,
      disabled: Colors.textDisabled,
    },
    white: {
      primary: Colors.white,
    },
  },
  typography: {
    htmlFontSize: FontSize.s16,
    fontSize: FontSize.s14,
    fontFamily: FontFamily.default,
    fontSizeSmall: FontSize.s12,
  },
  shape: {
    borderRadius: Radius.s8,
  },
  components: {
    badge: {
      styleOverrides: {
        root: {
          borderRadius: Sizes.s24,
        },
        success: {
          color: Colors.text,
          backgroundColor: Colors.successSurface,
        },
        info: {
          color: Colors.text,
          backgroundColor: Colors.infoSurface,
        },
        critical: {
          color: Colors.text,
          backgroundColor: Colors.criticalSurface,
        },
        warning: {
          color: Colors.text,
          backgroundColor: Colors.warningSurface,
        },
        secondary: {
          color: Colors.text,
          backgroundColor: Colors.secondarySurface,
        },
      },
    },
  },
});

export const config = css`
  @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700&display=swap');

  html {
    scroll-padding-top: 120px; /* height of your navbar */
  }

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: 'Rubik', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
      Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
      sans-serif;
    font-weight: ${FontWeight.regular};
    font-size: 1rem;
    background-color: #f9f9ff;
    line-height: 1.5;
    color: ${Colors.text};
    z-index: -1;
    position: relative;
  }

  a {
    color: inherit;
    text-decoration: none;
    font-size: ${FontSize.s14};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${Colors.textBold};
    font-family: ${FontFamily.default};
    margin-top: 0;
    margin-bottom: 10px;
  }

  p {
    font-size: ${FontSize.s16};
    margin: 0 0 10px;
  }

  ul,
  li {
    font-size: ${FontSize.s14};
  }

  * {
    box-sizing: border-box;
  }
`;
