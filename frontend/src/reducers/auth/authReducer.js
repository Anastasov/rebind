import { assign } from "../../util/ObjectUtils";
import {
  SEND_LOGIN_DATA,
  SET_PASSWORD_VISIBILITY,
  USER_AUTHENTHICATED_SUCC,
  SEND_REGISTER_DATA,
  SET_USER_DATA
} from "./authActionCreators";

const authReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case SEND_REGISTER_DATA:
    case SEND_LOGIN_DATA:
    case SET_PASSWORD_VISIBILITY:
    case USER_AUTHENTHICATED_SUCC:
    case SET_USER_DATA:
    case "SHOW_USER_MENU":
    case "HIDE_USER_MENU":
      return assign(state, { ...payload });
    default:
      return assign(state);
  }
};

export default authReducer;
