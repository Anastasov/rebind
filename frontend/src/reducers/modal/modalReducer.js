import { assign } from '../../util/ObjectUtils';
import {
  SHOW_SIGN_UP_PAGE,
  SHOW_LOGIN_MODAL,
  CLOSE_MODAL
} from './modalActionCreators';

const modalReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case SHOW_SIGN_UP_PAGE:
    case SHOW_LOGIN_MODAL:
    case CLOSE_MODAL:
      return assign(state, { ...payload });
    default:
      return assign(state);
  }
};

export default modalReducer;

export const getModalSelector = stateModal => stateModal;
