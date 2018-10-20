webpackHotUpdate("rebind-app",{

/***/ "./src/api/register.js":
/*!*****************************!*\
  !*** ./src/api/register.js ***!
  \*****************************/
/*! exports provided: a, registerNewUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerNewUser", function() { return registerNewUser; });
var a=5;var registerNewUser=function registerNewUser(_ref){var username=_ref.username,password=_ref.password;return fetch("/user/add?username=".concat(username,"&password=").concat(password),{method:'POST',mode:'cors',cache:'no-cache',credentials:'same-origin',headers:{'Content-Type':'application/json; charset=utf-8'},redirect:'follow',// manual, *follow, error
referrer:'no-referrer',// no-referrer, *client
body:JSON.stringify({username:username,password:password})// body data type must match "Content-Type" header
}).then(function(response){console.log(response);return response.json();});};

/***/ })

})
//# sourceMappingURL=rebind-app.e5f89d82c662ac65129a.hot-update.js.map