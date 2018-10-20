webpackHotUpdate(0,{"./src/components/nav/actions/navActionsCreator.js":function(e,t){},"./src/index.jsx":function(e,t,n){"use strict";n.r(t);var r=n("./node_modules/react/index.js"),o=n.n(r),i=n("./node_modules/react-dom/index.js"),a=n.n(i),s=(n("./src/index.css"),n("./node_modules/prop-types/index.js")),u=n.n(s),c=u.a.shape({trySubscribe:u.a.func.isRequired,tryUnsubscribe:u.a.func.isRequired,notifyNestedSubs:u.a.func.isRequired,isSubscribed:u.a.func.isRequired}),p=u.a.shape({subscribe:u.a.func.isRequired,dispatch:u.a.func.isRequired,getState:u.a.func.isRequired});var l=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"store",n=arguments[1]||t+"Subscription",o=function(e){function o(n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o);var i=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,n,r));return i[t]=n.store,i}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(o,e),o.prototype.getChildContext=function(){var e;return(e={})[t]=this[t],e[n]=null,e},o.prototype.render=function(){return r.Children.only(this.props.children)},o}(r.Component);return o.propTypes={store:p.isRequired,children:u.a.element.isRequired},o.childContextTypes=((e={})[t]=p.isRequired,e[n]=c,e),o}(),f=n("./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"),d=n.n(f),h=n("./node_modules/invariant/browser.js"),y=n.n(h);var b=null,m={notify:function(){}};var v=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.store=t,this.parentSub=n,this.onStateChange=r,this.unsubscribe=null,this.listeners=m}return e.prototype.addNestedSub=function(e){return this.trySubscribe(),this.listeners.subscribe(e)},e.prototype.notifyNestedSubs=function(){this.listeners.notify()},e.prototype.isSubscribed=function(){return Boolean(this.unsubscribe)},e.prototype.trySubscribe=function(){this.unsubscribe||(this.unsubscribe=this.parentSub?this.parentSub.addNestedSub(this.onStateChange):this.store.subscribe(this.onStateChange),this.listeners=function(){var e=[],t=[];return{clear:function(){t=b,e=b},notify:function(){for(var n=e=t,r=0;r<n.length;r++)n[r]()},get:function(){return t},subscribe:function(n){var r=!0;return t===e&&(t=e.slice()),t.push(n),function(){r&&e!==b&&(r=!1,t===e&&(t=e.slice()),t.splice(t.indexOf(n),1))}}}}())},e.prototype.tryUnsubscribe=function(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null,this.listeners.clear(),this.listeners=m)},e}(),g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};var w=0,O={};function E(){}function S(e){var t,n,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=o.getDisplayName,a=void 0===i?function(e){return"ConnectAdvanced("+e+")"}:i,s=o.methodName,u=void 0===s?"connectAdvanced":s,l=o.renderCountProp,f=void 0===l?void 0:l,h=o.shouldHandleStateChanges,b=void 0===h||h,m=o.storeKey,S=void 0===m?"store":m,j=o.withRef,P=void 0!==j&&j,T=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(o,["getDisplayName","methodName","renderCountProp","shouldHandleStateChanges","storeKey","withRef"]),C=S+"Subscription",x=w++,_=((t={})[S]=p,t[C]=c,t),M=((n={})[C]=c,n);return function(t){y()("function"==typeof t,"You must pass a component to the function returned by "+u+". Instead received "+JSON.stringify(t));var n=t.displayName||t.name||"Component",o=a(n),i=g({},T,{getDisplayName:a,methodName:u,renderCountProp:f,shouldHandleStateChanges:b,storeKey:S,withRef:P,displayName:o,wrappedComponentName:n,WrappedComponent:t}),s=function(n){function a(e,t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,n.call(this,e,t));return r.version=x,r.state={},r.renderCount=0,r.store=e[S]||t[S],r.propsMode=Boolean(e[S]),r.setWrappedInstance=r.setWrappedInstance.bind(r),y()(r.store,'Could not find "'+S+'" in either the context or props of "'+o+'". Either wrap the root component in a <Provider>, or explicitly pass "'+S+'" as a prop to "'+o+'".'),r.initSelector(),r.initSubscription(),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(a,n),a.prototype.getChildContext=function(){var e,t=this.propsMode?null:this.subscription;return(e={})[C]=t||this.context[C],e},a.prototype.componentDidMount=function(){b&&(this.subscription.trySubscribe(),this.selector.run(this.props),this.selector.shouldComponentUpdate&&this.forceUpdate())},a.prototype.componentWillReceiveProps=function(e){this.selector.run(e)},a.prototype.shouldComponentUpdate=function(){return this.selector.shouldComponentUpdate},a.prototype.componentWillUnmount=function(){this.subscription&&this.subscription.tryUnsubscribe(),this.subscription=null,this.notifyNestedSubs=E,this.store=null,this.selector.run=E,this.selector.shouldComponentUpdate=!1},a.prototype.getWrappedInstance=function(){return y()(P,"To access the wrapped instance, you need to specify { withRef: true } in the options argument of the "+u+"() call."),this.wrappedInstance},a.prototype.setWrappedInstance=function(e){this.wrappedInstance=e},a.prototype.initSelector=function(){var t=e(this.store.dispatch,i);this.selector=function(e,t){var n={run:function(r){try{var o=e(t.getState(),r);(o!==n.props||n.error)&&(n.shouldComponentUpdate=!0,n.props=o,n.error=null)}catch(e){n.shouldComponentUpdate=!0,n.error=e}}};return n}(t,this.store),this.selector.run(this.props)},a.prototype.initSubscription=function(){if(b){var e=(this.propsMode?this.props:this.context)[C];this.subscription=new v(this.store,e,this.onStateChange.bind(this)),this.notifyNestedSubs=this.subscription.notifyNestedSubs.bind(this.subscription)}},a.prototype.onStateChange=function(){this.selector.run(this.props),this.selector.shouldComponentUpdate?(this.componentDidUpdate=this.notifyNestedSubsOnComponentDidUpdate,this.setState(O)):this.notifyNestedSubs()},a.prototype.notifyNestedSubsOnComponentDidUpdate=function(){this.componentDidUpdate=void 0,this.notifyNestedSubs()},a.prototype.isSubscribed=function(){return Boolean(this.subscription)&&this.subscription.isSubscribed()},a.prototype.addExtraProps=function(e){if(!(P||f||this.propsMode&&this.subscription))return e;var t=g({},e);return P&&(t.ref=this.setWrappedInstance),f&&(t[f]=this.renderCount++),this.propsMode&&this.subscription&&(t[C]=this.subscription),t},a.prototype.render=function(){var e=this.selector;if(e.shouldComponentUpdate=!1,e.error)throw e.error;return Object(r.createElement)(t,this.addExtraProps(e.props))},a}(r.Component);return s.WrappedComponent=t,s.displayName=o,s.childContextTypes=M,s.contextTypes=_,s.propTypes=_,d()(s,t)}}var j=Object.prototype.hasOwnProperty;function P(e,t){return e===t?0!==e||0!==t||1/e==1/t:e!=e&&t!=t}function T(e,t){if(P(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(var o=0;o<n.length;o++)if(!j.call(t,n[o])||!P(e[n[o]],t[n[o]]))return!1;return!0}var C=n("./node_modules/redux/node_modules/symbol-observable/es/index.js"),x=function(){return Math.random().toString(36).substring(7).split("").join(".")},_={INIT:"@@redux/INIT"+x(),REPLACE:"@@redux/REPLACE"+x(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+x()}};function M(e){if("object"!=typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function R(e,t,n){var r;if("function"==typeof t&&"function"==typeof n||"function"==typeof n&&"function"==typeof arguments[3])throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function");if("function"==typeof t&&void 0===n&&(n=t,t=void 0),void 0!==n){if("function"!=typeof n)throw new Error("Expected the enhancer to be a function.");return n(R)(e,t)}if("function"!=typeof e)throw new Error("Expected the reducer to be a function.");var o=e,i=t,a=[],s=a,u=!1;function c(){s===a&&(s=a.slice())}function p(){if(u)throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return i}function l(e){if("function"!=typeof e)throw new Error("Expected the listener to be a function.");if(u)throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");var t=!0;return c(),s.push(e),function(){if(t){if(u)throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");t=!1,c();var n=s.indexOf(e);s.splice(n,1)}}}function f(e){if(!M(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(u)throw new Error("Reducers may not dispatch actions.");try{u=!0,i=o(i,e)}finally{u=!1}for(var t=a=s,n=0;n<t.length;n++){(0,t[n])()}return e}return f({type:_.INIT}),(r={dispatch:f,subscribe:l,getState:p,replaceReducer:function(e){if("function"!=typeof e)throw new Error("Expected the nextReducer to be a function.");o=e,f({type:_.REPLACE})}})[C.a]=function(){var e,t=l;return(e={subscribe:function(e){if("object"!=typeof e||null===e)throw new TypeError("Expected the observer to be an object.");function n(){e.next&&e.next(p())}return n(),{unsubscribe:t(n)}}})[C.a]=function(){return this},e},r}function N(e,t){var n=t&&t.type;return"Given "+(n&&'action "'+String(n)+'"'||"an action")+', reducer "'+e+'" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'}function I(e,t){return function(){return t(e.apply(this,arguments))}}var q=n("./node_modules/lodash-es/_freeGlobal.js"),k="object"==typeof self&&self&&self.Object===Object&&self,A=(q.a||k||Function("return this")()).Symbol,U=Object.prototype;U.hasOwnProperty,U.toString,A&&A.toStringTag;Object.prototype.toString;A&&A.toStringTag;Object.getPrototypeOf,Object;var W=Function.prototype,L=Object.prototype,B=W.toString;L.hasOwnProperty,B.call(Object);function D(e){return function(t,n){var r=e(t,n);function o(){return r}return o.dependsOnOwnProps=!1,o}}function H(e){return null!==e.dependsOnOwnProps&&void 0!==e.dependsOnOwnProps?Boolean(e.dependsOnOwnProps):1!==e.length}function z(e,t){return function(t,n){n.displayName;var r=function(e,t){return r.dependsOnOwnProps?r.mapToProps(e,t):r.mapToProps(e)};return r.dependsOnOwnProps=!0,r.mapToProps=function(t,n){r.mapToProps=e,r.dependsOnOwnProps=H(e);var o=r(t,n);return"function"==typeof o&&(r.mapToProps=o,r.dependsOnOwnProps=H(o),o=r(t,n)),o},r}}var F=[function(e){return"function"==typeof e?z(e):void 0},function(e){return e?void 0:D(function(e){return{dispatch:e}})},function(e){return e&&"object"==typeof e?D(function(t){return function(e,t){if("function"==typeof e)return I(e,t);if("object"!=typeof e||null===e)throw new Error("bindActionCreators expected an object or a function, instead received "+(null===e?"null":typeof e)+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');for(var n=Object.keys(e),r={},o=0;o<n.length;o++){var i=n[o],a=e[i];"function"==typeof a&&(r[i]=I(a,t))}return r}(e,t)}):void 0}];var G=[function(e){return"function"==typeof e?z(e):void 0},function(e){return e?void 0:D(function(){return{}})}],K=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};function Q(e,t,n){return K({},n,e,t)}var Y=[function(e){return"function"==typeof e?function(e){return function(t,n){n.displayName;var r=n.pure,o=n.areMergedPropsEqual,i=!1,a=void 0;return function(t,n,s){var u=e(t,n,s);return i?r&&o(u,a)||(a=u):(i=!0,a=u),a}}}(e):void 0},function(e){return e?void 0:function(){return Q}}];function V(e,t,n,r){return function(o,i){return n(e(o,i),t(r,i),i)}}function J(e,t,n,r,o){var i=o.areStatesEqual,a=o.areOwnPropsEqual,s=o.areStatePropsEqual,u=!1,c=void 0,p=void 0,l=void 0,f=void 0,d=void 0;function h(o,u){var h=!a(u,p),y=!i(o,c);return c=o,p=u,h&&y?(l=e(c,p),t.dependsOnOwnProps&&(f=t(r,p)),d=n(l,f,p)):h?(e.dependsOnOwnProps&&(l=e(c,p)),t.dependsOnOwnProps&&(f=t(r,p)),d=n(l,f,p)):y?function(){var t=e(c,p),r=!s(t,l);return l=t,r&&(d=n(l,f,p)),d}():d}return function(o,i){return u?h(o,i):function(o,i){return l=e(c=o,p=i),f=t(r,p),d=n(l,f,p),u=!0,d}(o,i)}}function Z(e,t){var n=t.initMapStateToProps,r=t.initMapDispatchToProps,o=t.initMergeProps,i=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["initMapStateToProps","initMapDispatchToProps","initMergeProps"]),a=n(e,i),s=r(e,i),u=o(e,i);return(i.pure?J:V)(a,s,u,e,i)}var $=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};function X(e,t,n){for(var r=t.length-1;r>=0;r--){var o=t[r](e);if(o)return o}return function(t,r){throw new Error("Invalid value of type "+typeof e+" for "+n+" argument when connecting component "+r.wrappedComponentName+".")}}function ee(e,t){return e===t}var te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.connectHOC,n=void 0===t?S:t,r=e.mapStateToPropsFactories,o=void 0===r?G:r,i=e.mapDispatchToPropsFactories,a=void 0===i?F:i,s=e.mergePropsFactories,u=void 0===s?Y:s,c=e.selectorFactory,p=void 0===c?Z:c;return function(e,t,r){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},s=i.pure,c=void 0===s||s,l=i.areStatesEqual,f=void 0===l?ee:l,d=i.areOwnPropsEqual,h=void 0===d?T:d,y=i.areStatePropsEqual,b=void 0===y?T:y,m=i.areMergedPropsEqual,v=void 0===m?T:m,g=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(i,["pure","areStatesEqual","areOwnPropsEqual","areStatePropsEqual","areMergedPropsEqual"]),w=X(e,o,"mapStateToProps"),O=X(t,a,"mapDispatchToProps"),E=X(r,u,"mergeProps");return n(p,$({methodName:"connect",getDisplayName:function(e){return"Connect("+e+")"},shouldHandleStateChanges:Boolean(e),initMapStateToProps:w,initMapDispatchToProps:O,initMergeProps:E,pure:c,areStatesEqual:f,areOwnPropsEqual:h,areStatePropsEqual:b,areMergedPropsEqual:v},g))}}(),ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.assign({},e,t)},re=function(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var o=t[r];"function"==typeof e[o]&&(n[o]=e[o])}var i,a=Object.keys(n);try{!function(e){Object.keys(e).forEach(function(t){var n=e[t];if(void 0===n(void 0,{type:_.INIT}))throw new Error('Reducer "'+t+"\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");if(void 0===n(void 0,{type:_.PROBE_UNKNOWN_ACTION()}))throw new Error('Reducer "'+t+"\" returned undefined when probed with a random type. Don't try to handle "+_.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')})}(n)}catch(e){i=e}return function(e,t){if(void 0===e&&(e={}),i)throw i;for(var r=!1,o={},s=0;s<a.length;s++){var u=a[s],c=n[u],p=e[u],l=c(p,t);if(void 0===l){var f=N(u,t);throw new Error(f)}o[u]=l,r=r||l!==p}return r?o:e}}({authReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{logged:!1};switch((arguments.length>1?arguments[1]:void 0).type){case"REQUEST_REGISTER_PAGE":return ne(e,{logged:!1});case"SHOW_USER_MENU":return ne(e,{logged:!0});default:return ne(e)}}}),oe=n("./node_modules/@material-ui/core/styles/index.js"),ie={PRESENTABLE_NAME:"ReBind",THEME:{palette:{primary:{light:"#484848",main:"#212121",dark:"#000000",contrastText:"#f9e8e0"},secondary:{light:"#ffffff",main:"#f9e8e0",dark:"#c6b6ae",contrastText:"#212121"}},typography:{useNextVariants:!0,fontFamily:["-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(","),fontWeightMedium:500,body1:{fontWeight:500},subtitle1:{fontSize:12},button:{fontStyle:"italic"}}}},ae=n("./node_modules/@material-ui/core/AppBar/index.js"),se=n.n(ae),ue=n("./node_modules/@material-ui/core/Toolbar/index.js"),ce=n.n(ue),pe=n("./node_modules/@material-ui/core/Typography/index.js"),le=n.n(pe),fe=n("./node_modules/@material-ui/core/IconButton/index.js"),de=n.n(fe),he=n("./node_modules/@material-ui/icons/Menu.js"),ye=n.n(he),be=n("./node_modules/@material-ui/icons/AccountCircle.js"),me=n.n(be),ve=n("./node_modules/@material-ui/core/MenuItem/index.js"),ge=n.n(ve),we=n("./node_modules/@material-ui/core/Menu/index.js"),Oe=n.n(we),Ee=n("./src/components/nav/actions/navActionsCreator.js");function Se(e){return(Se="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function je(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Pe(e){return(Pe=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Te(e,t){return(Te=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Ce(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function xe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var _e={menuTheme:{color:ie.THEME.palette.primary.main,backgroundColor:ie.THEME.palette.primary.contrastText},root:{flexGrow:1},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20}},Me=function(e){function t(){var e,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return xe(Ce(Ce(n=function(e,t){return!t||"object"!==Se(t)&&"function"!=typeof t?Ce(e):t}(this,(e=Pe(t)).call.apply(e,[this].concat(o))))),"defaultProps",{logged:!1}),xe(Ce(Ce(n)),"propTypes",{classes:u.a.object.isRequired,logged:u.a.bool,dispatch:u.a.object.isRequired}),xe(Ce(Ce(n)),"state",{auth:!0,anchorEl:null}),xe(Ce(Ce(n)),"handleChange",function(e){n.setState({auth:e.target.checked})}),xe(Ce(Ce(n)),"handleMenu",function(e){n.setState({anchorEl:e.currentTarget})}),xe(Ce(Ce(n)),"handleClose",function(){n.setState({anchorEl:null})}),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Te(e,t)}(t,r["Component"]),function(e,t,n){t&&je(e.prototype,t),n&&je(e,n)}(t,[{key:"render",value:function(){var e=this.props,t=e.classes,n=e.logged,r=e.dispatch,i=this.state,a=i.auth,s=i.anchorEl,u=Boolean(s);return o.a.createElement("div",{className:t.root},o.a.createElement(se.a,{position:"fixed"},o.a.createElement(ce.a,null,o.a.createElement(de.a,{className:t.menuButton,color:"inherit","aria-label":"Menu"},o.a.createElement(ye.a,null)),o.a.createElement(le.a,{variant:"title",color:"inherit",className:t.grow},ie.PRESENTABLE_NAME),a&&o.a.createElement("div",null,o.a.createElement(de.a,{"aria-owns":u?"menu-appbar":null,"aria-haspopup":"true",onClick:r.onShowUserMenu,color:"inherit"},o.a.createElement(me.a,null)),n&&o.a.createElement(Oe.a,{id:"menu-appbar",classes:{paper:t.menuTheme},anchorEl:s,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},open:u,onClose:this.handleClose},o.a.createElement(ge.a,{color:"inherit",onClick:this.handleClose},"Profile"),o.a.createElement(ge.a,{color:"inherit",onClick:this.handleClose},"My account"))))))}}]),t}(),Re=te(function(e){return{logged:e.logged}},function(e){return{onShowUserMenu:function(){return e(Object(Ee.showUserMenuAction)())}}})(Me),Ne=Object(oe.withStyles)(_e)(Re);function Ie(e){return function(){return e}}var qe=function(){};qe.thatReturns=Ie,qe.thatReturnsFalse=Ie(!1),qe.thatReturnsTrue=Ie(!0),qe.thatReturnsNull=Ie(null),qe.thatReturnsThis=function(){return this},qe.thatReturnsArgument=function(e){return e};var ke=qe,Ae=function(e){};var Ue=function(e,t,n,r,o,i,a,s){if(Ae(t),!e){var u;if(void 0===t)u=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,r,o,i,a,s],p=0;(u=new Error(t.replace(/%s/g,function(){return c[p++]}))).name="Invariant Violation"}throw u.framesToPop=1,u}},We=Object.getOwnPropertySymbols,Le=Object.prototype.hasOwnProperty,Be=Object.prototype.propertyIsEnumerable;(function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}})()&&Object.assign;var De="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";var He=function(e,t){return e(t={exports:{}},t.exports),t.exports}(function(e){e.exports=function(){function e(e,t,n,r,o,i){i!==De&&Ue(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=ke,n.PropTypes=n,n}()}),ze=function(e,t,n,r,o,i,a,s){if(!e){var u;if(void 0===t)u=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,r,o,i,a,s],p=0;(u=new Error(t.replace(/%s/g,function(){return c[p++]}))).name="Invariant Violation"}throw u.framesToPop=1,u}},Fe=function(e){return e.replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase()}).toLowerCase()},Ge=function(e){var t="",n=Object.keys(e);return n.forEach(function(r,o){var i=e[r];(function(e){return/[height|width]$/.test(e)})(r=Fe(r))&&"number"==typeof i&&(i+="px"),t+=!0===i?r:!1===i?"not "+r:"("+r+": "+i+")",o<n.length-1&&(t+=" and ")}),t},Ke=function(e){var t="";return"string"==typeof e?e:e instanceof Array?(e.forEach(function(n,r){t+=Ge(n),r<e.length-1&&(t+=", ")}),t):Ge(e)},Qe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ye=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},Ve=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},Je=function(e){function t(){var n,r;Ye(this,t);for(var o=arguments.length,i=Array(o),a=0;a<o;a++)i[a]=arguments[a];return n=r=Ve(this,e.call.apply(e,[this].concat(i))),r.state={matches:r.props.defaultMatches},r.updateMatches=function(){return r.setState({matches:r.mediaQueryList.matches})},Ve(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentWillMount=function(){if("object"===("undefined"==typeof window?"undefined":Qe(window))){var e=this.props.targetWindow||window;ze("function"==typeof e.matchMedia,"<Media targetWindow> does not support `matchMedia`.");var t=this.props.query;"string"!=typeof t&&(t=Ke(t)),this.mediaQueryList=e.matchMedia(t),this.mediaQueryList.addListener(this.updateMatches),this.updateMatches()}},t.prototype.componentWillUnmount=function(){this.mediaQueryList.removeListener(this.updateMatches)},t.prototype.render=function(){var e=this.props,t=e.children,n=e.render,r=this.state.matches;return n?r?n():null:t?"function"==typeof t?t(r):(!Array.isArray(t)||t.length)&&r?o.a.Children.only(t):null:null},t}(o.a.Component);Je.propTypes={defaultMatches:He.bool,query:He.oneOfType([He.string,He.object,He.arrayOf(He.object.isRequired)]).isRequired,render:He.func,children:He.oneOfType([He.node,He.func]),targetWindow:He.object},Je.defaultProps={defaultMatches:!0};var Ze=Je,$e=n("./node_modules/@material-ui/core/Paper/index.js"),Xe=n.n($e),et=n("./node_modules/@material-ui/core/Button/index.js"),tt=n.n(et),nt=n("./node_modules/@material-ui/icons/GroupAdd.js"),rt=n.n(nt),ot=(n("./src/assets/home-page.jpg"),{display1:{fontSize:75},display2:{fontSize:16},button:{marginTop:"5%",fontSize:30,height:60,width:250},icon:{fontSize:45,margin:"15px"},root:{color:ie.THEME.palette.primary.main,backgroundColor:ie.THEME.palette.primary.contrastText,paddingTop:"70px",height:"100vh"},card:{color:ie.THEME.palette.primary.contrastText,backgroundColor:ie.THEME.palette.primary.main,marginLeft:100},media:{height:140}}),it={SMALL:{query:{maxWidth:830},scale:function(e){return e}},MEDIUM:{query:[{maxWidth:1860,minWidth:830}],scale:function(e){return"".concat(2*e,"px")}}},at=function(e){var t=e.classes,n=e.scale;return o.a.createElement(Xe.a,{className:t.root},o.a.createElement(le.a,{style:{fontSize:n(ot.display1.fontSize)},variant:"display1",color:"inherit",component:"h1"},"Rebind"),o.a.createElement(le.a,{style:{fontSize:n(ot.display2.fontSize)},variant:"display2",color:"inherit",component:"p"},"is a project that brings the world closer together by making it simple to connect with anyone.",o.a.createElement("br",null),"This is achieved by empowering the users to present themselves to everyone with just one word.",o.a.createElement("br",null),"It is a cloud electronic contact book that is tailored to the natural way of human networking."),o.a.createElement(tt.a,{style:{fontSize:n(ot.button.fontSize),height:n(ot.button.height),width:n(ot.button.width)},size:"medium",variant:"contained",color:"primary",className:t.button,onClick:function(){return console.log("clicked")}},o.a.createElement(rt.a,{color:"secondary",className:t.icon,style:{fontSize:n(ot.icon.fontSize)}}),"Register"))};at.propTypes={classes:u.a.object.isRequired,scale:u.a.func.isRequired};var st=function(e){var t=e.classes;return o.a.createElement("div",null,o.a.createElement(Ze,{query:it.SMALL.query},o.a.createElement(at,{classes:t,scale:it.SMALL.scale})),o.a.createElement(Ze,{query:it.MEDIUM.query},o.a.createElement(at,{classes:t,scale:it.MEDIUM.scale})))};st.propTypes={classes:u.a.object.isRequired};var ut=Object(oe.withStyles)(ot)(st);function ct(e){return(ct="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function pt(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function lt(e){return(lt=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ft(e,t){return(ft=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function dt(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var ht=function(e){function t(){var e,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(dt(dt(n=function(e,t){return!t||"object"!==ct(t)&&"function"!=typeof t?dt(e):t}(this,(e=lt(t)).call.apply(e,[this].concat(o))))),"state",{name:"ReBind"}),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ft(e,t)}(t,r["Component"]),function(e,t,n){t&&pt(e.prototype,t),n&&pt(e,n)}(t,[{key:"render",value:function(){var e=this.state.name;return console.log(e),o.a.createElement("div",null,o.a.createElement(Ne,null),o.a.createElement(ut,null))}}]),t}();ht.propTypes={classes:u.a.object.isRequired};var yt=Object(oe.withStyles)({})(ht),bt=n("./node_modules/@material-ui/core/styles/MuiThemeProvider.js"),mt=n.n(bt),vt=(n("./node_modules/font-awesome/css/font-awesome.min.css"),n("./node_modules/bootstrap-css-only/css/bootstrap.min.css"),n("./node_modules/mdbreact/dist/css/mdb.css"),n("./src/App.css"),n("./node_modules/typeface-roboto/index.css"),function(){return o.a.createElement(l,{store:R(re)},o.a.createElement("div",{className:"App"},o.a.createElement(mt.a,{theme:Object(oe.createMuiTheme)(ie.THEME)},o.a.createElement(yt,null))))});a.a.render(o.a.createElement(vt,null),document.getElementById("rebind-app"))}});
//# sourceMappingURL=0.790bd125756320e8f5eb.hot-update.js.map