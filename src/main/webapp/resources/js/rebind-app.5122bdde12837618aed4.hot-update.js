webpackHotUpdate("rebind-app",{

/***/ "./src/pages/auth/RegisterPage.jsx":
/*!*****************************************!*\
  !*** ./src/pages/auth/RegisterPage.jsx ***!
  \*****************************************/
/*! exports provided: PAGE_NAME, default, Buttons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGE_NAME", function() { return PAGE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Buttons", function() { return Buttons; });
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
/* harmony import */ var _RegisterPageStyles__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./RegisterPageStyles */ "./src/pages/auth/RegisterPageStyles.js");
function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return _extends.apply(this,arguments);}/* eslint-disable *//* eslint-enable */var PAGE_NAME='Sign up';var FieldRenderer=function FieldRenderer(_ref){var input=_ref.input,type=_ref.type,label=_ref.label,placeholder=_ref.placeholder,className=_ref.className,value=_ref.value,onChange=_ref.onChange,InputProps=_ref.InputProps;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_13___default.a,_extends({},input,{fullWidth:true,color:"inherit",type:type,label:label,placeholder:placeholder,className:className,value:value,onChange:onChange,InputProps:InputProps}));};var RegisterPageComponent=function RegisterPageComponent(_ref2){var classes=_ref2.classes,authInfo=_ref2.authInfo,togglePasswordVisibility=_ref2.togglePasswordVisibility;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_9___default.a,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_10___default.a,null,"to continue with ReBind."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_3__["Field"],{name:"email",type:"email",label:"Email",placeholder:"Enter your Email",className:classes.textField,InputProps:{endAdornment:react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_4___default.a,{position:"end"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_5___default.a,null))},component:FieldRenderer}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_3__["Field"],{name:"password",type:authInfo.isPasswordVisible?'text':'password',label:"Password",placeholder:"Enter your Password",className:classes.textField,InputProps:{endAdornment:react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_4___default.a,{position:"end"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11___default.a,{style:{paddingRight:'0px'},color:"inherit","aria-label":"Toggle password visibility",onClick:function onClick(){return togglePasswordVisibility(!authInfo.isPasswordVisible);}},authInfo.isPasswordVisible?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_6___default.a,null):react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_7___default.a,null)))},component:FieldRenderer}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null)));};RegisterPageComponent.propTypes={classes:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,authInfo:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,togglePasswordVisibility:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired};var RegisterPageForm=Object(redux_form__WEBPACK_IMPORTED_MODULE_3__["reduxForm"])({form:'register'})(RegisterPageComponent);var StyledRegisterPageForm=Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_14__["withStyles"])(_RegisterPageStyles__WEBPACK_IMPORTED_MODULE_17__["default"])(RegisterPageForm);var mapStateToContentProps=function mapStateToContentProps(state){return{authInfo:Object(_reducers_rootReducer__WEBPACK_IMPORTED_MODULE_15__["getAuthInfoSelector"])(state)};};var mapDispatchToContentProps=function mapDispatchToContentProps(dispatch){return{togglePasswordVisibility:function togglePasswordVisibility(isVisible){return dispatch(Object(_reducers_auth_authActionCreators__WEBPACK_IMPORTED_MODULE_16__["setPasswordVisibilityActionCreator"])(isVisible));}};};var ReduxRegisterPage=Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToContentProps,mapDispatchToContentProps)(StyledRegisterPageForm);/* harmony default export */ __webpack_exports__["default"] = (ReduxRegisterPage);var ButtonsSeagment=function ButtonsSeagment(_ref3){var authInfo=_ref3.authInfo,classes=_ref3.classes,handleRegister=_ref3.handleRegister;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_8___default.a,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12___default.a,{label:"Submit",style:_RegisterPageStyles__WEBPACK_IMPORTED_MODULE_17__["default"],variant:"contained",color:"primary",className:classes.button,onClick:function onClick(){return handleRegister(authInfo);}},"Register"));};ButtonsSeagment.defaultProps={authInfo:{username:'',password:''}};ButtonsSeagment.propTypes={classes:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,authInfo:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,handleRegister:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired};ButtonsSeagment=Object(redux_form__WEBPACK_IMPORTED_MODULE_3__["reduxForm"])({form:'register'})(ButtonsSeagment);ButtonsSeagment=Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_14__["withStyles"])(_RegisterPageStyles__WEBPACK_IMPORTED_MODULE_17__["default"])(ButtonsSeagment);var mapStateToButtonsProps=function mapStateToButtonsProps(state){return{authInfo:Object(_reducers_rootReducer__WEBPACK_IMPORTED_MODULE_15__["getAuthInfoSelector"])(state)};};var mapDispatchToButtonsProps=function mapDispatchToButtonsProps(dispatch){return{handleRegister:function handleRegister(authInfo){return dispatch(Object(_reducers_auth_authActionCreators__WEBPACK_IMPORTED_MODULE_16__["handleRegisterActionCreator"])(authInfo));}};};var Buttons=Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToButtonsProps,mapDispatchToButtonsProps)(ButtonsSeagment);// <div>
// <Navigation />
// <Card className={classes.root}>
//   <TextField
//     color="inherit"
//     type="email"
//     label="Email"
//     placeholder="Enter your Email"
//     className={classes.textField}
//     onChange={event => setUsername(event.target.value)}
//   />
//   <br/>
//   <TextField
//     color="inherit"
//     type="password"
//     label="Password"
//     placeholder="Enter your Password"
//     className={classes.textField}
//     onChange={event => setPassword(event.target.value)}
//   />
//   <br/>
//   <Button
//     label="Submit"
//     style={styles}
//     variant="button"
//     color="primary"
//     className={classes.button}
//     onClick={() => handleRegister(authInfo)}
//   >
//     Register
//   </Button>
// </Card>
// </div>

/***/ })

})
//# sourceMappingURL=rebind-app.5122bdde12837618aed4.hot-update.js.map