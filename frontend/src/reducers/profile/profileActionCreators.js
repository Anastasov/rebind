import UserApi from "../../api/user-api";
import { handleResponse } from "../../util/AuthResponseUtils";
import {
  initProfileDataActionCreator,
  updateProfileDataActionCreator
} from "./profileInitializerDuck";

export const PUSH_SUBMITTING_FIELD = "PUSH_SUBMITTING_FIELD";
export const pushSubmittingActionCreator = field => ({
  type: PUSH_SUBMITTING_FIELD,
  payload: field
});

export const POP_SUBMITTING_FIELD = "POP_SUBMITTING_FIELD";
export const popSubmittingActionCreator = field => ({
  type: POP_SUBMITTING_FIELD,
  payload: field
});

export const PUSH_SUCCESS_UPDATE = "PUSH_SUCCESS_UPDATE";
export const pushSuccessActionCreator = field => ({
  type: PUSH_SUCCESS_UPDATE,
  payload: field
});

export const POP_SUCCESS_UPDATE = "POP_SUCCESS_UPDATE";
export const popSuccessActionCreator = field => ({
  type: POP_SUCCESS_UPDATE,
  payload: field
});

export const PUSH_ERROR_UPDATE = "PUSH_ERROR_UPDATE";
export const pushErrorActionCreator = (field, message) => {
  const payload = {};
  payload[field] = message;
  return {
    type: PUSH_ERROR_UPDATE,
    payload
  };
};

export const POP_ERROR_UPDATE = "POP_ERROR_UPDATE";
export const popErrorActionCreator = field => {
  const payload = {};
  payload[field] = "";
  return {
    type: POP_ERROR_UPDATE,
    payload
  };
};

export const SET_INITIALIZING = "SET_INITIALIZING";
export const setInitializing = initializing => ({
  type: SET_INITIALIZING,
  payload: { initializing }
});

const setData = dispatch => data =>
  dispatch(initProfileDataActionCreator(data.user));

export const fetchProfileData = id => (dispatch, getState) => {
  // call api for change -> loading
  dispatch(setInitializing(true));
  return UserApi.auth(getState())
    .fetchProfileData(id)
    .then(handleResponse(dispatch))
    .then(setData(dispatch))
    .then(() => dispatch(setInitializing(false)));
};

export const changeProfileDataField = (id, field, value) => (
  dispatch,
  getState
) => {
  // call api for change -> loading
  dispatch(popErrorActionCreator(field));
  dispatch(pushSubmittingActionCreator(field));
  return UserApi.auth(getState())
    .changeProfileDataField(id, field, value)
    .then(handleResponse(dispatch))
    .then(() => {
      dispatch(popSubmittingActionCreator(field));
      dispatch(pushSuccessActionCreator(field));
      setTimeout(() => dispatch(popSuccessActionCreator(field)), 3000);
      const update = {};
      update[field] = value;
      dispatch(updateProfileDataActionCreator(update));
    })
    .catch(error => {
      dispatch(popSubmittingActionCreator(field));
      dispatch(pushErrorActionCreator(field, error.errors[field]));
    });
};
