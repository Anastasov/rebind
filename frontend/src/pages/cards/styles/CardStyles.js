import defaults from "../../../config/globalStyles";

const styles = {
  ...defaults,
  card: {
    display: "flex",
    marginLeft: "13%",
    marginRight: "13%",
    minHeight: 425
  },
  card_name: {
    marginTop: "2%",
    marginLeft: "13%",
    marginRight: "13%"
  },
  card_bind_link: { width: 200 },
  cover: {
    width: 1200,
    maxWidth: 420,
    minHeight: "100%",
    backgroundSize: "100% 100%"
  },
  content: {
    flex: "1 1 auto",
    marginTop: "3%",
    marginBot: "5%"
  }
};
export default styles;
