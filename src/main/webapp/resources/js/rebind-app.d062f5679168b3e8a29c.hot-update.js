webpackHotUpdate("rebind-app",{

/***/ "./src/assets/ux.js":
/*!**************************!*\
  !*** ./src/assets/ux.js ***!
  \**************************/
/*! exports provided: formatRequiredThing, formatWrongThing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatRequiredThing", function() { return formatRequiredThing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatWrongThing", function() { return formatWrongThing; });
var REQUIRES_AN=['a','e','i','o','u','ho'];var EXCEPTIONS=['eu'];var wordStartsWithOneOf=function wordStartsWithOneOf(word,prefixes){return prefixes.filter(function(prefix){return word.startsWith(prefix);}).length>0;};var startsWithVollow=function startsWithVollow(word){return wordStartsWithOneOf(word,REQUIRES_AN);};var isExceptionToRule=function isExceptionToRule(word){return wordStartsWithOneOf(word,EXCEPTIONS);};var formatRequiredThing=function formatRequiredThing(thing){var word=thing.toLowerCase();var displayAn=startsWithVollow(word)&&!isExceptionToRule(word);return"Please enter ".concat(displayAn?'an':'a'," ").concat(word);};var normalizeNameWord=function normalizeNameWord(word){var firstLetter=word.charAt(0);return word.trim().toLowerCase().replace(firstLetter,firstLetter.toUpperCase());};var formatWrongThing=function formatWrongThing(thing,long){var reason=arguments.length>2&&arguments[2]!==undefined?arguments[2]:'';var word=normalizeNameWord(thing);var reasonMessage=reason?": ".concat(reason):'';return long?"The ".concat(word," you entered seems incorrect").concat(reasonMessage):"".concat(word," is not correct");};

/***/ })

})
//# sourceMappingURL=rebind-app.d062f5679168b3e8a29c.hot-update.js.map