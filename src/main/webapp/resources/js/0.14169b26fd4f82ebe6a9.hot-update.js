webpackHotUpdate(0,{"./src/index.jsx":function(e,t,n){"use strict";n.r(t);var r=n("./node_modules/react/index.js"),o=n.n(r),a=n("./node_modules/react-dom/index.js"),i=n.n(a),c=(n("./src/index.css"),n("./node_modules/prop-types/index.js")),s=n.n(c),l=n("./node_modules/@material-ui/core/styles/index.js"),u={PRESENTABLE_NAME:"ReBind",THEME:{palette:{primary:{light:"#484848",main:"#212121",dark:"#000000",contrastText:"#f9e8e0"},secondary:{light:"#ffffff",main:"#f9e8e0",dark:"#c6b6ae",contrastText:"#212121"}},typography:{useNextVariants:!0,fontFamily:["-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(","),fontWeightMedium:500,body1:{fontWeight:500},subtitle1:{fontSize:12},button:{fontStyle:"italic"}}}},p=n("./node_modules/@material-ui/core/AppBar/index.js"),f=n.n(p),m=n("./node_modules/@material-ui/core/Toolbar/index.js"),d=n.n(m),y=n("./node_modules/@material-ui/core/Typography/index.js"),h=n.n(y),b=n("./node_modules/@material-ui/core/IconButton/index.js"),g=n.n(b),E=n("./node_modules/@material-ui/icons/Menu.js"),v=n.n(E),w=n("./node_modules/@material-ui/icons/AccountCircle.js"),j=n.n(w),O=n("./node_modules/@material-ui/core/MenuItem/index.js"),S=n.n(O),_=n("./node_modules/@material-ui/core/Menu/index.js"),T=n.n(_);function M(e){return(M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function R(e,t){return(R=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function k(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function C(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var A={menuTheme:{color:u.THEME.palette.primary.main,backgroundColor:u.THEME.palette.primary.contrastText},root:{flexGrow:1},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20}},L=function(e){function t(){var e,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return C(k(k(n=function(e,t){return!t||"object"!==M(t)&&"function"!=typeof t?k(e):t}(this,(e=P(t)).call.apply(e,[this].concat(o))))),"state",{auth:!0,anchorEl:null}),C(k(k(n)),"handleChange",function(e){n.setState({auth:e.target.checked})}),C(k(k(n)),"handleMenu",function(e){n.setState({anchorEl:e.currentTarget})}),C(k(k(n)),"handleClose",function(){n.setState({anchorEl:null})}),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&R(e,t)}(t,r["Component"]),function(e,t,n){t&&x(e.prototype,t),n&&x(e,n)}(t,[{key:"render",value:function(){var e=this.props.classes,t=this.state,n=t.auth,r=t.anchorEl,a=Boolean(r);return o.a.createElement("div",{className:e.root},o.a.createElement(f.a,{position:"fixed"},o.a.createElement(d.a,null,o.a.createElement(g.a,{className:e.menuButton,color:"inherit","aria-label":"Menu"},o.a.createElement(v.a,null)),o.a.createElement(h.a,{variant:"title",color:"inherit",className:e.grow},u.PRESENTABLE_NAME),n&&o.a.createElement("div",null,o.a.createElement(g.a,{"aria-owns":a?"menu-appbar":null,"aria-haspopup":"true",onClick:this.handleMenu,color:"inherit"},o.a.createElement(j.a,null)),o.a.createElement(T.a,{id:"menu-appbar",classes:{paper:e.menuTheme},anchorEl:r,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},open:a,onClose:this.handleClose},o.a.createElement(S.a,{color:"inherit",onClick:this.handleClose},"Profile"),o.a.createElement(S.a,{color:"inherit",onClick:this.handleClose},"My account"))))))}}]),t}();L.propTypes={classes:s.a.object.isRequired};var q=Object(l.withStyles)(A)(L);function N(e){return function(){return e}}var z=function(){};z.thatReturns=N,z.thatReturnsFalse=N(!1),z.thatReturnsTrue=N(!0),z.thatReturnsNull=N(null),z.thatReturnsThis=function(){return this},z.thatReturnsArgument=function(e){return e};var I=z,B=function(e){};var H=function(e,t,n,r,o,a,i,c){if(B(t),!e){var s;if(void 0===t)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[n,r,o,a,i,c],u=0;(s=new Error(t.replace(/%s/g,function(){return l[u++]}))).name="Invariant Violation"}throw s.framesToPop=1,s}},W=Object.getOwnPropertySymbols,U=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;(function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}})()&&Object.assign;var F="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";var Q=function(e,t){return e(t={exports:{}},t.exports),t.exports}(function(e){e.exports=function(){function e(e,t,n,r,o,a){a!==F&&H(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=I,n.PropTypes=n,n}()}),G=function(e,t,n,r,o,a,i,c){if(!e){var s;if(void 0===t)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[n,r,o,a,i,c],u=0;(s=new Error(t.replace(/%s/g,function(){return l[u++]}))).name="Invariant Violation"}throw s.framesToPop=1,s}},V=function(e){return e.replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase()}).toLowerCase()},Y=function(e){var t="",n=Object.keys(e);return n.forEach(function(r,o){var a=e[r];(function(e){return/[height|width]$/.test(e)})(r=V(r))&&"number"==typeof a&&(a+="px"),t+=!0===a?r:!1===a?"not "+r:"("+r+": "+a+")",o<n.length-1&&(t+=" and ")}),t},Z=function(e){var t="";return"string"==typeof e?e:e instanceof Array?(e.forEach(function(n,r){t+=Y(n),r<e.length-1&&(t+=", ")}),t):Y(e)},$="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},J=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},K=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},X=function(e){function t(){var n,r;J(this,t);for(var o=arguments.length,a=Array(o),i=0;i<o;i++)a[i]=arguments[i];return n=r=K(this,e.call.apply(e,[this].concat(a))),r.state={matches:r.props.defaultMatches},r.updateMatches=function(){return r.setState({matches:r.mediaQueryList.matches})},K(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentWillMount=function(){if("object"===("undefined"==typeof window?"undefined":$(window))){var e=this.props.targetWindow||window;G("function"==typeof e.matchMedia,"<Media targetWindow> does not support `matchMedia`.");var t=this.props.query;"string"!=typeof t&&(t=Z(t)),this.mediaQueryList=e.matchMedia(t),this.mediaQueryList.addListener(this.updateMatches),this.updateMatches()}},t.prototype.componentWillUnmount=function(){this.mediaQueryList.removeListener(this.updateMatches)},t.prototype.render=function(){var e=this.props,t=e.children,n=e.render,r=this.state.matches;return n?r?n():null:t?"function"==typeof t?t(r):(!Array.isArray(t)||t.length)&&r?o.a.Children.only(t):null:null},t}(o.a.Component);X.propTypes={defaultMatches:Q.bool,query:Q.oneOfType([Q.string,Q.object,Q.arrayOf(Q.object.isRequired)]).isRequired,render:Q.func,children:Q.oneOfType([Q.node,Q.func]),targetWindow:Q.object},X.defaultProps={defaultMatches:!0};var ee=X,te=n("./node_modules/@material-ui/core/Paper/index.js"),ne=n.n(te),re=n("./node_modules/@material-ui/core/Button/index.js"),oe=n.n(re),ae=n("./node_modules/@material-ui/icons/GroupAdd.js"),ie=n.n(ae),ce=(n("./src/assets/home-page.jpg"),{display1:{fontSize:75},display2:{fontSize:16},button:{marginTop:"5%",fontSize:30,height:60,width:250},icon:{fontSize:45,margin:"15px"},root:{color:u.THEME.palette.primary.main,backgroundColor:u.THEME.palette.primary.contrastText,paddingTop:"70px",height:"100vh"},card:{color:u.THEME.palette.primary.contrastText,backgroundColor:u.THEME.palette.primary.main,marginLeft:100},media:{height:140}}),se={SMALL:{query:{maxWidth:830},scale:function(e){return e}},MEDIUM:{query:[{maxWidth:1860,minWidth:830}],scale:function(e){return"".concat(2*e,"px")}}},le=function(e){var t=e.classes,n=e.scale;return o.a.createElement(ne.a,{className:t.root},o.a.createElement(h.a,{style:{fontSize:n(ce.display1.fontSize)},variant:"display1",color:"inherit",component:"h1"},"Rebind"),o.a.createElement(h.a,{style:{fontSize:n(ce.display2.fontSize)},variant:"display2",color:"inherit",component:"p"},"is a project that brings the world closer together by making it simple to connect with anyone.",o.a.createElement("br",null),"This is achieved by empowering the users to present themselves to everyone with just one word.",o.a.createElement("br",null),"It is a cloud electronic contact book that is tailored to the natural way of human networking."),o.a.createElement(oe.a,{style:{fontSize:n(ce.button.fontSize),height:n(ce.button.height),width:n(ce.button.width)},size:"medium",variant:"contained",color:"primary",className:t.button,onClick:function(){return console.log("clicked")}},o.a.createElement(ie.a,{color:"secondary",className:t.icon,style:{fontSize:n(ce.icon.fontSize)}}),"Register"))};le.propTypes={classes:s.a.object.isRequired,scale:s.a.func.isRequired};var ue=function(e){var t=e.classes;return o.a.createElement("div",null,o.a.createElement(ee,{query:se.SMALL.query},o.a.createElement(le,{classes:t,scale:se.SMALL.scale})),o.a.createElement(ee,{query:se.MEDIUM.query},o.a.createElement(le,{classes:t,scale:se.MEDIUM.scale})))};ue.propTypes={classes:s.a.object.isRequired};var pe=Object(l.withStyles)(ce)(ue);function fe(e){return(fe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function me(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function de(e){return(de=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ye(e,t){return(ye=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function he(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var be=function(e){function t(){var e,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(he(he(n=function(e,t){return!t||"object"!==fe(t)&&"function"!=typeof t?he(e):t}(this,(e=de(t)).call.apply(e,[this].concat(o))))),"state",{name:"ReBind"}),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ye(e,t)}(t,r["Component"]),function(e,t,n){t&&me(e.prototype,t),n&&me(e,n)}(t,[{key:"render",value:function(){var e=this.state.name;return console.log(e),o.a.createElement("div",null,o.a.createElement(q,null),o.a.createElement(pe,null))}}]),t}();be.propTypes={classes:s.a.object.isRequired};var ge=Object(l.withStyles)({})(be),Ee=n("./node_modules/@material-ui/core/styles/MuiThemeProvider.js"),ve=n.n(Ee),we=(n("./node_modules/font-awesome/css/font-awesome.min.css"),n("./node_modules/bootstrap-css-only/css/bootstrap.min.css"),n("./node_modules/mdbreact/dist/css/mdb.css"),n("./src/App.css"),n("./node_modules/typeface-roboto/index.css"),function(){return o.a.createElement("div",{className:"App"},o.a.createElement(ve.a,{theme:Object(l.createMuiTheme)(u.THEME)},o.a.createElement(ge,null)))});i.a.render(o.a.createElement(we,null),document.getElementById("rebind-app"))}});
//# sourceMappingURL=0.14169b26fd4f82ebe6a9.hot-update.js.map