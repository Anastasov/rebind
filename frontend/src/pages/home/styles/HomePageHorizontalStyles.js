import ReBind from "../../../config/ReBind";
import defaults from "../../../config/globalStyles";
import backgroundImage from "../../../../assets/patrick_bateman.jpg";

const styles = {
  ...defaults,
  display1: {
    fontSize: 75
  },
  slogan: {
    fontSize: 110
  },
  description: {
    color: ReBind.THEME.palette.secondary.altText,
    fontSize: 22,
    textAlign: "justify",
    paddingLeft: "20%"
  },
  sign_up_button: {
    maxHeight: "85px",
    fontWeight: 500,
    textAlign: "center",
    fontSize: "4vw",
    marginTop: "2vw",
    paddingLeft: 30
  },
  login_button: {
    maxHeight: "85px",
    fontWeight: 500,
    textAlign: "center",
    fontSize: "3vw",
    marginTop: "2vw"
  },
  buttons: {
    marginTop: "15vw",
    textAlign: "right",
    overflow: "hidden"
  },
  icon: {
    fontSize: "6vw"
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
    background: "rgba(0, 0, 0, 0.8)",
    display: "block"
  },
  logo_font: {
    fontFamily: "'Bungee', cursive"
  }
};

export default styles;
