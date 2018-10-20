webpackHotUpdate("rebind-app",{

/***/ "./src/configureStore.js":
/*!*******************************!*\
  !*** ./src/configureStore.js ***!
  \*******************************/
/*! exports provided: configureStore, configuredStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configureStore", function() { return configureStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configuredStore", function() { return configuredStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _reducers_rootReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers/rootReducer */ "./src/reducers/rootReducer.js");
var addLoggingToDispatch=function addLoggingToDispatch(store){var rawDispatch=store.dispatch;if(!console.group){return rawDispatch(action);}return function(action){console.group(action.type);console.log('%c prev_state:','color: gray',store.getState());console.log('%c action_type:','color: blue',action.type);var result=rawDispatch(action);console.log('%c next_state:','color: green',store.getState());console.groupEnd(action.type);return result;};};var loadState=function loadState(){return{authInfo:{logged:false}};};/* eslint-disable no-underscore-dangle */var configureStore=function configureStore(){var INITIAL_STATE=loadState();var store=Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers_rootReducer__WEBPACK_IMPORTED_MODULE_1__["default"],INITIAL_STATE,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());store.dispatch=addLoggingToDispatch(store);// set subscribtions to store changes.
return store;};/* eslint-enable no-underscore-dangle */var configuredStore=configureStore();

/***/ })

})
//# sourceMappingURL=rebind-app.2531f2eeb51273bc7df3.hot-update.js.map