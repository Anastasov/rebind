import defaults from "../../../config/globalStyles";

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
    "min-height": "100%",
    backgroundSize: "100% 100%"
  },
  content: {
    flex: "1 1 auto",
    marginTop: "3%",
    marginBot: "5%"
  },
  progress: { color: "#eeeeee" },
  progressText: { color: "#eeeeee", marginTop: "40%" },
  progressContainer: {
    width: "50%",
    height: "50%",
    position: "relative"
  }
};
export default styles;
