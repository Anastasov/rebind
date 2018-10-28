const LIGHT_GREY = "#E0E0E0";
const GREY = "#484848";
const BLACK = "#212121";
const DARK_GREY = "#000000";
const LIGHT_YELLOW = "#ffff6b";
const YELLOW = "#fcd734";
const DARK_YELLOW = "#c5a600";

const THEME = {
  palette: {
    type: "dark",
    primary: {
      light: LIGHT_YELLOW,
      main: YELLOW,
      dark: DARK_YELLOW,
      contrastText: BLACK
    },
    secondary: {
      light: GREY,
      main: BLACK,
      dark: DARK_GREY,
      contrastText: YELLOW,
      altText: LIGHT_GREY
    }
  },
  typography: {
    useNextVariants: true,
    // Use the system font instead of the default Roboto font.
    fontFamily: "'Montserrat', sans-serif",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    // fontSize: 21,
    body1: {
      fontWeight: 500
    },
    subtitle1: {
      fontSize: 48
    },
    button: {
      // fontStyle: "italic"
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
