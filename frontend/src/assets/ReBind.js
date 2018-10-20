const THEME = {
  palette: {
    primary: {
      light: '#484848',
      main: '#212121',
      dark: '#000000',
      contrastText: '#f9e8e0',
    },
    secondary: {
      light: '#ffffff',
      main: '#f9e8e0',
      dark: '#c6b6ae',
      contrastText: '#212121',
    },
  },
  typography: {
    useNextVariants: true,
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    fontWeightMedium: 500,
    body1: {
      fontWeight: 500,
    },
    subtitle1: {
      fontSize: 12,
    },
    button: {
      fontStyle: 'italic',
    },
  }
};
const ReBind = {
  PRESENTABLE_NAME: 'ReBind',
  THEME
};
export default ReBind;
