webpackHotUpdate("rebind-app",{

/***/ "./src/api/user-api.js":
/*!*****************************!*\
  !*** ./src/api/user-api.js ***!
  \*****************************/
/*! exports provided: registerNewUser, login */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerNewUser", function() { return registerNewUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
var registerNewUser=function registerNewUser(userCredentials){return fetch('/signUp',{method:'POST',mode:'cors',cache:'no-cache',credentials:'same-origin',headers:{'Content-Type':'application/json; charset=utf-8'},redirect:'follow',// manual, *follow, error
referrer:'no-referrer',// no-referrer, *client
body:JSON.stringify(userCredentials)// body data type must match "Content-Type" header
}).then(function(response){console.log(response);return response.json();});};var login=function login(userCredentials){return fetch('/login',{method:'POST',mode:'cors',cache:'no-cache',credentials:'same-origin',headers:{'Content-Type':'application/json; charset=utf-8'},redirect:'follow',// manual, *follow, error
referrer:'no-referrer',// no-referrer, *client
body:JSON.stringify(userCredentials)// body data type must match "Content-Type" header
}).then(function(response){console.log(response);return response.json();});};

/***/ }),

/***/ "./src/reducers/auth/authActionCreators.js":
/*!*************************************************!*\
  !*** ./src/reducers/auth/authActionCreators.js ***!
  \*************************************************/
/*! exports provided: SET_USERNAME_INPUT, setUsernameActionCreator, SET_PASSWORD_INPUT, setPasswordActionCreator, SET_PASSWORD_VISIBILITY, setPasswordVisibilityActionCreator, USER_AUTHENTHICATED_SUCC, loginUser, SEND_REGISTER_DATA, sendRegisterDataActionCreator, SEND_LOGIN_DATA, sendLoginDataActionCreator, handleRegisterActionCreator, handleLoginActionCreator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_USERNAME_INPUT", function() { return SET_USERNAME_INPUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUsernameActionCreator", function() { return setUsernameActionCreator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_PASSWORD_INPUT", function() { return SET_PASSWORD_INPUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPasswordActionCreator", function() { return setPasswordActionCreator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_PASSWORD_VISIBILITY", function() { return SET_PASSWORD_VISIBILITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPasswordVisibilityActionCreator", function() { return setPasswordVisibilityActionCreator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_AUTHENTHICATED_SUCC", function() { return USER_AUTHENTHICATED_SUCC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginUser", function() { return loginUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEND_REGISTER_DATA", function() { return SEND_REGISTER_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendRegisterDataActionCreator", function() { return sendRegisterDataActionCreator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEND_LOGIN_DATA", function() { return SEND_LOGIN_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendLoginDataActionCreator", function() { return sendLoginDataActionCreator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleRegisterActionCreator", function() { return handleRegisterActionCreator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleLoginActionCreator", function() { return handleLoginActionCreator; });
/* harmony import */ var _api_user_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/user-api */ "./src/api/user-api.js");
var SET_USERNAME_INPUT='SET_USERNAME_INPUT';var setUsernameActionCreator=function setUsernameActionCreator(username){return{type:SET_USERNAME_INPUT,payload:{username:username||''}};};var SET_PASSWORD_INPUT='SET_PASSWORD_INPUT';var setPasswordActionCreator=function setPasswordActionCreator(password){return{type:SET_PASSWORD_INPUT,payload:{password:password||''}};};var SET_PASSWORD_VISIBILITY='SET_PASSWORD_VISIBILITY';var setPasswordVisibilityActionCreator=function setPasswordVisibilityActionCreator(isPasswordVisible){return{type:SET_PASSWORD_VISIBILITY,payload:{isPasswordVisible:isPasswordVisible}};};var USER_AUTHENTHICATED_SUCC='USER_AUTHENTHICATED_SUCC';var loginUser=function loginUser(jwToken){return{type:USER_AUTHENTHICATED_SUCC,payload:{jwToken:jwToken}};};var SEND_REGISTER_DATA='SEND_REGISTER_DATA';var sendRegisterDataActionCreator=function sendRegisterDataActionCreator(){return{type:SEND_REGISTER_DATA,payload:{waitingServerAuthInfo:true}};};var SEND_LOGIN_DATA='SEND_LOGIN_DATA';var sendLoginDataActionCreator=function sendLoginDataActionCreator(){return{type:SEND_LOGIN_DATA,payload:{waitingServerAuthInfo:true}};};var handleRegisterActionCreator=function handleRegisterActionCreator(user){return function(dispatch){dispatch(sendRegisterDataActionCreator());_api_user_api__WEBPACK_IMPORTED_MODULE_0__["registerNewUser"](user).then(function(authResponse){if(authResponse.isOk){dispatch(loginUser(authResponse.token));}}).catch(function(error){return console.log(error);});};};var handleLoginActionCreator=function handleLoginActionCreator(user){return function(dispatch){dispatch(sendLoginDataActionCreator());_api_user_api__WEBPACK_IMPORTED_MODULE_0__["login"](user).then(function(authResponse){if(authResponse.isOk){dispatch(loginUser(authResponse.token));}}).catch(function(error){return console.log(error);});};};

/***/ })

})
//# sourceMappingURL=rebind-app.b3badcbd7ffd622d20eb.hot-update.js.map