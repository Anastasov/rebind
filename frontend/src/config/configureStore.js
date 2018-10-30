import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { syncHistoryWithStore, routerMiddleware } from "react-router-redux";
import Cookies from "js-cookie";
import { createCookieMiddleware } from "redux-cookie";
import createBrowserHistory from "history/createBrowserHistory";
import rootReducer from "../reducers/rootReducer";
import INITIAL_STATE from "./initial-state";
import ReBind from "./ReBind";

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

  // set subscribtions to store changes.
  return store;
};
/* eslint-enable no-underscore-dangle */

export const configuredStore = configureStore();
const browserHis = createBrowserHistory();
export const ss = syncHistoryWithStore(browserHis, configuredStore);
