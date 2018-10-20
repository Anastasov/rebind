webpackHotUpdate("rebind-app",{

/***/ "./src/reducers/authReducer.js":
/*!*************************************!*\
  !*** ./src/reducers/authReducer.js ***!
  \*************************************/
/*! exports provided: default, getAuthInfoSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAuthInfoSelector", function() { return getAuthInfoSelector; });
/* harmony import */ var _util_ObjectUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/ObjectUtils */ "./src/util/ObjectUtils.js");
var authReducer=function authReducer(state,action){var type=action.type;switch(type){case'REQUEST_REGISTER_PAGE':return Object(_util_ObjectUtils__WEBPACK_IMPORTED_MODULE_0__["assign"])(state,{authInfo:{logged:false}});case'SHOW_USER_MENU':return Object(_util_ObjectUtils__WEBPACK_IMPORTED_MODULE_0__["assign"])(state,{authInfo:{logged:true}});default:return Object(_util_ObjectUtils__WEBPACK_IMPORTED_MODULE_0__["assign"])(state);}};/* harmony default export */ __webpack_exports__["default"] = (authReducer);var getAuthInfoSelector=function getAuthInfoSelector(stateAuthInfo){// do some filtering of state and
// return new state
console.log(stateAuthInfo);};

/***/ })

})
//# sourceMappingURL=rebind-app.18c4eac6ed49778e97e7.hot-update.js.map