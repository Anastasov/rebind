import Arrow from "../../../../assets/arrow.png";
import horizontal from "./BindIconHorizontalStyles";

const styles = {
  ...horizontal,
  arrow: {
    width: 10,
    height: 10,
    marginTop: "10%",
    marginLeft: "40%",
    backgroundImage: `url(${Arrow})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    position: "relative"
  },
  tooltip: {
    ...horizontal.tooltip,
    height: 30,
    width: 30,
    borderRadius: "10%",
    marginLeft: "22%",
    padding: 3
  },
  delete_icon: {
    ...horizontal.delete_icon,
    fontSize: 22
  }
};
export default styles;
