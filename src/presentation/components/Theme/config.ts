import { createTheme, css } from '@mui/system';

export class AppSize {
  static s0 = '0px';
  static s5 = '5px';
  static s8 = '8px';
  static s10 = '10px';
  static s12 = '12px';
  static s14 = '14px';
  static s16 = '16px';
  static s18 = '18px';
  static s20 = '20px';
  static s24 = '24px';
  static s32 = '32px';
  static s36 = '36px';
  static s48 = '48px';
  static s60 = '60px';
  static s80 = '80px';
  static s100 = '100px';
  static s120 = '120px';
  static s150 = '150px';
  static s180 = '180px';
  static s240 = '240px';
  static s260 = '260px';
}

export class AppFontFamily {
  static default = '"Rubik", sans-serif';
}

export class AppRadius {
  static s0 = 0;
  static s5 = 5;
  static s8 = 8;
  static s10 = 10;
  static s16 = 16;
  static s24 = 24;
}

export class AppFontWeight {
  static light = 300;
  static regular = 400;
  static medium = 500;
  static semiBold = 600;
  static bold = 700;
}

export class AppFontSize {
  static s8 = '8px';
  static s9 = '9px';
  static s10 = '10px';
  static s12 = '12px';
  static s14 = '14px';
  static s16 = '16px';
  static s18 = '18px';
  static s24 = '24px';
  static s28 = '28px';
  static s32 = '32px';
  static s36 = '36px';
  static s48 = '48px';
}

export class AppColor {
  static white = '#fff';
  static primary = '#FF4C60';
  static success = 'rgba(0, 123, 92, 1)';
  static successSurface = '#aee9d1';
  static critical = 'rgba(215, 44, 13, 1)';
  static criticalSurface = '#fed3d1';
  static info = 'rgba(215, 44, 13, 1)';
  static infoSurface = '#a4e8f2';
  static warning = 'rgba(215, 44, 13, 1)';
  static warningSurface = '#ffea8a';
  static secondary = 'rgba(215, 44, 13, 1)';
  static secondarySurface = '#e4e5e7';
  static text = '#5E5C7F';
  static textSecondary = '#e3e5e7';
  static textDisabled = '#8c9196';
}

export class AppScreen {
  static maxWidth: string = '1320px';
  static minWidth: string = '280px';
  static xs: string = '576px';
  static sm: string = '768px';
  static md: string = '992px';
  static lg: string = '1200px';
  static xl: string = '1400px';
}

export const theme = createTheme({
  palette: {
    primary: {
      main: AppColor.success,
    },
    critical: {
      main: AppColor.critical,
    },
    text: {
      primary: AppColor.text,
      secondary: AppColor.textSecondary,
      disabled: AppColor.textDisabled,
    },
    white: {
      primary: AppColor.white,
    },
  },
  typography: {
    htmlFontSize: AppFontSize.s16,
    fontSize: AppFontSize.s14,
    fontFamily: AppFontFamily.default,
    fontSizeSmall: AppFontSize.s12,
  },
  shape: {
    borderRadius: AppRadius.s8,
  },
  components: {
    badge: {
      styleOverrides: {
        root: {
          borderRadius: AppSize.s24,
        },
        success: {
          color: AppColor.text,
          backgroundColor: AppColor.successSurface,
        },
        info: {
          color: AppColor.text,
          backgroundColor: AppColor.infoSurface,
        },
        critical: {
          color: AppColor.text,
          backgroundColor: AppColor.criticalSurface,
        },
        warning: {
          color: AppColor.text,
          backgroundColor: AppColor.warningSurface,
        },
        secondary: {
          color: AppColor.text,
          backgroundColor: AppColor.secondarySurface,
        },
      },
    },
  },
});

export const config = css`
  @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700&display=swap');

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: 'Rubik', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
      Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
      sans-serif;
    font-weight: ${AppFontWeight.regular};
    font-size: 1rem;
    background-color: #f9f9ff;
    line-height: 1.5;
    color: ${AppColor.text};
  }

  a {
    color: inherit;
    text-decoration: none;
    font-size: ${AppFontSize.s14};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #454360;
    font-family: ${AppFontFamily.default};
    margin-top: 0;
    margin-bottom: 10px;
  }

  p {
    font-size: ${AppFontSize.s16};
    margin: 0 0 10px;
  }

  ul,
  li {
    font-size: ${AppFontSize.s14};
  }

  * {
    box-sizing: border-box;
  }
`;
