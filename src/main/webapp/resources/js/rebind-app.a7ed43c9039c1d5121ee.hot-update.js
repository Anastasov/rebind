webpackHotUpdate("rebind-app",{

/***/ "./src/reducers/auth/authActionCreators.js":
/*!*************************************************!*\
  !*** ./src/reducers/auth/authActionCreators.js ***!
  \*************************************************/
/*! exports provided: REQUEST_REGISTER_PAGE, openRegisterPageActionCreator, SET_USERNAME_INPUT, setUsernameActionCreator, SET_PASSWORD_INPUT, setPasswordActionCreator, SET_PASSWORD_VISIBILITY, setPasswordVisibilityActionCreator, USER_REGISTERED_SUCC, loginUser, SEND_REGISTER_DATA, sendRegisterDataActionCreator, handleRegisterActionCreator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REQUEST_REGISTER_PAGE", function() { return REQUEST_REGISTER_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openRegisterPageActionCreator", function() { return openRegisterPageActionCreator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_USERNAME_INPUT", function() { return SET_USERNAME_INPUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUsernameActionCreator", function() { return setUsernameActionCreator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_PASSWORD_INPUT", function() { return SET_PASSWORD_INPUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPasswordActionCreator", function() { return setPasswordActionCreator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_PASSWORD_VISIBILITY", function() { return SET_PASSWORD_VISIBILITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPasswordVisibilityActionCreator", function() { return setPasswordVisibilityActionCreator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_REGISTERED_SUCC", function() { return USER_REGISTERED_SUCC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginUser", function() { return loginUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEND_REGISTER_DATA", function() { return SEND_REGISTER_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendRegisterDataActionCreator", function() { return sendRegisterDataActionCreator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleRegisterActionCreator", function() { return handleRegisterActionCreator; });
/* harmony import */ var _api_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/register */ "./src/api/register.js");
var REQUEST_REGISTER_PAGE='REQUEST_REGISTER_PAGE';var openRegisterPageActionCreator=function openRegisterPageActionCreator(){return{type:REQUEST_REGISTER_PAGE,payload:{isRegistering:true}};};var SET_USERNAME_INPUT='SET_USERNAME_INPUT';var setUsernameActionCreator=function setUsernameActionCreator(username){return{type:SET_USERNAME_INPUT,payload:{username:username||''}};};var SET_PASSWORD_INPUT='SET_PASSWORD_INPUT';var setPasswordActionCreator=function setPasswordActionCreator(password){return{type:SET_PASSWORD_INPUT,payload:{password:password||''}};};var SET_PASSWORD_VISIBILITY='SET_PASSWORD_VISIBILITY';var setPasswordVisibilityActionCreator=function setPasswordVisibilityActionCreator(isPasswordVisible){return{type:SET_PASSWORD_VISIBILITY,payload:{isPasswordVisible:isPasswordVisible}};};var USER_REGISTERED_SUCC='USER_REGISTERED_SUCC';var loginUser=function loginUser(user){return{type:USER_REGISTERED_SUCC,payload:{user:user,isRegistering:false}};};var SEND_REGISTER_DATA='SEND_REGISTER_DATA';var sendRegisterDataActionCreator=function sendRegisterDataActionCreator(){return{type:SEND_REGISTER_DATA,payload:{waitingServerAuthInfo:true}};};var handleRegisterActionCreator=function handleRegisterActionCreator(user){return function(dispatch){dispatch(sendRegisterDataActionCreator());_api_register__WEBPACK_IMPORTED_MODULE_0__["registerNewUser"](user).then(function(registerResponse){return dispatch(loginUser(registerResponse));}).catch(function(error){return console.log(error);});};};

/***/ })

})
//# sourceMappingURL=rebind-app.a7ed43c9039c1d5121ee.hot-update.js.map