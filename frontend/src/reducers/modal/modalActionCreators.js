export const SHOW_SIGN_UP_PAGE = 'SHOW_SIGN_UP_PAGE';
export const SIGN_UP_MODAL_NAME = 'sign_up';
export const openSignUpModalActionCreator = () => ({
  type: SHOW_SIGN_UP_PAGE,
  payload: {
    show: SIGN_UP_MODAL_NAME
  }
});


export const SHOW_LOGIN_MODAL = 'SHOW_LOGIN_MODAL';
export const LOGIN_MODAL_NAME = 'login';
export const openLoginModalActionCreator = () => ({
  type: SHOW_LOGIN_MODAL,
  payload: {
    show: LOGIN_MODAL_NAME
  }
});

export const CLOSE_MODAL = 'CLOSE_MODAL';
export const closeAuthenticationModalActionCreator = () => ({
  type: CLOSE_MODAL,
  payload: {
    show: ''
  }
});
