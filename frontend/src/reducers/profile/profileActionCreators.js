import UserApi from "../../api/user-api";
import { handleResponse } from "../../util/AuthResponseUtils";
import { devLog } from "../../util/ObjectUtils";

export const SET_USER_DATA = "SET_USER_DATA";
export const setUserDataActionCreator = user => ({
  type: SET_USER_DATA,
  payload: {
    user
  }
});

const setData = dispatch => data => {
  devLog(data, "profileData");
  dispatch(setUserDataActionCreator(data));
};

export const fetchProfileData = id => (dispatch, getState) =>
  UserApi.auth(getState())
    .fetchProfileData(id)
    .then(handleResponse(dispatch))
    .then(setData(dispatch));
