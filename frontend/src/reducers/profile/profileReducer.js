import { assign } from "../../util/ObjectUtils";
import { SET_USER_DATA } from "./profileActionCreators";

const profileReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_USER_DATA:
      return assign(state, { ...payload });
    default:
      return assign(state);
  }
};
export default profileReducer;
