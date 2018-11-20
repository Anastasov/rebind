import defaults from "../../../config/globalStyles";

const styles = {
  ...defaults,
  buttons: { marginTop: "5%", marginLeft: "4vw" },
  button: {
    padding: 0,
    "&:hover": {
      background: "none"
    }
  },
  icon: {
    fontSize: 55
  }
};
export default styles;
