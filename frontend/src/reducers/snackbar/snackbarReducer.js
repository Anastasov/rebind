import { assign } from "../../util/ObjectUtils";
import { SHOW_SNACKBAR, CLOSE_SNACKBAR } from "./snackbarActionCreators";

const snackbarReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case SHOW_SNACKBAR:
    case CLOSE_SNACKBAR:
      return assign(state, { ...payload });
    default:
      return assign(state);
  }
};
export default snackbarReducer;
