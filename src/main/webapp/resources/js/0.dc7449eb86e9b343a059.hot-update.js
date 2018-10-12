webpackHotUpdate(0,{"./src/index.jsx":function(e,t,n){"use strict";n.r(t);var r=n("./node_modules/react/index.js"),o=n.n(r),a=n("./node_modules/react-dom/index.js"),i=n.n(a),c=(n("./src/index.css"),n("./node_modules/prop-types/index.js")),l=n.n(c),s=n("./node_modules/@material-ui/core/styles/index.js"),u={PRESENTABLE_NAME:"ReBind",THEME:{palette:{primary:{light:"#484848",main:"#212121",dark:"#000000",contrastText:"#fbd8ca"},secondary:{light:"#fffffd",main:"#fbd8ca",dark:"#c8a799",contrastText:"#212121"}},typography:{useNextVariants:!0,fontFamily:["-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(","),fontWeightMedium:500,body1:{fontWeight:500},subtitle1:{fontSize:12},button:{fontStyle:"italic"}}}},p=n("./node_modules/@material-ui/core/AppBar/index.js"),f=n.n(p),m=n("./node_modules/@material-ui/core/Toolbar/index.js"),d=n.n(m),y=n("./node_modules/@material-ui/core/Typography/index.js"),h=n.n(y),b=n("./node_modules/@material-ui/core/IconButton/index.js"),g=n.n(b),E=n("./node_modules/@material-ui/icons/Menu.js"),v=n.n(E),w=n("./node_modules/@material-ui/icons/AccountCircle.js"),j=n.n(w),O=n("./node_modules/@material-ui/core/MenuItem/index.js"),S=n.n(O),T=n("./node_modules/@material-ui/core/Menu/index.js"),_=n.n(T);function M(e){return(M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function k(e,t){return(k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function C(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function R(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var A={menuTheme:{color:u.THEME.palette.primary.main,backgroundColor:u.THEME.palette.primary.contrastText},root:{flexGrow:1},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20}},L=function(e){function t(){var e,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return R(C(C(n=function(e,t){return!t||"object"!==M(t)&&"function"!=typeof t?C(e):t}(this,(e=P(t)).call.apply(e,[this].concat(o))))),"state",{auth:!0,anchorEl:null}),R(C(C(n)),"handleChange",function(e){n.setState({auth:e.target.checked})}),R(C(C(n)),"handleMenu",function(e){n.setState({anchorEl:e.currentTarget})}),R(C(C(n)),"handleClose",function(){n.setState({anchorEl:null})}),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&k(e,t)}(t,r["Component"]),function(e,t,n){t&&x(e.prototype,t),n&&x(e,n)}(t,[{key:"render",value:function(){var e=this.props.classes,t=this.state,n=t.auth,r=t.anchorEl,a=Boolean(r);return o.a.createElement("div",{className:e.root},o.a.createElement(f.a,{position:"fixed"},o.a.createElement(d.a,null,o.a.createElement(g.a,{className:e.menuButton,color:"inherit","aria-label":"Menu"},o.a.createElement(v.a,null)),o.a.createElement(h.a,{variant:"title",color:"inherit",className:e.grow},u.PRESENTABLE_NAME),n&&o.a.createElement("div",null,o.a.createElement(g.a,{"aria-owns":a?"menu-appbar":null,"aria-haspopup":"true",onClick:this.handleMenu,color:"inherit"},o.a.createElement(j.a,null)),o.a.createElement(_.a,{id:"menu-appbar",classes:{paper:e.menuTheme},anchorEl:r,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},open:a,onClose:this.handleClose},o.a.createElement(S.a,{color:"inherit",onClick:this.handleClose},"Profile"),o.a.createElement(S.a,{color:"inherit",onClick:this.handleClose},"My account"))))))}}]),t}();L.propTypes={classes:l.a.object.isRequired};var I=Object(s.withStyles)(A)(L);function q(e){return function(){return e}}var N=function(){};N.thatReturns=q,N.thatReturnsFalse=q(!1),N.thatReturnsTrue=q(!0),N.thatReturnsNull=q(null),N.thatReturnsThis=function(){return this},N.thatReturnsArgument=function(e){return e};var H=N,z=function(e){};var B=function(e,t,n,r,o,a,i,c){if(z(t),!e){var l;if(void 0===t)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var s=[n,r,o,a,i,c],u=0;(l=new Error(t.replace(/%s/g,function(){return s[u++]}))).name="Invariant Violation"}throw l.framesToPop=1,l}},U=Object.getOwnPropertySymbols,W=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;(function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}})()&&Object.assign;var F="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";var Q=function(e,t){return e(t={exports:{}},t.exports),t.exports}(function(e){e.exports=function(){function e(e,t,n,r,o,a){a!==F&&B(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=H,n.PropTypes=n,n}()}),V=function(e,t,n,r,o,a,i,c){if(!e){var l;if(void 0===t)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var s=[n,r,o,a,i,c],u=0;(l=new Error(t.replace(/%s/g,function(){return s[u++]}))).name="Invariant Violation"}throw l.framesToPop=1,l}},G=function(e){return e.replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase()}).toLowerCase()},Y=function(e){var t="",n=Object.keys(e);return n.forEach(function(r,o){var a=e[r];(function(e){return/[height|width]$/.test(e)})(r=G(r))&&"number"==typeof a&&(a+="px"),t+=!0===a?r:!1===a?"not "+r:"("+r+": "+a+")",o<n.length-1&&(t+=" and ")}),t},Z=function(e){var t="";return"string"==typeof e?e:e instanceof Array?(e.forEach(function(n,r){t+=Y(n),r<e.length-1&&(t+=", ")}),t):Y(e)},$="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},J=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},K=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},X=function(e){function t(){var n,r;J(this,t);for(var o=arguments.length,a=Array(o),i=0;i<o;i++)a[i]=arguments[i];return n=r=K(this,e.call.apply(e,[this].concat(a))),r.state={matches:r.props.defaultMatches},r.updateMatches=function(){return r.setState({matches:r.mediaQueryList.matches})},K(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentWillMount=function(){if("object"===("undefined"==typeof window?"undefined":$(window))){var e=this.props.targetWindow||window;V("function"==typeof e.matchMedia,"<Media targetWindow> does not support `matchMedia`.");var t=this.props.query;"string"!=typeof t&&(t=Z(t)),this.mediaQueryList=e.matchMedia(t),this.mediaQueryList.addListener(this.updateMatches),this.updateMatches()}},t.prototype.componentWillUnmount=function(){this.mediaQueryList.removeListener(this.updateMatches)},t.prototype.render=function(){var e=this.props,t=e.children,n=e.render,r=this.state.matches;return n?r?n():null:t?"function"==typeof t?t(r):(!Array.isArray(t)||t.length)&&r?o.a.Children.only(t):null:null},t}(o.a.Component);X.propTypes={defaultMatches:Q.bool,query:Q.oneOfType([Q.string,Q.object,Q.arrayOf(Q.object.isRequired)]).isRequired,render:Q.func,children:Q.oneOfType([Q.node,Q.func]),targetWindow:Q.object},X.defaultProps={defaultMatches:!0};var ee=X,te=n("./node_modules/@material-ui/core/Paper/index.js"),ne=n.n(te),re=(n("./src/assets/home-page.jpg"),{display1:{fontSize:75},display2:{fontSize:16},root:{color:u.THEME.palette.primary.main,backgroundColor:u.THEME.palette.primary.contrastText,paddingTop:"10%",height:"100vh"},card:{color:u.THEME.palette.primary.contrastText,backgroundColor:u.THEME.palette.primary.main,marginLeft:100},media:{height:140}}),oe={SMALL:{query:{maxWidth:700,maxHeight:400},scale:function(e){return e}},MEDIUM:{query:[{maxWidth:1860,maxHeight:1040},{minWidth:701,minHeight:401}],scale:function(e){return 2*e}}},ae=function(e){var t=e.classes;return o.a.createElement("div",null,o.a.createElement(ee,{query:oe.SMALL.query},o.a.createElement(ne.a,{className:t.root},o.a.createElement(h.a,{style:{fontSize:"".concat(oe.SMALL.scale(re.display1.fontSize),"px")},variant:"display1",color:"inherit",component:"h1"},"Rebind"),o.a.createElement(h.a,{style:{fontSize:"".concat(oe.SMALL.scale(re.display2.fontSize),"px")},variant:"display2",color:"inherit",component:"p"},"is a project that brings the world closer together by making it simple to connect with anyone.",o.a.createElement("br",null),"This is achieved by empowering the users to present themselves to everyone with just one word.",o.a.createElement("br",null),"It is a cloud electronic contact book that is tailored to the natural way of human networking."))),o.a.createElement(ee,{query:oe.MEDIUM.query},o.a.createElement(ne.a,{className:t.root},o.a.createElement(h.a,{style:{fontSize:"".concat(oe.MEDIUM.scale(re.display1.fontSize),"px")},variant:"display1",color:"inherit",component:"h1"},"Rebind"),o.a.createElement(h.a,{style:{fontSize:"".concat(oe.MEDIUM.scale(re.display2.fontSize),"px")},variant:"display2",color:"inherit",component:"p"},"is a project that brings the world closer together by making it simple to connect with anyone.",o.a.createElement("br",null),"This is achieved by empowering the users to present themselves to everyone with just one word.",o.a.createElement("br",null),"It is a cloud electronic contact book that is tailored to the natural way of human networking."))))};ae.propTypes={classes:l.a.object.isRequired};var ie=Object(s.withStyles)(re)(ae);function ce(e){return(ce="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function le(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function se(e){return(se=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ue(e,t){return(ue=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function pe(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var fe=function(e){function t(){var e,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(pe(pe(n=function(e,t){return!t||"object"!==ce(t)&&"function"!=typeof t?pe(e):t}(this,(e=se(t)).call.apply(e,[this].concat(o))))),"state",{name:"ReBind"}),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ue(e,t)}(t,r["Component"]),function(e,t,n){t&&le(e.prototype,t),n&&le(e,n)}(t,[{key:"render",value:function(){var e=this.state.name;return console.log(e),o.a.createElement("div",null,o.a.createElement(I,null),o.a.createElement(ie,null))}}]),t}();fe.propTypes={classes:l.a.object.isRequired};var me=Object(s.withStyles)({})(fe),de=n("./node_modules/@material-ui/core/styles/MuiThemeProvider.js"),ye=n.n(de),he=(n("./node_modules/font-awesome/css/font-awesome.min.css"),n("./node_modules/bootstrap-css-only/css/bootstrap.min.css"),n("./node_modules/mdbreact/dist/css/mdb.css"),n("./src/App.css"),n("./node_modules/typeface-roboto/index.css"),function(){return o.a.createElement("div",{className:"App"},o.a.createElement(ye.a,{theme:Object(s.createMuiTheme)(u.THEME)},o.a.createElement(me,null)))});i.a.render(o.a.createElement(he,null),document.getElementById("rebind-app"))}});
//# sourceMappingURL=0.dc7449eb86e9b343a059.hot-update.js.map