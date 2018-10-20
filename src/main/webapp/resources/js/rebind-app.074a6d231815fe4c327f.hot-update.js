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
var loadState=function loadState(){return{authInfo:{logged:false}};};/* eslint-disable no-underscore-dangle */var configureStore=function configureStore(){var INITIAL_STATE=loadState();var store=Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers_rootReducer__WEBPACK_IMPORTED_MODULE_1__["default"],INITIAL_STATE,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());// set subscribtions to store changes.
return store;};/* eslint-enable no-underscore-dangle */var configuredStore=configureStore();

/***/ })

})
//# sourceMappingURL=rebind-app.074a6d231815fe4c327f.hot-update.js.map