import { setCookie } from "redux-cookie";
import jwtDecode from "jwt-decode";
import UserApi from "../../api/user-api";
import {
  closeModalActionCreator,
  showProgressBarActionCreator,
  hideProgressBarActionCreator,
  hideHeaderErrorActionCreator
} from "../modal/modalActionCreators";
import COOKIES from "../../config/COOKIES";
import { showSnackBarActionCreator } from "../snackbar/snackbarActionCreators";
import { promiseToReturn } from "../../util/PromiseUtils";
import { handleResponse as handle } from "../../util/ResponseUtils";
import { navigate } from "../nav/navActionCreators";
import {
  HOME_TAB_INDEX,
  PROFILE_TAB_INDEX
} from "../../components/nav/BottomNavigationTabs.jsx";

export const SET_USERNAME_INPUT = "SET_USERNAME_INPUT";
export const setUsernameActionCreator = username => ({
  type: SET_USERNAME_INPUT,
  payload: {
    username: username || ""
  }
});

export const SET_PASSWORD_INPUT = "SET_PASSWORD_INPUT";
export const setPasswordActionCreator = password => ({
  type: SET_PASSWORD_INPUT,
  payload: {
    password: password || ""
  }
});

export const SET_PASSWORD_VISIBILITY = "SET_PASSWORD_VISIBILITY";
export const setPasswordVisibilityActionCreator = isPasswordVisible => ({
  type: SET_PASSWORD_VISIBILITY,
  payload: {
    isPasswordVisible
  }
});

export const USER_AUTHENTHICATED_SUCC = "USER_AUTHENTHICATED_SUCC";
export const loginUser = jwToken => {
  const decodedToken = jwtDecode(jwToken);
  let id = decodedToken ? decodedToken.jti : null;
  return {
    type: USER_AUTHENTHICATED_SUCC,
    payload: {
      jwToken,
      id
    }
  };
};

export const LOGOUT_USER = "LOGOUT_USER";
export const logoutUser = () => ({
  type: LOGOUT_USER,
  payload: {
    jwToken: null,
    id: null
  }
});

export const SEND_REGISTER_DATA = "SEND_REGISTER_DATA";
export const sendRegisterDataActionCreator = () => ({
  type: SEND_REGISTER_DATA,
  payload: {
    waitingServerAuthInfo: true
  }
});

export const SEND_LOGIN_DATA = "SEND_LOGIN_DATA";
export const sendLoginDataActionCreator = () => ({
  type: SEND_LOGIN_DATA,
  payload: {
    waitingServerAuthInfo: true
  }
});

export const SET_USER_DATA = "SET_USER_DATA";
export const setUserDataActionCreator = user => ({
  type: SET_USER_DATA,
  payload: {
    user
  }
});

export const MOUSE_ON_REGISTER_BUTTON = "MOUSE_ON_REGISTER_BUTTON";
export const mouseOnRegisterButtonActionCreator = visible => ({
  type: MOUSE_ON_REGISTER_BUTTON,
  payload: {
    mouseOnRegisterButton: visible
  }
});

export const MOUSE_ON_LOGIN_BUTTON = "MOUSE_ON_LOGIN_BUTTON";
export const mouseOnLoginButtonActionCreator = visible => ({
  type: MOUSE_ON_LOGIN_BUTTON,
  payload: {
    mouseOnLoginButton: visible
  }
});

/** AUTHENTICATED ACTION CREATORS */
export const handleResponse = (dispatch, errorMessage) => response =>
  handle(dispatch, response, errorMessage, loginUser);

const showSuccessAndCloseModal = (dispatch, redirect, message) => data => {
  dispatch(
    showSnackBarActionCreator({
      variant: "success",
      message
    })
  );
  dispatch(setUserDataActionCreator({ id: data.id }));
  dispatch(closeModalActionCreator());
  if (!redirect) {
    dispatch(navigate(PROFILE_TAB_INDEX));
  }

  return promiseToReturn(data);
};

export const handleRegisterActionCreator = user => (dispatch, getState) => {
  dispatch(hideHeaderErrorActionCreator());
  dispatch(showProgressBarActionCreator());
  return UserApi.auth(getState())
    .registerNewUser(user)
    .then(handleResponse(dispatch, "sign up failed!"))
    .then(showSuccessAndCloseModal(dispatch, null, "Sign up successful."))
    .finally(() => dispatch(hideProgressBarActionCreator()));
};

export const handleLoginActionCreator = user => (dispatch, getState) => {
  dispatch(hideHeaderErrorActionCreator());
  dispatch(showProgressBarActionCreator());
  return UserApi.auth(getState())
    .login(user)
    .then(handleResponse(dispatch, "credentials are incorrect"))
    .then(showSuccessAndCloseModal(dispatch, null, "Login successful"))
    .finally(() => dispatch(hideProgressBarActionCreator()));
};

export const signoutUser = () => dispatch => {
  dispatch(setCookie(COOKIES.TOKEN, ""));
  dispatch(logoutUser());
  dispatch(navigate(HOME_TAB_INDEX));
};
