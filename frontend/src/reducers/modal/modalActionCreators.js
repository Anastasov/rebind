export const SHOW_SIGN_UP_PAGE = "SHOW_SIGN_UP_PAGE";
export const SIGN_UP_MODAL_NAME = "sign_up";
export const openSignUpModalActionCreator = () => ({
  type: SHOW_SIGN_UP_PAGE,
  payload: {
    show: SIGN_UP_MODAL_NAME
  }
});

export const SHOW_LOGIN_MODAL = "SHOW_LOGIN_MODAL";
export const LOGIN_MODAL_NAME = "login";
export const openLoginModalActionCreator = () => ({
  type: SHOW_LOGIN_MODAL,
  payload: {
    show: LOGIN_MODAL_NAME
  }
});

export const CLOSE_MODAL = "CLOSE_MODAL";
export const closeAuthenticationModalActionCreator = () => ({
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
