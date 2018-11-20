import { assign } from "../../util/ObjectUtils";
import {
  SHOW_SIGN_UP_MODAL,
  SHOW_LOGIN_MODAL,
  SHOW_EDIT_BIND_MODAL,
  HIDE_PROGRESS_BAR,
  SHOW_PROGRESS_BAR,
  ALERT_DELETE_BIND,
  CLOSE_MODAL
} from "./modalActionCreators";

const modalReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case CLOSE_MODAL:
      return assign({}, { ...payload });
    case SHOW_SIGN_UP_MODAL:
    case SHOW_LOGIN_MODAL:
    case SHOW_EDIT_BIND_MODAL:
    case SHOW_PROGRESS_BAR:
    case HIDE_PROGRESS_BAR:
    case ALERT_DELETE_BIND:
      return assign(state, { ...payload });
    default:
      return assign(state);
  }
};

export default modalReducer;
