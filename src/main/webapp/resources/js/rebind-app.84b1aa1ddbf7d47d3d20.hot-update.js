webpackHotUpdate("rebind-app",{

/***/ "./src/reducers/authReducer.js":
/*!*************************************!*\
  !*** ./src/reducers/authReducer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util_ObjectUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/ObjectUtils */ "./src/util/ObjectUtils.js");
var authReducer=function authReducer(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{logged:false};var action=arguments.length>1?arguments[1]:undefined;var type=action.type;switch(type){case'REQUEST_REGISTER_PAGE':return Object(_util_ObjectUtils__WEBPACK_IMPORTED_MODULE_0__["assign"])(state,{logged:false});case'SHOW_USER_MENU':return Object(_util_ObjectUtils__WEBPACK_IMPORTED_MODULE_0__["assign"])(state,{logged:true});default:return Object(_util_ObjectUtils__WEBPACK_IMPORTED_MODULE_0__["assign"])(state);}};/* harmony default export */ __webpack_exports__["default"] = (authReducer);

/***/ }),

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
var rootReducer=Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({authReducer:_authReducer__WEBPACK_IMPORTED_MODULE_1__["default"]});/* harmony default export */ __webpack_exports__["default"] = (rootReducer);var getAuthInfoSelector=function getAuthInfoSelector(state){return _authReducer__WEBPACK_IMPORTED_MODULE_1__(state.authInfo);};

/***/ }),

/***/ "./src/util/ObjectUtils.js":
/*!*********************************!*\
  !*** ./src/util/ObjectUtils.js ***!
  \*********************************/
/*! exports provided: assign, stub */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assign", function() { return assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stub", function() { return stub; });
var assign=function assign(){var object=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var overrides=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};return Object.assign({},object,overrides);};var stub=function stub(){return null;};

/***/ })

})
//# sourceMappingURL=rebind-app.84b1aa1ddbf7d47d3d20.hot-update.js.map