import defaults from "../../../config/globalStyles";
import ReBind from "../../../config/ReBind";

const styles = {
  ...defaults,
  progress: { color: "#eeeeee" },
  icon: { color: "#43a047", fontSize: 20 },
  icon_warning: {
    fontSize: 62,
    color: "#f44336"
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
