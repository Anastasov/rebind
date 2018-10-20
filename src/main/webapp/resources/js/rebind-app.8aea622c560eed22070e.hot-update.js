webpackHotUpdate("rebind-app",{

/***/ "./node_modules/@material-ui/core/InputAdornment/InputAdornment.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@material-ui/core/InputAdornment/InputAdornment.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _Typography = _interopRequireDefault(__webpack_require__(/*! ../Typography */ "./node_modules/@material-ui/core/Typography/index.js"));

var _withStyles = _interopRequireDefault(__webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js"));

var styles = {
  /* Styles applied to the root element. */
  root: {
    display: 'flex',
    height: '0.01em',
    // Fix IE 11 flexbox alignment. To remove at some point.
    maxHeight: '2em',
    alignItems: 'center'
  },

  /* Styles applied to the root element if `variant="filled"` */
  filled: {
    '&$positionStart': {
      marginTop: 16
    }
  },

  /* Styles applied to the root element if `position="start"`. */
  positionStart: {
    marginRight: 8
  },

  /* Styles applied to the root element if `position="end"`. */
  positionEnd: {
    marginLeft: 8
  }
};
exports.styles = styles;

function InputAdornment(props) {
  var _classNames;

  var children = props.children,
      Component = props.component,
      classes = props.classes,
      className = props.className,
      disableTypography = props.disableTypography,
      position = props.position,
      variant = props.variant,
      other = (0, _objectWithoutProperties2.default)(props, ["children", "component", "classes", "className", "disableTypography", "position", "variant"]);
  return _react.default.createElement(Component, (0, _extends2.default)({
    className: (0, _classnames.default)(classes.root, (_classNames = {}, (0, _defineProperty2.default)(_classNames, classes.filled, variant === 'filled'), (0, _defineProperty2.default)(_classNames, classes.positionStart, position === 'start'), (0, _defineProperty2.default)(_classNames, classes.positionEnd, position === 'end'), _classNames), className)
  }, other), typeof children === 'string' && !disableTypography ? _react.default.createElement(_Typography.default, {
    color: "textSecondary"
  }, children) : children);
}

InputAdornment.propTypes =  true ? {
  /**
   * The content of the component, normally an `IconButton` or string.
   */
  children: _propTypes.default.node.isRequired,

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
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func, _propTypes.default.object]),

  /**
   * If children is a string then disable wrapping in a Typography component.
   */
  disableTypography: _propTypes.default.bool,

  /**
   * The position this adornment should appear relative to the `Input`.
   */
  position: _propTypes.default.oneOf(['start', 'end']),

  /**
   * The variant to use.
   */
  variant: _propTypes.default.oneOf(['standard', 'outlined', 'filled'])
} : undefined;
InputAdornment.defaultProps = {
  component: 'div',
  disableTypography: false
};

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiInputAdornment'
})(InputAdornment);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/InputAdornment/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/@material-ui/core/InputAdornment/index.js ***!
  \****************************************************************/
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
    return _InputAdornment.default;
  }
});

var _InputAdornment = _interopRequireDefault(__webpack_require__(/*! ./InputAdornment */ "./node_modules/@material-ui/core/InputAdornment/InputAdornment.js"));

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
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/InputAdornment */ "./node_modules/@material-ui/core/InputAdornment/index.js");
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/AccountCircle */ "./node_modules/@material-ui/icons/AccountCircle.js");
/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "./node_modules/@material-ui/core/DialogActions/index.js");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/DialogContent/index.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/DialogContentText */ "./node_modules/@material-ui/core/DialogContentText/index.js");
/* harmony import */ var _material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/TextField/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _reducers_rootReducer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../reducers/rootReducer */ "./src/reducers/rootReducer.js");
/* harmony import */ var _reducers_auth_authActionCreators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../reducers/auth/authActionCreators */ "./src/reducers/auth/authActionCreators.js");
/* harmony import */ var _RegisterPageStyles__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./RegisterPageStyles */ "./src/pages/auth/RegisterPageStyles.js");
/* eslint-disable *//* eslint-enable */var PAGE_NAME='Sign up';var ContentSeagment=function ContentSeagment(_ref){var classes=_ref.classes,setUsername=_ref.setUsername,setPassword=_ref.setPassword;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_6___default.a,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_7___default.a,null,"to continue with ReBind."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9___default.a,{color:"inherit",type:"email",label:"Email",placeholder:"Enter your Email",className:classes.textField,onChange:function onChange(event){return setUsername(event.target.value);},InputProps:{startAdornment:react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_3___default.a,{position:"start"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_4___default.a,null))}}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9___default.a,{color:"inherit",type:"password",label:"Password",placeholder:"Enter your Password",className:classes.textField,onChange:function onChange(event){return setPassword(event.target.value);}}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null));};ContentSeagment.propTypes={classes:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,setUsername:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,setPassword:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired};var StyledContent=Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__["withStyles"])(_RegisterPageStyles__WEBPACK_IMPORTED_MODULE_13__["default"])(ContentSeagment);var mapStateToContentProps=function mapStateToContentProps(){return{};};var mapDispatchToContentProps=function mapDispatchToContentProps(dispatch){return{setUsername:function setUsername(username){return dispatch(Object(_reducers_auth_authActionCreators__WEBPACK_IMPORTED_MODULE_12__["setUsernameActionCreator"])(username));},setPassword:function setPassword(password){return dispatch(Object(_reducers_auth_authActionCreators__WEBPACK_IMPORTED_MODULE_12__["setPasswordActionCreator"])(password));}};};var Content=Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToContentProps,mapDispatchToContentProps)(StyledContent);var ButtonsSeagment=function ButtonsSeagment(_ref2){var authInfo=_ref2.authInfo,classes=_ref2.classes,handleRegister=_ref2.handleRegister;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_5___default.a,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default.a,{label:"Submit",style:_RegisterPageStyles__WEBPACK_IMPORTED_MODULE_13__["default"],variant:"contained",color:"primary",className:classes.button,onClick:function onClick(){return handleRegister(authInfo);}},"Register"));};ButtonsSeagment.defaultProps={authInfo:{username:'',password:''}};ButtonsSeagment.propTypes={classes:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,authInfo:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,handleRegister:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired};var StyledButtons=Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__["withStyles"])(_RegisterPageStyles__WEBPACK_IMPORTED_MODULE_13__["default"])(ButtonsSeagment);var mapStateToButtonsProps=function mapStateToButtonsProps(state){return{authInfo:Object(_reducers_rootReducer__WEBPACK_IMPORTED_MODULE_11__["getAuthInfoSelector"])(state)};};var mapDispatchToButtonsProps=function mapDispatchToButtonsProps(dispatch){return{handleRegister:function handleRegister(authInfo){return dispatch(Object(_reducers_auth_authActionCreators__WEBPACK_IMPORTED_MODULE_12__["handleRegisterActionCreator"])(authInfo));}};};var Buttons=Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToButtonsProps,mapDispatchToButtonsProps)(StyledButtons);// <div>
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
//# sourceMappingURL=rebind-app.8aea622c560eed22070e.hot-update.js.map