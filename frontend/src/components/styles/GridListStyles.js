import defaults from "../../config/globalStyles";
import Rebind from "../../config/ReBind";

export const logoPixelSize = 62;
export const logoPaddingSize = 6;
const defaultItem = {
  width: logoPixelSize,
  height: logoPixelSize,
  padding: `${logoPaddingSize}px ${logoPaddingSize}px ${logoPaddingSize}px ${logoPaddingSize}px`
};

const wrapper = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-around",
  overflow: "hidden"
};

const styles = {
  ...defaults,
  wrapper: {
    ...wrapper
  },
  wrapper_scroll: {
    ...wrapper,
    overflow: "auto"
  },
  gridList: { display: "contents" },
  item: {
    ...defaultItem
  },
  item_selected: {
    ...defaultItem,
    borderRadius: "10px",
    background: Rebind.THEME.palette.secondary.altText
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: "10px"
  }
};
export default styles;
