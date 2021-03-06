import defaults from "../../../config/globalStyles";
import ReBind from "../../../config/ReBind";

const styles = {
  ...defaults,
  button: {
    padding: 0,
    "&:hover": {
      background: "none"
    }
  },
  delete_button: {
    padding: 0
  },
  delete_icon: {
    fontSize: 15
  },
  tooltip: {
    background: ReBind.THEME.palette.secondary.dark
  },
  arrowPopper: {
    '&[x-placement*="bottom"] $arrow': {
      top: 0,
      left: "0.7em",
      marginTop: "-0.9em",
      width: "3em",
      height: "1em",
      "&::before": {
        borderWidth: "0 1em 1em 1em",
        borderColor: `transparent transparent ${
          ReBind.THEME.palette.secondary.dark
        } transparent`
      }
    },
    '&[x-placement*="top"] $arrow': {
      bottom: 0,
      left: "0.7em",
      marginBottom: "-0.9em",
      width: "3em",
      height: "1em",
      "&::before": {
        borderWidth: "1em 1em 0 1em",
        borderColor: `${
          ReBind.THEME.palette.secondary.dark
        } transparent transparent transparent`
      }
    },
    '&[x-placement*="right"] $arrow': {
      left: 0,
      marginLeft: "-0.9em",
      height: "3em",
      width: "1em",
      "&::before": {
        borderWidth: "1em 1em 1em 0",
        borderColor: `transparent ${
          ReBind.THEME.palette.secondary.dark
        } transparent transparent`
      }
    },
    '&[x-placement*="left"] $arrow': {
      right: 0,
      marginRight: "-0.9em",
      height: "3em",
      width: "1em",
      "&::before": {
        borderWidth: "1em 0 1em 1em",
        borderColor: `transparent transparent transparent ${
          ReBind.THEME.palette.secondary.dark
        }`
      }
    }
  },
  arrow: {
    position: "absolute",
    fontSize: 7,
    width: "3em",
    height: "3em",
    "&::before": {
      content: '""',
      margin: "auto",
      display: "block",
      width: 0,
      height: 0,
      borderStyle: "solid"
    }
  }
};
export default styles;
