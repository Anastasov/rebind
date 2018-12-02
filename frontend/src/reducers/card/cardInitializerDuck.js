// thi is a duck: https://github.com/erikras/ducks-modular-redux
export const INIT_CARD = "INIT_CARD";
export const initCardActionCreator = ({ id, name, user, protectedBinds }) => ({
  type: INIT_CARD,
  payload: {
    id,
    cardname: name,
    user,
    protectedBinds: protectedBinds.sort((a, b) => a.icon.localeCompare(b.icon))
  }
});

export const UPDATE_CARD_FIELD = "UPDATE_CARD_FIELD";
export const updateCardFieldActionCreator = (field, value) => {
  const payload = {};
  payload[field] = value;
  return {
    type: UPDATE_CARD_FIELD,
    payload
  };
};

const reducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case INIT_CARD:
      return { ...state, ...payload };
    default:
      return { ...state };
  }
};

export default reducer;
