// this is a duck: https://github.com/erikras/ducks-modular-redux
import {
  submit,
  submitted,
  showSuccess,
  hideSuccess,
  showError,
  hideError
} from "../form/formStateDuck";
import CardApi from "../../api/card-api";
import UserApi from "../../api/user-api";
import { handleResponse } from "../../util/AuthResponseUtils";
import { endsWith } from "../../util/ObjectUtils";

const INITIALIZING_CARDS = "INITIALIZING_CARDS";
export const setInitializingCards = initializing => ({
  type: INITIALIZING_CARDS,
  payload: {
    initializing
  }
});

const SET_CARDS = "SET_CARDS";
export const setCards = cards => ({
  type: SET_CARDS,
  payload: {
    cards
  }
});

export const fetchCardsData = id => (dispatch, getState) => {
  // call api for change -> loading
  dispatch(setInitializingCards(true));
  return UserApi.auth(getState())
    .fetchCardsData(id)
    .then(
      handleResponse(
        dispatch,
        `Ooops... Couldn't load cards. Refreshing the page may fix the problem.`
      )
    )
    .then(data => {
      dispatch(
        setCards(
          data.cards.map(card => {
            card.cardname = card.name;
            delete card.name;
            return card;
          })
        )
      );
    })
    .then(() => dispatch(setInitializingCards(false)));
};

const TOGGLE_CARD_FIELD = "TOGGLE_CARD_FIELD";
export const toggleCardFieldActionCreator = (id, field) => ({
  type: TOGGLE_CARD_FIELD,
  payload: {
    id,
    field
  }
});

export const SELECT_ICON = "SELECT_ICON";
export const changeField = (userId, id, value, field) => (
  dispatch,
  getState
) => {
  const formName = `card-${id || 0}`;
  // call api for change -> loading
  dispatch(hideError(formName, field));
  dispatch(submit(formName, field));
  dispatch(toggleCardFieldActionCreator(id, field));
  const request = id
    ? CardApi.auth(getState()).updateCard({ ...value, id })
    : CardApi.auth(getState()).createCard({ userId, name: value });
  return request
    .then(handleResponse(dispatch))
    .then(() => {
      dispatch(showSuccess(formName, field));
      setTimeout(() => dispatch(hideSuccess(formName, field)), 3000);
      if (!id) {
        dispatch(fetchCardsData(userId));
      }
    })
    .catch(error => {
      dispatch(showError(field, error.errors ? error.errors[field] : error));
    })
    .finally(() => {
      dispatch(submitted(formName, field));
    });
};

export const changeCardname = (userId, id, name) =>
  changeField(userId, id, name, "cardname");

const toggleField = (cards, { id, field }) => {
  if (field !== "cardname") {
    return cards.map(c => {
      if (c.id === id) {
        if (field.startsWith("bind_")) {
          const bindId = field.substring("bind_".length);
          c.protectedBinds.map(b => {
            if (b.id === bindId) {
              b.bindCheck = !b.bindCheck;
            }
            return b;
          });
        } else if (endsWith(field, "Field")) {
          c.user[field].hidden = !c.user[field].hidden;
        }
      }
      return c;
    });
  }

  return cards;
};

const INITIAL_STATE = { initializing: false, cards: [] };
const reducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_CARDS:
    case INITIALIZING_CARDS:
      return { ...state, ...payload };
    case TOGGLE_CARD_FIELD:
      return { ...state, cards: toggleField(state.cards, payload) };
    default:
      return { ...state };
  }
};

export default reducer;
