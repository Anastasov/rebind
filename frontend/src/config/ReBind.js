const LIGHT_GREY = "#484848";
const GREY = "#212121";
const DARK_GREY = "#000000";
const LIGHT_YELLOW = "#ffff6b";
const YELLOW = "#fcd734";
const DARK_YELLOW = "#c5a600";

const THEME = {
  palette: {
    type: "dark",
    secondary: {
      light: LIGHT_GREY,
      main: GREY,
      dark: DARK_GREY,
      contrastText: YELLOW
    },
    primary: {
      light: LIGHT_YELLOW,
      main: YELLOW,
      dark: DARK_YELLOW,
      contrastText: GREY
    }
  },
  typography: {
    useNextVariants: true,
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(","),
    fontWeightMedium: 500,
    body1: {
      fontWeight: 500
    },
    subtitle1: {
      fontSize: 12
    },
    button: {
      fontStyle: "italic"
    }
  }
};
const ReBind = {
  PRESENTABLE_NAME: "ReBind",
  THEME,
  ENV: process.env.NODE_ENV,
  IS_ENV_DEV: process.env.NODE_ENV === "development",
  IS_ENV_PROD: process.env.NODE_ENV === "production"
};
export default ReBind;
