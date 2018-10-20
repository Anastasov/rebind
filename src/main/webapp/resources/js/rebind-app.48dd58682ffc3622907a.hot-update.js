webpackHotUpdate("rebind-app",{

/***/ "./src/pages/auth/RegisterPage.jsx":
/*!*****************************************!*\
  !*** ./src/pages/auth/RegisterPage.jsx ***!
  \*****************************************/
/*! exports provided: PAGE_NAME, Content, Buttons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGE_NAME", function() { return PAGE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Content", function() { return Content; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Buttons", function() { return Buttons; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/InputAdornment */ "./node_modules/@material-ui/core/InputAdornment/index.js");
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Email */ "./node_modules/@material-ui/icons/Email.js");
/* harmony import */ var _material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Visibility */ "./node_modules/@material-ui/icons/Visibility.js");
/* harmony import */ var _material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/VisibilityOff */ "./node_modules/@material-ui/icons/VisibilityOff.js");
/* harmony import */ var _material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "./node_modules/@material-ui/core/DialogActions/index.js");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/DialogContent/index.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/DialogContentText */ "./node_modules/@material-ui/core/DialogContentText/index.js");
/* harmony import */ var _material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/IconButton/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/TextField/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _reducers_rootReducer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../reducers/rootReducer */ "./src/reducers/rootReducer.js");
/* harmony import */ var _reducers_auth_authActionCreators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../reducers/auth/authActionCreators */ "./src/reducers/auth/authActionCreators.js");
/* harmony import */ var _RegisterPageStyles__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./RegisterPageStyles */ "./src/pages/auth/RegisterPageStyles.js");
var _this=undefined;/* eslint-disable *//* eslint-enable */var PAGE_NAME='Sign up';var ContentSeagment=function ContentSeagment(_ref){var classes=_ref.classes,setUsername=_ref.setUsername,setPassword=_ref.setPassword,togglePasswordVisibility=_ref.togglePasswordVisibility;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_8___default.a,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_9___default.a,null,"to continue with ReBind."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_12___default.a,{color:"inherit",type:"email",label:"Email",placeholder:"Enter your Email",className:classes.textField,onChange:function onChange(event){return setUsername(event.target.value);},InputProps:{endAdornment:react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_3___default.a,{position:"end"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_4___default.a,null))}}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_12___default.a,{color:"inherit",type:"password",label:"Password",placeholder:"Enter your Password",className:classes.textField,onChange:function onChange(event){return setPassword(event.target.value);},endAdornment:react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_3___default.a,{position:"end"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10___default.a,{"aria-label":"Toggle password visibility",onClick:_this.handleClickShowPassword},_this.state.showPassword?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_6___default.a,null):react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_5___default.a,null)))}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null));};ContentSeagment.propTypes={classes:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,setUsername:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,setPassword:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,togglePasswordVisibility:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired};var StyledContent=Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_13__["withStyles"])(_RegisterPageStyles__WEBPACK_IMPORTED_MODULE_16__["default"])(ContentSeagment);var mapStateToContentProps=function mapStateToContentProps(){return{};};var mapDispatchToContentProps=function mapDispatchToContentProps(dispatch){return{setUsername:function setUsername(username){return dispatch(Object(_reducers_auth_authActionCreators__WEBPACK_IMPORTED_MODULE_15__["setUsernameActionCreator"])(username));},setPassword:function setPassword(password){return dispatch(Object(_reducers_auth_authActionCreators__WEBPACK_IMPORTED_MODULE_15__["setPasswordActionCreator"])(password));},togglePasswordVisibility:function togglePasswordVisibility(isVisible){return dispatch(Object(_reducers_auth_authActionCreators__WEBPACK_IMPORTED_MODULE_15__["setPasswordVisibilityActionCreator"])(isVisible));}};};var Content=Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToContentProps,mapDispatchToContentProps)(StyledContent);var ButtonsSeagment=function ButtonsSeagment(_ref2){var authInfo=_ref2.authInfo,classes=_ref2.classes,handleRegister=_ref2.handleRegister;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_7___default.a,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11___default.a,{label:"Submit",style:_RegisterPageStyles__WEBPACK_IMPORTED_MODULE_16__["default"],variant:"contained",color:"primary",className:classes.button,onClick:function onClick(){return handleRegister(authInfo);}},"Register"));};ButtonsSeagment.defaultProps={authInfo:{username:'',password:''}};ButtonsSeagment.propTypes={classes:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,authInfo:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,handleRegister:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired};var StyledButtons=Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_13__["withStyles"])(_RegisterPageStyles__WEBPACK_IMPORTED_MODULE_16__["default"])(ButtonsSeagment);var mapStateToButtonsProps=function mapStateToButtonsProps(state){return{authInfo:Object(_reducers_rootReducer__WEBPACK_IMPORTED_MODULE_14__["getAuthInfoSelector"])(state)};};var mapDispatchToButtonsProps=function mapDispatchToButtonsProps(dispatch){return{handleRegister:function handleRegister(authInfo){return dispatch(Object(_reducers_auth_authActionCreators__WEBPACK_IMPORTED_MODULE_15__["handleRegisterActionCreator"])(authInfo));}};};var Buttons=Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToButtonsProps,mapDispatchToButtonsProps)(StyledButtons);// <div>
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
//# sourceMappingURL=rebind-app.48dd58682ffc3622907a.hot-update.js.map