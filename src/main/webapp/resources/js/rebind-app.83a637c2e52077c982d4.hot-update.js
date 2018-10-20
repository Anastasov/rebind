webpackHotUpdate("rebind-app",{

/***/ "./node_modules/@material-ui/core/DialogActions/DialogActions.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@material-ui/core/DialogActions/DialogActions.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _withStyles = _interopRequireDefault(__webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js"));

var _reactHelpers = __webpack_require__(/*! ../utils/reactHelpers */ "./node_modules/@material-ui/core/utils/reactHelpers.js");

__webpack_require__(/*! ../Button */ "./node_modules/@material-ui/core/Button/index.js");

// So we don't have any override priority issue.
var styles = {
  /* Styles applied to the root element. */
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: '0 0 auto',
    margin: '8px 4px'
  },

  /* Styles applied to the children. */
  action: {
    margin: '0 4px'
  }
};
exports.styles = styles;

function DialogActions(props) {
  var disableActionSpacing = props.disableActionSpacing,
      children = props.children,
      classes = props.classes,
      className = props.className,
      other = (0, _objectWithoutProperties2.default)(props, ["disableActionSpacing", "children", "classes", "className"]);
  return _react.default.createElement("div", (0, _extends2.default)({
    className: (0, _classnames.default)(classes.root, className)
  }, other), disableActionSpacing ? children : (0, _reactHelpers.cloneChildrenWithClassName)(children, classes.action));
}

DialogActions.propTypes =  true ? {
  /**
   * The content of the component.
   */
  children: _propTypes.default.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * If `true`, the dialog actions do not have additional margin.
   */
  disableActionSpacing: _propTypes.default.bool
} : undefined;
DialogActions.defaultProps = {
  disableActionSpacing: false
};

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiDialogActions'
})(DialogActions);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/DialogActions/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@material-ui/core/DialogActions/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _DialogActions.default;
  }
});

var _DialogActions = _interopRequireDefault(__webpack_require__(/*! ./DialogActions */ "./node_modules/@material-ui/core/DialogActions/DialogActions.js"));

/***/ }),

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
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "./node_modules/@material-ui/core/DialogActions/index.js");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/DialogContent/index.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/DialogContentText */ "./node_modules/@material-ui/core/DialogContentText/index.js");
/* harmony import */ var _material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/TextField/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _reducers_rootReducer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../reducers/rootReducer */ "./src/reducers/rootReducer.js");
/* harmony import */ var _reducers_auth_authActionCreators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../reducers/auth/authActionCreators */ "./src/reducers/auth/authActionCreators.js");
/* harmony import */ var _RegisterPageStyles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./RegisterPageStyles */ "./src/pages/auth/RegisterPageStyles.js");
/* eslint-disable *//* eslint-enable */var PAGE_NAME='Sign up';var ContentSeagment=function ContentSeagment(_ref){var classes=_ref.classes,setUsername=_ref.setUsername,setPassword=_ref.setPassword;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_4___default.a,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_5___default.a,null,"to enhance ReBind"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7___default.a,{color:"inherit",type:"email",label:"Email",placeholder:"Enter your Email",className:classes.textField,onChange:function onChange(event){return setUsername(event.target.value);}}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7___default.a,{color:"inherit",type:"password",label:"Password",placeholder:"Enter your Password",className:classes.textField,onChange:function onChange(event){return setPassword(event.target.value);}}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null));};ContentSeagment.propTypes={classes:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,setUsername:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,setPassword:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired};var StyledContent=Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["withStyles"])(_RegisterPageStyles__WEBPACK_IMPORTED_MODULE_11__["default"])(ContentSeagment);var mapStateToContentProps=function mapStateToContentProps(){return{};};var mapDispatchToContentProps=function mapDispatchToContentProps(dispatch){return{setUsername:function setUsername(username){return dispatch(Object(_reducers_auth_authActionCreators__WEBPACK_IMPORTED_MODULE_10__["setUsernameActionCreator"])(username));},setPassword:function setPassword(password){return dispatch(Object(_reducers_auth_authActionCreators__WEBPACK_IMPORTED_MODULE_10__["setPasswordActionCreator"])(password));}};};var Content=Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToContentProps,mapDispatchToContentProps)(StyledContent);var ButtonsSeagment=function ButtonsSeagment(_ref2){var authInfo=_ref2.authInfo,classes=_ref2.classes,handleRegister=_ref2.handleRegister;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_3___default.a,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default.a,{label:"Submit",style:_RegisterPageStyles__WEBPACK_IMPORTED_MODULE_11__["default"],variant:"button",color:"primary",className:classes.button,onClick:function onClick(){return handleRegister(authInfo);}},"Register"));};ButtonsSeagment.defaultProps={authInfo:{username:'',password:''}};ButtonsSeagment.propTypes={classes:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,authInfo:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,handleRegister:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired};var StyledButtons=Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["withStyles"])(_RegisterPageStyles__WEBPACK_IMPORTED_MODULE_11__["default"])(ButtonsSeagment);var mapStateToButtonsProps=function mapStateToButtonsProps(state){return{authInfo:Object(_reducers_rootReducer__WEBPACK_IMPORTED_MODULE_9__["getAuthInfoSelector"])(state)};};var mapDispatchToButtonsProps=function mapDispatchToButtonsProps(dispatch){return{handleRegister:function handleRegister(authInfo){return dispatch(Object(_reducers_auth_authActionCreators__WEBPACK_IMPORTED_MODULE_10__["handleRegisterActionCreator"])(authInfo));}};};var Buttons=Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToButtonsProps,mapDispatchToButtonsProps)(StyledButtons);// <div>
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
//# sourceMappingURL=rebind-app.83a637c2e52077c982d4.hot-update.js.map