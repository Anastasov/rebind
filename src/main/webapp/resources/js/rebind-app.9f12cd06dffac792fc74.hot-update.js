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
function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};var ownKeys=Object.keys(source);if(typeof Object.getOwnPropertySymbols==='function'){ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable;}));}ownKeys.forEach(function(key){_defineProperty(target,key,source[key]);});}return target;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}var authReducer=function authReducer(state,action){var type=action.type,payload=action.payload;switch(type){case _authActionCreators__WEBPACK_IMPORTED_MODULE_1__["HANDLE_REGISTER"]:console.info('Register payload:',payload);return Object(_util_ObjectUtils__WEBPACK_IMPORTED_MODULE_0__["assign"])(state,_objectSpread({},payload));case _authActionCreators__WEBPACK_IMPORTED_MODULE_1__["REQUEST_REGISTER_PAGE"]:case _authActionCreators__WEBPACK_IMPORTED_MODULE_1__["SET_USERNAME_INPUT"]:case _authActionCreators__WEBPACK_IMPORTED_MODULE_1__["SET_PASSWORD_INPUT"]:case _authActionCreators__WEBPACK_IMPORTED_MODULE_1__["SET_PASSWORD_VISIBILITY"]:case _authActionCreators__WEBPACK_IMPORTED_MODULE_1__["USER_REGISTERED_SUCC"]:case'SHOW_USER_MENU':case'HIDE_USER_MENU':return Object(_util_ObjectUtils__WEBPACK_IMPORTED_MODULE_0__["assign"])(state,_objectSpread({},payload));default:return Object(_util_ObjectUtils__WEBPACK_IMPORTED_MODULE_0__["assign"])(state);}};/* harmony default export */ __webpack_exports__["default"] = (authReducer);var getAuthInfoSelector=function getAuthInfoSelector(stateAuthInfo){// do some filtering of state and
// return new state
console.log(stateAuthInfo);return stateAuthInfo;};

/***/ })

})
//# sourceMappingURL=rebind-app.9f12cd06dffac792fc74.hot-update.js.map