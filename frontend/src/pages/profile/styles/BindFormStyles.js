import defaults from "../../../config/globalStyles";
import ReBind from "../../../config/ReBind";

const styles = {
  ...defaults,
  icon_warning: {
    fontSize: 62,
    color: ReBind.THEME.palette.error.main
  },
  error_message: {
    flexBasis: "33.33%",
    borderLeft: `2px solid ${ReBind.THEME.palette.error.main}`,
    marginLeft: "20%",
    marginRight: "20%",
    marginBottom: "3%",
    padding: `8px 16px`
  }
};
export default styles;
