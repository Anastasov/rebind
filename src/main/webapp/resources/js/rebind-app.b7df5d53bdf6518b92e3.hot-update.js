webpackHotUpdate("rebind-app",{

/***/ "./node_modules/@material-ui/icons/GroupAdd.js":
/*!*****************************************************!*\
  !*** ./node_modules/@material-ui/icons/GroupAdd.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)(_react.default.createElement(_react.default.Fragment, null, _react.default.createElement("path", {
  fill: "none",
  d: "M0 0h24v24H0z"
}), _react.default.createElement("path", {
  d: "M8 10H5V7H3v3H0v2h3v3h2v-3h3v-2zm10 1c1.66 0 2.99-1.34 2.99-3S19.66 5 18 5c-.32 0-.63.05-.91.14.57.81.9 1.79.9 2.86s-.34 2.04-.9 2.86c.28.09.59.14.91.14zm-5 0c1.66 0 2.99-1.34 2.99-3S14.66 5 13 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm6.62 2.16c.83.73 1.38 1.66 1.38 2.84v2h3v-2c0-1.54-2.37-2.49-4.38-2.84zM13 13c-2 0-6 1-6 3v2h12v-2c0-2-4-3-6-3z"
})), 'GroupAdd');

exports.default = _default;

/***/ }),

/***/ "./src/pages/home/LandingPageUI.jsx":
/*!******************************************!*\
  !*** ./src/pages/home/LandingPageUI.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/Paper/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/Typography/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_GroupAdd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/GroupAdd */ "./node_modules/@material-ui/icons/GroupAdd.js");
/* harmony import */ var _material_ui_icons_GroupAdd__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_GroupAdd__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _LandingPageUIStyles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./LandingPageUIStyles */ "./src/pages/home/LandingPageUIStyles.js");
/* harmony import */ var _reducers_auth_authActionCreators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../reducers/auth/authActionCreators */ "./src/reducers/auth/authActionCreators.js");
/* harmony import */ var _components_auth_AuthModalContainer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/auth/AuthModalContainer */ "./src/components/auth/AuthModalContainer.jsx");
/* harmony import */ var _reducers_rootReducer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../reducers/rootReducer */ "./src/reducers/rootReducer.js");
/* eslint-disable *//* eslint-enable */ /* order them from smallest to biggest */var MEDIA_SCALE={SMALL:{query:{maxWidth:830},scale:function scale(pixels){return pixels;}},MEDIUM:{query:[{maxWidth:1860,minWidth:830}],scale:function scale(pixels){return"".concat(pixels*2,"px");}}};var ScalableLandingView=function ScalableLandingView(_ref){var classes=_ref.classes,scale=_ref.scale,register=_ref.register;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:{backgroundImage:'url("../../assets/home-page.jpg")',backgroundSize:'cover',backgroundPosition:'center center',position:'relative',top:0,bottom:0,height:'100vh',zIndex:-10}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4___default.a,{className:classes.root},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a,{style:{fontSize:scale(_LandingPageUIStyles__WEBPACK_IMPORTED_MODULE_9__["default"].display1.fontSize)},variant:"display1",color:"inherit",component:"h1"},"Rebind"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a,{style:{fontSize:scale(_LandingPageUIStyles__WEBPACK_IMPORTED_MODULE_9__["default"].display2.fontSize)},variant:"display2",color:"inherit",component:"p"},"is a project that brings the world closer together by making it simple to connect with anyone.",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null),"This is achieved by empowering the users to present themselves to everyone with just one word.",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null),"It is a cloud electronic contact book that is tailored to the natural way of human networking."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default.a,{style:{fontSize:scale(_LandingPageUIStyles__WEBPACK_IMPORTED_MODULE_9__["default"].button.fontSize),height:scale(_LandingPageUIStyles__WEBPACK_IMPORTED_MODULE_9__["default"].button.height),width:scale(_LandingPageUIStyles__WEBPACK_IMPORTED_MODULE_9__["default"].button.width)},size:"medium",variant:"contained",color:"primary",className:classes.button,onClick:function onClick(event){event.preventDefault();register();}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_GroupAdd__WEBPACK_IMPORTED_MODULE_8___default.a,{color:"secondary",className:classes.icon,style:{fontSize:scale(_LandingPageUIStyles__WEBPACK_IMPORTED_MODULE_9__["default"].icon.fontSize)}}),"Register")));};ScalableLandingView.propTypes={classes:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,register:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,scale:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired};var LandingPageUI=function LandingPageUI(_ref2){var classes=_ref2.classes,useSmallScale=_ref2.useSmallScale,authInfo=_ref2.authInfo,openRegisterPage=_ref2.openRegisterPage;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"],null,useSmallScale?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ScalableLandingView,{classes:classes,scale:MEDIA_SCALE.SMALL.scale,register:openRegisterPage}):react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ScalableLandingView,{classes:classes,scale:MEDIA_SCALE.MEDIUM.scale,register:openRegisterPage}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_auth_AuthModalContainer__WEBPACK_IMPORTED_MODULE_11__["default"],{open:authInfo.isRegistering||authInfo.isLogging}));};LandingPageUI.propTypes={useSmallScale:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,authInfo:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,classes:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,openRegisterPage:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired};var StyledLandingPageUI=Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["withStyles"])(_LandingPageUIStyles__WEBPACK_IMPORTED_MODULE_9__["default"])(LandingPageUI);var mapStateToProps=function mapStateToProps(state){return{authInfo:Object(_reducers_rootReducer__WEBPACK_IMPORTED_MODULE_12__["getAuthInfoSelector"])(state)};};var mapDispatchToProps=function mapDispatchToProps(dispatch){return{openRegisterPage:function openRegisterPage(){return dispatch(Object(_reducers_auth_authActionCreators__WEBPACK_IMPORTED_MODULE_10__["openRegisterPageActionCreator"])());}};};var ReduxLandingPageUI=Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps,mapDispatchToProps)(StyledLandingPageUI);/* harmony default export */ __webpack_exports__["default"] = (ReduxLandingPageUI);

/***/ }),

/***/ "./src/pages/home/LandingPageUIStyles.js":
/*!***********************************************!*\
  !*** ./src/pages/home/LandingPageUIStyles.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_ReBind__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/ReBind */ "./src/assets/ReBind.js");
var styles={display1:{fontSize:75},display2:{fontSize:16},button:{marginTop:'5%',fontSize:30,height:60,width:250},icon:{fontSize:45,margin:'15px'},root:{color:_assets_ReBind__WEBPACK_IMPORTED_MODULE_0__["default"].THEME.palette.primary.main,backgroundColor:_assets_ReBind__WEBPACK_IMPORTED_MODULE_0__["default"].THEME.palette.primary.contrastText,paddingTop:'70px',height:'1000px'},card:{color:_assets_ReBind__WEBPACK_IMPORTED_MODULE_0__["default"].THEME.palette.primary.contrastText,backgroundColor:_assets_ReBind__WEBPACK_IMPORTED_MODULE_0__["default"].THEME.palette.primary.main,marginLeft:100},media:{height:140}};/* harmony default export */ __webpack_exports__["default"] = (styles);

/***/ })

})
//# sourceMappingURL=rebind-app.b7df5d53bdf6518b92e3.hot-update.js.map