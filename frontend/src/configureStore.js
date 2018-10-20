import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

const addLoggingToDispatch = (store) => {
  const rawDispatch = store.dispatch;
  if (!console.group) {
    return rawDispatch;
  }
  return (action) => {
    console.group(action.type);
    console.log('%c prev_state:', 'color: red', store.getState());
    console.log('%c action_type:', 'color: orange', action.type);
    const result = rawDispatch(action);
    console.log('%c next_state:', 'color: green', store.getState());
    console.groupEnd(action.type);
    return result;
  };
};
const loadState = () => ({ authInfo: { logged: false } });
/* eslint-disable no-underscore-dangle */
export const configureStore = () => {
  const INITIAL_STATE = loadState();
  const store = createStore(
    rootReducer,
    INITIAL_STATE,
    compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );

  if (process.env.NODE_ENV !== 'production') {
    store.dispatch = addLoggingToDispatch(store);
  }

  // set subscribtions to store changes.
  return store;
};
/* eslint-enable no-underscore-dangle */

export const configuredStore = configureStore();
