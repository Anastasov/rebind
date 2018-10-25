import { push } from "react-router-redux";
import UserApi from "../../api/user-api";
import { authenticationSelector as getToken } from "./authSelectors";
import {
  showProgressBarActionCreator,
  hideProgressBarActionCreator,
  hideHeaderErrorActionCreator,
  closeAuthenticationModalActionCreator
} from "../modal/modalActionCreators";
import { showSnackBarActionCreator } from "../snackbar/snackbarActionCreators";
import { showNavActionCreator } from "../nav/navActionCreators";
import { promiseToReturn } from "../../util/PromiseUtils";
import { handleResponse as handle } from "../../util/ResponseUtils";

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
export const loginUser = jwToken => ({
  type: USER_AUTHENTHICATED_SUCC,
  payload: {
    jwToken
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

/** AUTHENTICATED ACTION CREATORS */
export const handleResponse = (dispatch, errorMessage) => response =>
  handle(dispatch, response, errorMessage, loginUser);

const showSuccessAndCloseModal = (dispatch, message) => data => {
  dispatch(
    showSnackBarActionCreator({
      variant: "success",
      message
    })
  );
  dispatch(setUserDataActionCreator({ email: data.email }));
  dispatch(showNavActionCreator());
  dispatch(closeAuthenticationModalActionCreator());
  dispatch(push("/login"));
  return promiseToReturn(data);
};

export const handleRegisterActionCreator = user => (dispatch, getState) => {
  dispatch(hideHeaderErrorActionCreator());
  dispatch(showProgressBarActionCreator());
  return UserApi.auth(getToken(getState()))
    .registerNewUser(user)
    .then(handleResponse(dispatch, "Sign Up failed"))
    .then(showSuccessAndCloseModal(dispatch, "Sign Up successful"))
    .finally(() => dispatch(hideProgressBarActionCreator()));
};

export const handleLoginActionCreator = user => (dispatch, getState) => {
  dispatch(hideHeaderErrorActionCreator());
  dispatch(showProgressBarActionCreator());
  return UserApi.auth(getToken(getState()))
    .login(user)
    .then(handleResponse(dispatch, "Login failed"))
    .then(showSuccessAndCloseModal(dispatch, "Login successful"))
    .finally(() => dispatch(hideProgressBarActionCreator()));
};
