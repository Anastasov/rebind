webpackHotUpdate("rebind-app",{

/***/ "./src/assets/ux.js":
/*!**************************!*\
  !*** ./src/assets/ux.js ***!
  \**************************/
/*! exports provided: formatRequiredThing, a */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatRequiredThing", function() { return formatRequiredThing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return a; });
var REQUIRES_AN=['a','e','i','o','u','ho'];var EXCEPTIONS=['eu'];var wordStartsWithOneOf=function wordStartsWithOneOf(word,prefixes){return prefixes.filter(function(prefix){return word.startsWith(prefix);}).length>0;};var startsWithVollow=function startsWithVollow(word){return wordStartsWithOneOf(word,REQUIRES_AN);};var isExceptionToRule=function isExceptionToRule(word){return wordStartsWithOneOf(word,EXCEPTIONS);};var formatRequiredThing=function formatRequiredThing(fieldName){var word=fieldName.toLowerCase();var displayAn=startsWithVollow(word)&&!isExceptionToRule(word);return"Please enter ".concat(displayAn?'an':'a'," ").concat(word);};var a=5;

/***/ })

})
//# sourceMappingURL=rebind-app.32a45e698a2b8f98fe0c.hot-update.js.map