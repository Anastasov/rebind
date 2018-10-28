import ReBind from "../../config/ReBind";

const styles = {
  progress: {
    flexGrow: 1
  },
  card: {
    color: ReBind.THEME.palette.primary.main,
    backgroundColor: ReBind.THEME.palette.primary.contrastText,
    paddingTop: "70px",
    height: "1000px"
  },
  button: {
    letterSpacing: "0.25px"
  },
  button_alternative: {
    position: "absolute",
    float: "left",
    backgroundColor: "transparent",
    letterSpacing: "0.25px",
    fontSize: "0.8rem",
    lineHeight: "0em",
    fontWeight: 100
  },
  button_alternative_normal: {
    left: "5px"
  },
  button_alternative_full: {
    left: "1vw"
  },
  text: {
    marginTop: "2%"
  }
};

export default styles;
