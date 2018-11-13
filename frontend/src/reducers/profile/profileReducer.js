import {
  PUSH_SUBMITTING_FIELD,
  POP_SUBMITTING_FIELD,
  PUSH_SUCCESS_UPDATE,
  POP_SUCCESS_UPDATE,
  PUSH_ERROR_UPDATE,
  POP_ERROR_UPDATE,
  SET_INITIALIZING
} from "./profileActionCreators";

const INITIAL_STATE = {
  submitting: {},
  success: {},
  error: {}
};

const profileReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  const submitting = { ...state.submitting };
  const success = { ...state.success };
  switch (type) {
    case PUSH_ERROR_UPDATE:
    case POP_ERROR_UPDATE:
      console.log("New Error", { ...state.error, ...payload });
      return { ...state, error: { ...state.error, ...payload } };
    case PUSH_SUCCESS_UPDATE:
      success[payload] = true;
      return { ...state, success };
    case POP_SUCCESS_UPDATE:
      success[payload] = false;
      return { ...state, success };
    case PUSH_SUBMITTING_FIELD:
      submitting[payload] = true;
      return { ...state, submitting };
    case POP_SUBMITTING_FIELD:
      submitting[payload] = false;
      return { ...state, submitting };
    case SET_INITIALIZING:
      return { ...state, ...payload };
    default:
      return { ...state };
  }
};
export default profileReducer;
