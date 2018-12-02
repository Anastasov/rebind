// thi is a duck: https://github.com/erikras/ducks-modular-redux
export const SET_FORM_STATE_FLAG = "SET_FORM_STATE_FLAG";
// state[form].flag.field = message
export const setFlag = (form, flagName, field, value) => {
  const flag = {};
  flag[field] = value;
  return {
    type: SET_FORM_STATE_FLAG,
    payload: {
      form,
      flagName,
      flag
    }
  };
};

export const DELETE_FORM_STATE_FLAG = "DELETE_FORM_STATE_FLAG";
// state[form].flag.field = message
export const deleteFlag = (form, flagName, field) => ({
  type: DELETE_FORM_STATE_FLAG,
  payload: {
    form,
    flagName,
    flag: field
  }
});

// state[form].subbmitting.field = true/false
export const submit = (form, field) => setFlag(form, "submitting", field, true);
export const submitted = (form, field) => deleteFlag(form, "submitting", field);
// state[form].success.field = true/false
export const showSuccess = (form, field) =>
  setFlag(form, "success", field, true);
export const hideSuccess = (form, field) => deleteFlag(form, "success", field);
// state[form].error.field = message
export const showError = (form, field, value) =>
  setFlag(form, "error", field, value);
export const hideError = (form, field) => deleteFlag(form, "error", field);

const changeValue = (state, payload) => {
  let newValue = state;
  if (payload) {
    const { form, flagName, flag } = payload;
    newValue = {};
    if (state[form]) {
      const oldForm = state[form];
      newValue[form] = { ...oldForm };
      if (oldForm[flagName]) {
        const oldFlag = oldForm[flagName];
        newValue[form][flagName] = { ...oldFlag, ...flag };
      } else {
        newValue[form][flagName] = { ...flag };
      }
    } else {
      newValue[form] = {};
      newValue[form][flagName] = { ...flag };
    }
  }
  return newValue;
};

const deleteValue = (state, payload) => {
  if (payload) {
    const { form, flagName, flag } = payload;
    if (state[form] && state[form][flagName]) {
      if (flagName === "error") {
        delete state[form][flagName][flag];
      } else {
        delete state[form][flagName];
      }
    }
  }
  return state;
};

const reducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_FORM_STATE_FLAG:
      return { ...state, ...changeValue(state, payload) };
    case DELETE_FORM_STATE_FLAG:
      return { ...state, ...deleteValue(state, payload) };
    default:
      return { ...state };
  }
};

export default reducer;
