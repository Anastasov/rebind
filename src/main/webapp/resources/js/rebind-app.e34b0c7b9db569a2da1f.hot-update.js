webpackHotUpdate("rebind-app",{

/***/ "./src/reducers/modal/modalReducer.js":
/*!********************************************!*\
  !*** ./src/reducers/modal/modalReducer.js ***!
  \********************************************/
/*! exports provided: default, getModalSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getModalSelector", function() { return getModalSelector; });
/* harmony import */ var _util_ObjectUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/ObjectUtils */ "./src/util/ObjectUtils.js");
/* harmony import */ var _modalActionCreators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modalActionCreators */ "./src/reducers/modal/modalActionCreators.js");
function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};var ownKeys=Object.keys(source);if(typeof Object.getOwnPropertySymbols==='function'){ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable;}));}ownKeys.forEach(function(key){_defineProperty(target,key,source[key]);});}return target;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}var modalReducer=function modalReducer(state,action){var type=action.type,payload=action.payload;switch(type){case _modalActionCreators__WEBPACK_IMPORTED_MODULE_1__["SHOW_SIGN_UP_PAGE"]:case _modalActionCreators__WEBPACK_IMPORTED_MODULE_1__["SHOW_LOGIN_MODAL"]:return Object(_util_ObjectUtils__WEBPACK_IMPORTED_MODULE_0__["assign"])(state,_objectSpread({},payload));default:return Object(_util_ObjectUtils__WEBPACK_IMPORTED_MODULE_0__["assign"])(state);}};/* harmony default export */ __webpack_exports__["default"] = (modalReducer);var getModalSelector=function getModalSelector(stateModal){return stateModal;};

/***/ })

})
//# sourceMappingURL=rebind-app.e34b0c7b9db569a2da1f.hot-update.js.map