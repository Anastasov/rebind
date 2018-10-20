webpackHotUpdate("rebind-app",{

/***/ "./src/reducers/rootReducer.js":
/*!*************************************!*\
  !*** ./src/reducers/rootReducer.js ***!
  \*************************************/
/*! exports provided: default, getAuthInfoSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAuthInfoSelector", function() { return getAuthInfoSelector; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _authReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authReducer */ "./src/reducers/authReducer.js");
var rootReducer=Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({authInfo:_authReducer__WEBPACK_IMPORTED_MODULE_1__["default"]});/* harmony default export */ __webpack_exports__["default"] = (rootReducer);var getAuthInfoSelector=function getAuthInfoSelector(state){return _authReducer__WEBPACK_IMPORTED_MODULE_1__["getAuthInfoSelector"](state.authInfo);};

/***/ })

})
//# sourceMappingURL=rebind-app.a1503e663b036cc376c3.hot-update.js.map