// thi is a duck: https://github.com/erikras/ducks-modular-redux
export const INIT_PROFILE_DATA = "INIT_PROFILE_DATA";
export const initProfileDataActionCreator = payload => ({
  type: INIT_PROFILE_DATA,
  payload: {
    email: payload.email,
    firstName: payload.firstName,
    lastName: payload.lastName,
    username: payload.username,
    phone: payload.phone,
    postcode: payload.postcode
  }
});

export const UPDATE_INITIAL_DATA = "UPDATE_INITIAL_DATA";
export const updateProfileDataActionCreator = payload => ({
  type: UPDATE_INITIAL_DATA,
  payload
});

const reducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case INIT_PROFILE_DATA:
    case UPDATE_INITIAL_DATA:
      return { ...state, ...payload };
    default:
      return { ...state };
  }
};

export default reducer;
