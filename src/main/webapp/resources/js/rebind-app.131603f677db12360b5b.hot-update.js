webpackHotUpdate("rebind-app",{

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
/* harmony import */ var react_media__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-media */ "./node_modules/react-media/esm/react-media.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/Paper/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/Typography/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_GroupAdd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/GroupAdd */ "./node_modules/@material-ui/icons/GroupAdd.js");
/* harmony import */ var _material_ui_icons_GroupAdd__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_GroupAdd__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _LandingPageUIStyles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./LandingPageUIStyles */ "./src/pages/home/LandingPageUIStyles.js");
/* harmony import */ var _reducers_auth_authActionCreators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../reducers/auth/authActionCreators */ "./src/reducers/auth/authActionCreators.js");
/* eslint-disable *//* eslint-enable */ /* order them from smallest to biggest */var MEDIA_SCALE={SMALL:{query:{maxWidth:830},scale:function scale(pixels){return pixels;}},MEDIUM:{query:[{maxWidth:1860,minWidth:830}],scale:function scale(pixels){return"".concat(pixels*2,"px");}}};var ScalableLandingView=function ScalableLandingView(_ref){var classes=_ref.classes,scale=_ref.scale,register=_ref.register;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_5___default.a,{className:classes.root},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7___default.a,{style:{fontSize:scale(_LandingPageUIStyles__WEBPACK_IMPORTED_MODULE_10__["default"].display1.fontSize)},variant:"display1",color:"inherit",component:"h1"},"Rebind"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7___default.a,{style:{fontSize:scale(_LandingPageUIStyles__WEBPACK_IMPORTED_MODULE_10__["default"].display2.fontSize)},variant:"display2",color:"inherit",component:"p"},"is a project that brings the world closer together by making it simple to connect with anyone.",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null),"This is achieved by empowering the users to present themselves to everyone with just one word.",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null),"It is a cloud electronic contact book that is tailored to the natural way of human networking."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"],{to:"/register"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default.a,{style:{fontSize:scale(_LandingPageUIStyles__WEBPACK_IMPORTED_MODULE_10__["default"].button.fontSize),height:scale(_LandingPageUIStyles__WEBPACK_IMPORTED_MODULE_10__["default"].button.height),width:scale(_LandingPageUIStyles__WEBPACK_IMPORTED_MODULE_10__["default"].button.width)},size:"medium",variant:"contained",color:"primary",className:classes.button,onClick:function onClick(){return register();}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_GroupAdd__WEBPACK_IMPORTED_MODULE_9___default.a,{color:"secondary",className:classes.icon,style:{fontSize:scale(_LandingPageUIStyles__WEBPACK_IMPORTED_MODULE_10__["default"].icon.fontSize)}}),"Register")));};ScalableLandingView.propTypes={classes:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,register:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,scale:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired};var LandingPageUI=function LandingPageUI(_ref2){var classes=_ref2.classes,openRegisterPage=_ref2.openRegisterPage;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_media__WEBPACK_IMPORTED_MODULE_2__["default"],{query:MEDIA_SCALE.SMALL.query},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ScalableLandingView,{classes:classes,scale:MEDIA_SCALE.SMALL.scale,register:openRegisterPage})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_media__WEBPACK_IMPORTED_MODULE_2__["default"],{query:MEDIA_SCALE.MEDIUM.query},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ScalableLandingView,{classes:classes,scale:MEDIA_SCALE.MEDIUM.scale,register:openRegisterPage})));};LandingPageUI.propTypes={classes:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,openRegisterPage:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired};var StyledLandingPageUI=Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["withStyles"])(_LandingPageUIStyles__WEBPACK_IMPORTED_MODULE_10__["default"])(LandingPageUI);var mapStateToProps=function mapStateToProps(){return{};};var mapDispatchToProps=function mapDispatchToProps(dispatch){return{openRegisterPage:function openRegisterPage(){return dispatch(Object(_reducers_auth_authActionCreators__WEBPACK_IMPORTED_MODULE_11__["openRegisterPageActionCreator"])());}};};var ReduxLandingPageUI=Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps,mapDispatchToProps)(StyledLandingPageUI);/* harmony default export */ __webpack_exports__["default"] = (ReduxLandingPageUI);

/***/ }),

/***/ "./src/reducers/auth/authActionCreators.js":
/*!*************************************************!*\
  !*** ./src/reducers/auth/authActionCreators.js ***!
  \*************************************************/
/*! exports provided: t, REQUEST_REGISTER_PAGE, openRegisterPageActionCreator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REQUEST_REGISTER_PAGE", function() { return REQUEST_REGISTER_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openRegisterPageActionCreator", function() { return openRegisterPageActionCreator; });
var t=function t(){return null;};var REQUEST_REGISTER_PAGE='REQUEST_REGISTER_PAGE';var openRegisterPageActionCreator=function openRegisterPageActionCreator(){return{type:REQUEST_REGISTER_PAGE,payload:{logged:true,isRegistering:true}};};

/***/ })

})
//# sourceMappingURL=rebind-app.131603f677db12360b5b.hot-update.js.map