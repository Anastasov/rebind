import { change } from "redux-form";
import UserApi from "../../api/user-api";
import { handleResponse } from "../../util/AuthResponseUtils";
import {
  initProfileDataActionCreator,
  updateProfileDataActionCreator
} from "./profileInitializerDuck";
import {
  showProgressBarActionCreator,
  hideProgressBarActionCreator,
  closeModalActionCreator
} from "../modal/modalActionCreators";
import { showSnackBarActionCreator } from "../snackbar/snackbarActionCreators";
import { setBindDataActionCreator } from "./bindInitializerDuck";
import { getObjectProps } from "../../util/ObjectUtils";

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
export const popErrorActionCreator = payload => ({
  type: POP_ERROR_UPDATE,
  payload
});

export const SET_INITIALIZING = "SET_INITIALIZING";
export const setInitializing = initializing => ({
  type: SET_INITIALIZING,
  payload: { initializing }
});

export const SET_TAB = "SET_TAB";
export const setTab = initializing => ({
  type: SET_TAB,
  payload: { initializing }
});

export const setIconOnBindForm = icon => (dispatch, getState) => {
  const { modal } = getState();
  if (!modal.showProgressBar) {
    dispatch(change("bind", "selectedIcon", icon));
  }
};

export const setTabOnBindForm = tab => dispatch =>
  dispatch(change("bind", "tabSelected", tab));

const setData = dispatch => data => {
  dispatch(initProfileDataActionCreator(data.user));
};

export const fetchProfileData = id => (dispatch, getState) => {
  // call api for change -> loading
  dispatch(setInitializing(true));
  return UserApi.auth(getState())
    .fetchProfileData(id)
    .then(
      handleResponse(
        dispatch,
        `Ooops... Couldn't load user details. Refreshing the page may fix the problem.`
      )
    )
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

export const changeBind = (userId, bindId, bind) => (dispatch, getState) => {
  const isAdd = !bindId;
  const isDelete = !bind;
  // const isUpdate = bindId && bind;
  const changedProps = getObjectProps(bind);

  // call api for change -> loading
  dispatch(showProgressBarActionCreator());
  changedProps.forEach(field => {
    dispatch(popErrorActionCreator(field));
    dispatch(pushSubmittingActionCreator(field));
  });

  return UserApi.auth(getState())
    .changeBind(userId, bindId, bind)
    .then(handleResponse(dispatch))
    .then(data => {
      changedProps.forEach(field => {
        dispatch(popSubmittingActionCreator(field));
        dispatch(pushSuccessActionCreator(field));
        setTimeout(() => dispatch(popSuccessActionCreator(field)), 3000);
        dispatch(setBindDataActionCreator(data));
      });
      if (isAdd || isDelete) {
        dispatch(fetchProfileData(userId));
        if (isDelete) {
          dispatch(closeModalActionCreator());
        }
      }
    })
    .catch(error => {
      let message = null;
      if (isAdd) {
        message = "Bind couldn't be created";
      } else if (!bind) {
        message = "Bind couldn't be delete";
      }
      if (message) {
        // when add || delete fails
        dispatch(
          showSnackBarActionCreator({
            variant: "error",
            message
          })
        );
      } else {
        // when update fails
        changedProps.forEach(field => {
          dispatch(popSubmittingActionCreator(field));
          dispatch(pushErrorActionCreator(field, error.errors[field]));
        });
      }
    })
    .finally(() => {
      dispatch(hideProgressBarActionCreator());
    });
};
