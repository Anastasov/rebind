// thi is a duck: https://github.com/erikras/ducks-modular-redux
export const SET_BIND_DATA = "SET_BIND_DATA";
export const setBindDataActionCreator = ({ id, icon, name, url }) => ({
  type: SET_BIND_DATA,
  payload: {
    id,
    slectedIcon: icon,
    name,
    url,
    tabSelected: id ? 1 : 0
  }
});

export const SELECT_ICON = "SELECT_ICON";
export const selectIconActionCreator = selectedIcon => ({
  type: SELECT_ICON,
  payload: {
    selectedIcon
  }
});

const reducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_BIND_DATA:
    case SELECT_ICON:
      return { ...state, ...payload };
    default:
      return { ...state };
  }
};

export default reducer;
