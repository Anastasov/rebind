import * as UserApi from '../../api/user-api';

export const SET_USERNAME_INPUT = 'SET_USERNAME_INPUT';
export const setUsernameActionCreator = username => ({
  type: SET_USERNAME_INPUT,
  payload: {
    username: username || ''
  }
});

export const SET_PASSWORD_INPUT = 'SET_PASSWORD_INPUT';
export const setPasswordActionCreator = password => ({
  type: SET_PASSWORD_INPUT,
  payload: {
    password: password || ''
  }
});

export const SET_PASSWORD_VISIBILITY = 'SET_PASSWORD_VISIBILITY';
export const setPasswordVisibilityActionCreator = isPasswordVisible => ({
  type: SET_PASSWORD_VISIBILITY,
  payload: {
    isPasswordVisible
  }
});

export const USER_AUTHENTHICATED_SUCC = 'USER_AUTHENTHICATED_SUCC';
export const loginUser = jwToken => ({
  type: USER_AUTHENTHICATED_SUCC,
  payload: {
    jwToken
  }
});

export const SEND_REGISTER_DATA = 'SEND_REGISTER_DATA';
export const sendRegisterDataActionCreator = () => ({
  type: SEND_REGISTER_DATA,
  payload: {
    waitingServerAuthInfo: true
  }
});

export const SEND_LOGIN_DATA = 'SEND_LOGIN_DATA';
export const sendLoginDataActionCreator = () => ({
  type: SEND_LOGIN_DATA,
  payload: {
    waitingServerAuthInfo: true
  }
});

export const handleRegisterActionCreator = user => (dispatch) => {
  dispatch(sendRegisterDataActionCreator());
  UserApi.registerNewUser(user)
    .then((authResponse) => {
      if (authResponse.isOk) {
        dispatch(loginUser(authResponse.token));
      }
    })
    .catch(error => console.log(error));
};

export const handleLoginActionCreator = user => (dispatch) => {
  dispatch(sendLoginDataActionCreator());
  UserApi.login(user)
    .then((authResponse) => {
      if (authResponse.isOk) {
        dispatch(loginUser(authResponse.token));
      }
    })
    .catch(error => console.log(error));
};
