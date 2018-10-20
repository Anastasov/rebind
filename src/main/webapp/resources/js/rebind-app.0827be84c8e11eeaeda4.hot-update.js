webpackHotUpdate("rebind-app",{

/***/ "./src/reducers/auth/authReducer.js":
/*!******************************************!*\
  !*** ./src/reducers/auth/authReducer.js ***!
  \******************************************/
/*! exports provided: default, getAuthInfoSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAuthInfoSelector", function() { return getAuthInfoSelector; });
/* harmony import */ var _util_ObjectUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/ObjectUtils */ "./src/util/ObjectUtils.js");
/* harmony import */ var _authActionCreators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authActionCreators */ "./src/reducers/auth/authActionCreators.js");
function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};var ownKeys=Object.keys(source);if(typeof Object.getOwnPropertySymbols==='function'){ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable;}));}ownKeys.forEach(function(key){_defineProperty(target,key,source[key]);});}return target;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}var authReducer=function authReducer(state,action){var type=action.type,payload=action.payload;switch(type){case _authActionCreators__WEBPACK_IMPORTED_MODULE_1__["REQUEST_REGISTER_PAGE"]:case'SHOW_USER_MENU':case'HIDE_USER_MENU':return Object(_util_ObjectUtils__WEBPACK_IMPORTED_MODULE_0__["assign"])(state,_objectSpread({},payload));default:return Object(_util_ObjectUtils__WEBPACK_IMPORTED_MODULE_0__["assign"])(state);}};/* harmony default export */ __webpack_exports__["default"] = (authReducer);var getAuthInfoSelector=function getAuthInfoSelector(stateAuthInfo){// do some filtering of state and
// return new state
console.log(stateAuthInfo);return stateAuthInfo;};

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
/* harmony import */ var _auth_authReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/authReducer */ "./src/reducers/auth/authReducer.js");
var rootReducer=Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({authInfo:_auth_authReducer__WEBPACK_IMPORTED_MODULE_1__["default"]});/* harmony default export */ __webpack_exports__["default"] = (rootReducer);var getAuthInfoSelector=function getAuthInfoSelector(state){return _auth_authReducer__WEBPACK_IMPORTED_MODULE_1__["getAuthInfoSelector"](state.authInfo);};

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
//# sourceMappingURL=rebind-app.0827be84c8e11eeaeda4.hot-update.js.map