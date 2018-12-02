import { combineReducers } from "redux";
import { reducer as form } from "redux-form";
import { routerReducer as routing } from "react-router-redux";
import authInfo from "./auth/authReducer";
import modal from "./modal/modalReducer";
import snackbar from "./snackbar/snackbarReducer";
import navbar from "./nav/navReducer";
import profile from "./profile/profileReducer";
import cards from "./card/cardDuck";
import formState from "./form/formStateDuck";
import profileInitializer from "./profile/profileInitializerDuck";
import bindInitializer from "./profile/bindInitializerDuck";
import cardInitializer from "./card/cardInitializerDuck";

const rootReducer = combineReducers({
  authInfo,
  modal,
  snackbar,
  navbar,
  routing,
  profile,
  cards,
  formState,
  profileInitializer,
  bindInitializer,
  cardInitializer,
  form
});

export default rootReducer;

export const authInfoSelector = state => state.authInfo;
export const modalSelector = state => state.modal;
export const snackbarSelector = state => state.snackbar;
export const routerSelector = state => state.routing;
export const navbarSelector = state => state.navbar;
export const profileSelector = state => state.profile;
export const cardsSelector = state => state.cards;
export const formStateSelector = state => state.formState;
export const profileInitializerSelector = state => state.profileInitializer;
export const bindInitializerSelector = state => state.bindInitializer;
export const cardInitializerSelector = state => state.cardInitializer;
