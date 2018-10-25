import { assign } from "../../util/ObjectUtils";
import {
  SHOW_USER_MENU,
  HIDE_USER_MENU,
  SHOW_NAVBAR,
  HIDE_NAVBAR
} from "./navActionCreators";

const navReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case SHOW_USER_MENU:
    case HIDE_USER_MENU:
    case SHOW_NAVBAR:
    case HIDE_NAVBAR:
      return assign(state, { ...payload });
    default:
      return assign(state);
  }
};

export default navReducer;
