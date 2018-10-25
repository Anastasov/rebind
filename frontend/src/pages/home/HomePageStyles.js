import ReBind from "../../config/ReBind";
import defaults from "../../config/globalStyles";

const styles = {
  ...defaults,
  display1: {
    fontSize: 75
  },
  display2: {
    fontSize: 16
  },
  button: {
    marginTop: "5%",
    fontSize: 30,
    height: 60,
    width: 250,
    fontFamily: '"Google Sans",arial,sans-serif',
    fontStyle: "normal",
    letterSpacing: "0.25px"
  },
  icon: {
    fontSize: 45,
    margin: "15px"
  },
  card: {
    color: ReBind.THEME.palette.primary.contrastText,
    backgroundColor: ReBind.THEME.palette.primary.main,
    marginLeft: 100
  },
  media: {
    height: 140
  }
};

export default styles;
