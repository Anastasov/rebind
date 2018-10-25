import { combineReducers } from "redux";
import { reducer as form } from "redux-form";
import { routerReducer as routing } from "react-router-redux";
import authInfo from "./auth/authReducer";
import modal from "./modal/modalReducer";
import snackbar from "./snackbar/snackbarReducer";
import navbar from "./nav/navReducer";

const rootReducer = combineReducers({
  authInfo,
  modal,
  snackbar,
  navbar,
  routing,
  form
});

export default rootReducer;

export const authInfoSelector = state => state.authInfo;
export const modalSelector = state => state.modal;
export const snackbarSelector = state => state.snackbar;
export const routerSelector = state => state.routing;
export const navbarSelector = state => state.navbar;
