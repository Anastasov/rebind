import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import authInfo, * as authenticationReducer from './auth/authReducer';
import modal, * as modalReducer from './modal/modalReducer';

const rootReducer = combineReducers({
  authInfo,
  modal,
  form
});

export default rootReducer;

export const getAuthInfoSelector = state => authenticationReducer
  .getAuthInfoSelector(state.authInfo);

export const getModalSelector = state => modalReducer
  .getModalSelector(state.modal);
