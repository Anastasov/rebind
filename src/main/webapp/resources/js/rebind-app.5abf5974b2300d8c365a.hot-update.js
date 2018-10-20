webpackHotUpdate("rebind-app",{

/***/ "./src/pages/auth/RegisterPage.jsx":
/*!*****************************************!*\
  !*** ./src/pages/auth/RegisterPage.jsx ***!
  \*****************************************/
/*! exports provided: PAGE_NAME, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGE_NAME", function() { return PAGE_NAME; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/index.js");
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/InputAdornment */ "./node_modules/@material-ui/core/InputAdornment/index.js");
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Email */ "./node_modules/@material-ui/icons/Email.js");
/* harmony import */ var _material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Visibility */ "./node_modules/@material-ui/icons/Visibility.js");
/* harmony import */ var _material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/VisibilityOff */ "./node_modules/@material-ui/icons/VisibilityOff.js");
/* harmony import */ var _material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "./node_modules/@material-ui/core/DialogActions/index.js");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/DialogContent/index.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/DialogContentText */ "./node_modules/@material-ui/core/DialogContentText/index.js");
/* harmony import */ var _material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/IconButton/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/TextField/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _reducers_rootReducer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../reducers/rootReducer */ "./src/reducers/rootReducer.js");
/* harmony import */ var _reducers_auth_authActionCreators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../reducers/auth/authActionCreators */ "./src/reducers/auth/authActionCreators.js");
/* harmony import */ var _reducers_modal_modalActionCreators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../reducers/modal/modalActionCreators */ "./src/reducers/modal/modalActionCreators.js");
/* harmony import */ var sane_email_validation__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! sane-email-validation */ "./node_modules/sane-email-validation/index.js");
/* harmony import */ var sane_email_validation__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(sane_email_validation__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _assets_ux__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../assets/ux */ "./src/assets/ux.js");
/* harmony import */ var _RegisterPageStyles__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./RegisterPageStyles */ "./src/pages/auth/RegisterPageStyles.js");
function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return _extends.apply(this,arguments);}/* eslint-disable *//* eslint-enable */var PAGE_NAME='Sign up';var showError=function showError(meta){return meta.touched&&meta.error;};var FieldRenderer=function FieldRenderer(_ref){var input=_ref.input,meta=_ref.meta,type=_ref.type,label=_ref.label,placeholder=_ref.placeholder,className=_ref.className,value=_ref.value,onChange=_ref.onChange,InputProps=_ref.InputProps;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_13___default.a,_extends({fullWidth:true,color:"inherit",error:showError(meta),type:type,label:showError(meta)?meta.error:label,placeholder:placeholder,className:className,value:value,onChange:onChange,InputProps:InputProps},input));};var passAdornment=function passAdornment(showPassword,toggleShowPassword){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_4___default.a,{position:"end"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11___default.a,{"aria-label":"Toggle password visibility",onClick:function onClick(){return toggleShowPassword(!showPassword);}},showPassword?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_6___default.a,null):react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_7___default.a,null)));};var validate=function validate(values){var errors={};if(!values.email){errors.email=Object(_assets_ux__WEBPACK_IMPORTED_MODULE_19__["formatRequiredThing"])('email');}else if(!sane_email_validation__WEBPACK_IMPORTED_MODULE_18___default()(values.email)){errors.email=Object(_assets_ux__WEBPACK_IMPORTED_MODULE_19__["formatWrongThing"])('email',false);}if(!values.password){errors.password=Object(_assets_ux__WEBPACK_IMPORTED_MODULE_19__["formatRequiredThing"])('password');}if(!values.re_password){errors.re_password=Object(_assets_ux__WEBPACK_IMPORTED_MODULE_19__["formatRequiredThing"])('re-password');}else if(!values.password||values.re_password!==values.password){errors.re_password='Passwords don\'t match';}return errors;};var RegisterPageComponent=function RegisterPageComponent(_ref2){var classes=_ref2.classes,authInfo=_ref2.authInfo,togglePasswordVisibility=_ref2.togglePasswordVisibility,handleRegister=_ref2.handleRegister,openLoginModal=_ref2.openLoginModal,handleSubmit=_ref2.handleSubmit,submitting=_ref2.submitting,valid=_ref2.valid;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_3__["Form"],{onSubmit:handleSubmit(function(values){return handleRegister({username:values.email,password:values.password});})},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_9___default.a,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_10___default.a,null,"to continue with ReBind."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_3__["Field"],{name:"email",type:"email",label:"Email",placeholder:"my-email@mail.com",className:classes.textField,InputProps:{endAdornment:react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_4___default.a,{position:"end"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11___default.a,{disabled:true},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_5___default.a,null)))},component:FieldRenderer}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_3__["Field"],{name:"password",type:authInfo.isPasswordVisible?'text':'password',label:"Password",placeholder:"mySecretPassowrd",className:classes.textField,InputProps:{endAdornment:passAdornment(authInfo.isPasswordVisible,togglePasswordVisibility)},component:FieldRenderer}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_3__["Field"],{name:"re_password",type:authInfo.isPasswordVisible?'text':'password',label:"Re-password",placeholder:"mySecretPassowrd",className:classes.textField,component:FieldRenderer}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null)),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_8___default.a,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12___default.a,{disableRipple:true,onClick:function onClick(){return openLoginModal();},label:"Go to Sign In",style:_RegisterPageStyles__WEBPACK_IMPORTED_MODULE_20__["default"],color:"primary",className:classes.button_alternative,disabled:submitting},"Or, Sign In"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12___default.a,{type:"submit",label:"Sign Up",style:_RegisterPageStyles__WEBPACK_IMPORTED_MODULE_20__["default"],variant:"contained",color:"primary",className:classes.button,disabled:!valid||submitting},"Sign Up")));};RegisterPageComponent.propTypes={classes:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,authInfo:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,togglePasswordVisibility:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,handleRegister:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,openLoginModal:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,handleSubmit:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,submitting:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,valid:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired};var RegisterPageForm=Object(redux_form__WEBPACK_IMPORTED_MODULE_3__["reduxForm"])({form:'register',validate:validate})(RegisterPageComponent);var StyledRegisterPageForm=Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_14__["withStyles"])(_RegisterPageStyles__WEBPACK_IMPORTED_MODULE_20__["default"])(RegisterPageForm);var mapStateToContentProps=function mapStateToContentProps(state){return{authInfo:Object(_reducers_rootReducer__WEBPACK_IMPORTED_MODULE_15__["getAuthInfoSelector"])(state)};};var mapDispatchToContentProps=function mapDispatchToContentProps(dispatch){return{togglePasswordVisibility:function togglePasswordVisibility(isVisible){return dispatch(Object(_reducers_auth_authActionCreators__WEBPACK_IMPORTED_MODULE_16__["setPasswordVisibilityActionCreator"])(isVisible));},handleRegister:function handleRegister(authInfo){return new Promise(function(){return dispatch(Object(_reducers_auth_authActionCreators__WEBPACK_IMPORTED_MODULE_16__["handleRegisterActionCreator"])(authInfo));});},openLoginModal:function openLoginModal(){return dispatch(Object(_reducers_modal_modalActionCreators__WEBPACK_IMPORTED_MODULE_17__["openLoginModalActionCreator"])());}};};var ReduxRegisterPage=Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToContentProps,mapDispatchToContentProps)(StyledRegisterPageForm);/* harmony default export */ __webpack_exports__["default"] = (ReduxRegisterPage);

/***/ })

})
//# sourceMappingURL=rebind-app.5abf5974b2300d8c365a.hot-update.js.map