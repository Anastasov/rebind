import defaults from "../../../config/globalStyles";

const styles = {
  ...defaults,
  buttons: { marginLeft: "4vw" },
  button: {
    padding: 0,
    "&:hover": {
      background: "none"
    }
  },
  icon: {
    fontSize: 60
  }
};
export default styles;
