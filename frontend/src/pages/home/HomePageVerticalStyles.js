import horizontalStyles from "./HomePageHorizontalStyles";

const styles = {
  ...horizontalStyles,
  description: {
    ...horizontalStyles.description,
    paddingLeft: "0%"
  },
  sign_up_button: {
    ...horizontalStyles.sign_up_button,
    fontSize: "7vw",
    paddingLeft: 24
  },
  login_button: {
    ...horizontalStyles.login_button,
    fontSize: "7vw"
  },
  icon: {
    fontSize: "9vw"
  },
  buttons: {
    // This class has to be purpousfully overriden not to have any styles
  }
};
export default styles;
