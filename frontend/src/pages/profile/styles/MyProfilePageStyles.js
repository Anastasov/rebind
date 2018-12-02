import defaults from "../../../config/globalStyles";

const styles = {
  ...defaults,
  card: {
    display: "flex",
    marginTop: "2%",
    marginLeft: "13%",
    marginRight: "13%",
    minHeight: 425
  },
  cover: {
    width: 1200,
    maxWidth: 420,
    minHeight: "100%",
    backgroundSize: "100% 100%"
  },
  content: {
    flex: "1 1 auto"
  },
  progress: { color: "#eeeeee" },
  progressText: { color: "#eeeeee", marginTop: "40%" },
  progressContainer: {
    marginTop: "100%",
    marginLeft: "15%",
    width: "50%",
    height: "50%",
    position: "relative"
  }
};
export default styles;
