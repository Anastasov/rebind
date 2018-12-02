// thi is a duck: https://github.com/erikras/ducks-modular-redux
export const INIT_PROFILE_DATA = "INIT_PROFILE_DATA";
export const initProfileDataActionCreator = ({
  username,
  email,
  firstName,
  lastName,
  phone,
  postcode,
  binds
}) => ({
  type: INIT_PROFILE_DATA,
  payload: {
    username,
    email,
    firstName,
    lastName,
    phone,
    postcode,
    binds: binds.sort((a, b) => a.icon.localeCompare(b.icon))
  }
});

export const UPDATE_INITIAL_DATA = "UPDATE_INITIAL_DATA";
export const updateProfileDataActionCreator = payload => ({
  type: UPDATE_INITIAL_DATA,
  payload
});

const INITIAL_STATE = {
  username: "",
  email: "",
  firstName: "",
  lastName: "",
  phone: "",
  postcode: "",
  binds: []
};
const reducer = (state = INITIAL_STATE, action) => {
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
