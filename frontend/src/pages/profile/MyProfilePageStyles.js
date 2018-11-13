import defaults from "../../config/globalStyles";

const styles = {
  ...defaults,
  card: {
    display: "flex",
    marginTop: "2%",
    marginLeft: "13%",
    marginRight: "13%"
  },
  cover: {
    width: "1200px",
    "max-width": "420px",
    height: "500px",
    "max-height": "500px",
    backgroundSize: "100% 100%"
  },
  content: {
    flex: "1 1 auto"
  }
};
export default styles;
