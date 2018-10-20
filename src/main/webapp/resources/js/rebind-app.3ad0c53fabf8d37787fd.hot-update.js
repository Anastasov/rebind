webpackHotUpdate("rebind-app",{

/***/ "./src/components/auth/AuthModalContainer.jsx":
/*!****************************************************!*\
  !*** ./src/components/auth/AuthModalContainer.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _AuthModalContainerStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AuthModalContainerStyles */ "./src/components/auth/AuthModalContainerStyles.js");
/* harmony import */ var _pages_auth_RegisterPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pages/auth/RegisterPage */ "./src/pages/auth/RegisterPage.jsx");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/Dialog/index.js");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "./node_modules/@material-ui/core/DialogTitle/index.js");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_withMobileDialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/withMobileDialog */ "./node_modules/@material-ui/core/withMobileDialog/index.js");
/* harmony import */ var _material_ui_core_withMobileDialog__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_withMobileDialog__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _reducers_rootReducer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../reducers/rootReducer */ "./src/reducers/rootReducer.js");
/* harmony import */ var _reducers_auth_authActionCreators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../reducers/auth/authActionCreators */ "./src/reducers/auth/authActionCreators.js");
function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass);}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}/* eslint-disable *//* eslint-enable */var AuthModalContainer=/*#__PURE__*/function(_Component){_inherits(AuthModalContainer,_Component);function AuthModalContainer(){_classCallCheck(this,AuthModalContainer);return _possibleConstructorReturn(this,_getPrototypeOf(AuthModalContainer).apply(this,arguments));}_createClass(AuthModalContainer,[{key:"render",value:function render(){var _this$props=this.props,classes=_this$props.classes,open=_this$props.open,authInfo=_this$props.authInfo,fullScreen=_this$props.fullScreen;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_6___default.a// disableBackdropClick
// disableEscapeKeyDown
,{fullScreen:fullScreen,open:open,"aria-labelledby":"authentication-title",color:"inherit"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_7___default.a,{className:classes.auth,id:"authentication-title"},authInfo.isRegistering?_pages_auth_RegisterPage__WEBPACK_IMPORTED_MODULE_5__["PAGE_NAME"]:'Login'),authInfo.isRegistering&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_auth_RegisterPage__WEBPACK_IMPORTED_MODULE_5__["default"],null));}}]);return AuthModalContainer;}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);_defineProperty(AuthModalContainer,"defaultProps",{open:false});_defineProperty(AuthModalContainer,"propTypes",{open:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,authInfo:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,closeAuthenticationWindow:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired});AuthModalContainer.propTypes={fullScreen:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,classes:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired};// exports injections
var StyledAuthModalContainer=Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["withStyles"])(_AuthModalContainerStyles__WEBPACK_IMPORTED_MODULE_4__["default"])(AuthModalContainer);var MediaAuthModalContainer=_material_ui_core_withMobileDialog__WEBPACK_IMPORTED_MODULE_8___default()()(StyledAuthModalContainer);var mapStateToProps=function mapStateToProps(state){return{authInfo:Object(_reducers_rootReducer__WEBPACK_IMPORTED_MODULE_9__["getAuthInfoSelector"])(state)};};var mapDispatchToProps=function mapDispatchToProps(dispatch){return{closeAuthenticationWindow:function closeAuthenticationWindow(){return dispatch(Object(_reducers_auth_authActionCreators__WEBPACK_IMPORTED_MODULE_10__["handleRegisterActionCreator"])({}));}};};var ReduxAuthModalContainer=Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps,mapDispatchToProps)(MediaAuthModalContainer);/* harmony default export */ __webpack_exports__["default"] = (ReduxAuthModalContainer);

/***/ })

})
//# sourceMappingURL=rebind-app.3ad0c53fabf8d37787fd.hot-update.js.map