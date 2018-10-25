import ReBind from "../../config/ReBind";
import defaults from "../../config/globalStyles";
import backgroundImage from "../../../assets/patrick_bateman.jpg";

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
  },
  root: {
    ...defaults.root,
    backgroundImage: `url('${backgroundImage}')`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    position: "relative",
    top: 0,
    bottom: 0,
    height: "100vh",
    zIndex: 100
  },
  root_overlay: {
    ...defaults.root_body,
    position: "absolute",
    top: 0,
    bottom: 0,
    height: "100%",
    width: "100%",
    zIndex: 97,
    background: "rgba(0, 0, 0, 0.7)",
    display: "block"
  }
};

export default styles;
