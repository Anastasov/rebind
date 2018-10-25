import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { syncHistoryWithStore, routerMiddleware } from "react-router-redux";
import Cookies from "js-cookie";
import { createCookieMiddleware } from "redux-cookie";
import createBrowserHistory from "history/createBrowserHistory";
import rootReducer from "../reducers/rootReducer";
import INITIAL_STATE from "./initial-state";
import ReBind from "./ReBind";

const addLoggingToDispatch = store => {
  const rawDispatch = store.dispatch;
  /* eslint-disable */
  if (!console.group) {
    return rawDispatch;
  }
  return action => {
    console.group(action.type);
    console.log("%c prev_state:", "color: red", store.getState());
    console.log("%c action_type:", "color: orange", action.type);
    const result = rawDispatch(action);
    console.log("%c next_state:", "color: green", store.getState());
    console.groupEnd(action.type);
    return result;
  };
  /* eslint-enable */
};
/* eslint-disable no-underscore-dangle */
const useReduxDevTools =
  ReBind.IS_ENV_DEV && window.__REDUX_DEVTOOLS_EXTENSION__;
export const history = createBrowserHistory();
const reduxRouterMiddleware = routerMiddleware(history);
const cookiesMiddleware = createCookieMiddleware(Cookies);
export const configureStore = () => {
  const store = createStore(
    rootReducer,
    INITIAL_STATE,
    compose(
      applyMiddleware(reduxRouterMiddleware, cookiesMiddleware, thunk),
      useReduxDevTools ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
  );

  if (ReBind.IS_ENV_DEV) {
    store.dispatch = addLoggingToDispatch(store);
  }

  // set subscribtions to store changes.
  return store;
};
/* eslint-enable no-underscore-dangle */

export const configuredStore = configureStore();
const browserHis = createBrowserHistory();
export const ss = syncHistoryWithStore(browserHis, configuredStore);
