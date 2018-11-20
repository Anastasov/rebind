import {
  SHOW_SIGN_UP_MODAL,
  SHOW_LOGIN_MODAL,
  SHOW_EDIT_BIND_MODAL,
  HIDE_PROGRESS_BAR,
  SHOW_PROGRESS_BAR,
  ALERT_DELETE_BIND,
  SET_MODAL_ON_CLOSE,
  CLOSE_MODAL
} from "./modalActionCreators";

const modalReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case CLOSE_MODAL:
      return { ...payload };
    case SHOW_SIGN_UP_MODAL:
    case SHOW_LOGIN_MODAL:
    case SHOW_EDIT_BIND_MODAL:
    case SHOW_PROGRESS_BAR:
    case HIDE_PROGRESS_BAR:
    case ALERT_DELETE_BIND:
    case SET_MODAL_ON_CLOSE:
      return { ...state, ...payload };
    default:
      return { ...state };
  }
};

export default modalReducer;
