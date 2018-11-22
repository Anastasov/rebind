import { setBindDataActionCreator } from "../profile/bindInitializerDuck";

export const SHOW_SIGN_UP_MODAL = "SHOW_SIGN_UP_MODAL";
export const SIGN_UP_MODAL_NAME = "sign_up";
export const openSignUpModalActionCreator = () => ({
  type: SHOW_SIGN_UP_MODAL,
  payload: {
    show: SIGN_UP_MODAL_NAME,
    title: "Sign up"
  }
});

export const SHOW_LOGIN_MODAL = "SHOW_LOGIN_MODAL";
export const LOGIN_MODAL_NAME = "login";
export const openLoginModalActionCreator = (redirect = "") => ({
  type: SHOW_LOGIN_MODAL,
  payload: {
    show: LOGIN_MODAL_NAME,
    title: "Login",
    redirect
  }
});

export const SHOW_EDIT_BIND_MODAL = "SHOW_EDIT_BIND_MODAL";
export const EDIT_BIND_MODAL_NAME = "edit_bind";
export const openEditBindModalActionCreator = () => ({
  type: SHOW_EDIT_BIND_MODAL,
  payload: {
    show: EDIT_BIND_MODAL_NAME,
    bodyClass: "modal_content"
  }
});

export const ALERT_DELETE_BIND = "ALERT_DELETE_BIND";
export const ALERT_DELETE_BIND_NAME = "alert_delete_bind";
export const alertDeleteBindActionCreator = bind => ({
  type: ALERT_DELETE_BIND,
  payload: {
    show: ALERT_DELETE_BIND_NAME,
    title: "Permanently delete",
    data: {
      bind
    }
  }
});

export const loadBindModalActionCreator = bind => dispatch => {
  dispatch(setBindDataActionCreator(bind));
  dispatch(openEditBindModalActionCreator());
};

export const CLOSE_MODAL = "CLOSE_MODAL";
export const closeModalActionCreator = () => ({
  type: CLOSE_MODAL,
  payload: {
    show: ""
  }
});

export const SHOW_PROGRESS_BAR = "SHOW_PROGRESS_BAR";
export const showProgressBarActionCreator = () => ({
  type: SHOW_PROGRESS_BAR,
  payload: {
    showProgressBar: true
  }
});

export const SET_MODAL_ON_CLOSE = "SET_MODAL_ON_CLOSE";
export const setModalOnCloseActionCreator = onClose => ({
  type: SET_MODAL_ON_CLOSE,
  payload: {
    onClose
  }
});

export const HIDE_PROGRESS_BAR = "HIDE_PROGRESS_BAR";
export const hideProgressBarActionCreator = () => ({
  type: HIDE_PROGRESS_BAR,
  payload: {
    showProgressBar: false
  }
});

export const HIDE_HEADER_ERROR = "HIDE_HEADER_ERROR";
export const hideHeaderErrorActionCreator = () => ({
  type: HIDE_HEADER_ERROR,
  payload: {
    error: {}
  }
});
