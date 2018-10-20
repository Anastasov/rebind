webpackHotUpdate(0,{"./node_modules/create-react-context/lib/implementation.js":!1,"./node_modules/create-react-context/lib/index.js":!1,"./node_modules/fbjs/lib/emptyFunction.js":!1,"./node_modules/fbjs/lib/warning.js":!1,"./node_modules/gud/index.js":!1,"./node_modules/history/node_modules/warning/browser.js":!1,"./src/index.jsx":function(e,t,n){"use strict";n.r(t);var o=n("./node_modules/react/index.js"),r=n.n(o),i=n("./node_modules/react-dom/index.js"),a=n.n(i),s=(n("./src/index.css"),n("./node_modules/prop-types/index.js")),u=n.n(s),c=u.a.shape({trySubscribe:u.a.func.isRequired,tryUnsubscribe:u.a.func.isRequired,notifyNestedSubs:u.a.func.isRequired,isSubscribed:u.a.func.isRequired}),p=u.a.shape({subscribe:u.a.func.isRequired,dispatch:u.a.func.isRequired,getState:u.a.func.isRequired});var l=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"store",n=arguments[1]||t+"Subscription",r=function(e){function r(n,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r);var i=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,n,o));return i[t]=n.store,i}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(r,e),r.prototype.getChildContext=function(){var e;return(e={})[t]=this[t],e[n]=null,e},r.prototype.render=function(){return o.Children.only(this.props.children)},r}(o.Component);return r.propTypes={store:p.isRequired,children:u.a.element.isRequired},r.childContextTypes=((e={})[t]=p.isRequired,e[n]=c,e),r}(),f=n("./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"),d=n.n(f),h=n("./node_modules/invariant/browser.js"),y=n.n(h);var m=null,b={notify:function(){}};var v=function(){function e(t,n,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.store=t,this.parentSub=n,this.onStateChange=o,this.unsubscribe=null,this.listeners=b}return e.prototype.addNestedSub=function(e){return this.trySubscribe(),this.listeners.subscribe(e)},e.prototype.notifyNestedSubs=function(){this.listeners.notify()},e.prototype.isSubscribed=function(){return Boolean(this.unsubscribe)},e.prototype.trySubscribe=function(){this.unsubscribe||(this.unsubscribe=this.parentSub?this.parentSub.addNestedSub(this.onStateChange):this.store.subscribe(this.onStateChange),this.listeners=function(){var e=[],t=[];return{clear:function(){t=m,e=m},notify:function(){for(var n=e=t,o=0;o<n.length;o++)n[o]()},get:function(){return t},subscribe:function(n){var o=!0;return t===e&&(t=e.slice()),t.push(n),function(){o&&e!==m&&(o=!1,t===e&&(t=e.slice()),t.splice(t.indexOf(n),1))}}}}())},e.prototype.tryUnsubscribe=function(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null,this.listeners.clear(),this.listeners=b)},e}(),g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e};var w=0,O={};function E(){}function j(e){var t,n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=r.getDisplayName,a=void 0===i?function(e){return"ConnectAdvanced("+e+")"}:i,s=r.methodName,u=void 0===s?"connectAdvanced":s,l=r.renderCountProp,f=void 0===l?void 0:l,h=r.shouldHandleStateChanges,m=void 0===h||h,b=r.storeKey,j=void 0===b?"store":b,S=r.withRef,P=void 0!==S&&S,x=function(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}(r,["getDisplayName","methodName","renderCountProp","shouldHandleStateChanges","storeKey","withRef"]),T=j+"Subscription",C=w++,_=((t={})[j]=p,t[T]=c,t),R=((n={})[T]=c,n);return function(t){y()("function"==typeof t,"You must pass a component to the function returned by "+u+". Instead received "+JSON.stringify(t));var n=t.displayName||t.name||"Component",r=a(n),i=g({},x,{getDisplayName:a,methodName:u,renderCountProp:f,shouldHandleStateChanges:m,storeKey:j,withRef:P,displayName:r,wrappedComponentName:n,WrappedComponent:t}),s=function(n){function a(e,t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a);var o=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,n.call(this,e,t));return o.version=C,o.state={},o.renderCount=0,o.store=e[j]||t[j],o.propsMode=Boolean(e[j]),o.setWrappedInstance=o.setWrappedInstance.bind(o),y()(o.store,'Could not find "'+j+'" in either the context or props of "'+r+'". Either wrap the root component in a <Provider>, or explicitly pass "'+j+'" as a prop to "'+r+'".'),o.initSelector(),o.initSubscription(),o}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(a,n),a.prototype.getChildContext=function(){var e,t=this.propsMode?null:this.subscription;return(e={})[T]=t||this.context[T],e},a.prototype.componentDidMount=function(){m&&(this.subscription.trySubscribe(),this.selector.run(this.props),this.selector.shouldComponentUpdate&&this.forceUpdate())},a.prototype.componentWillReceiveProps=function(e){this.selector.run(e)},a.prototype.shouldComponentUpdate=function(){return this.selector.shouldComponentUpdate},a.prototype.componentWillUnmount=function(){this.subscription&&this.subscription.tryUnsubscribe(),this.subscription=null,this.notifyNestedSubs=E,this.store=null,this.selector.run=E,this.selector.shouldComponentUpdate=!1},a.prototype.getWrappedInstance=function(){return y()(P,"To access the wrapped instance, you need to specify { withRef: true } in the options argument of the "+u+"() call."),this.wrappedInstance},a.prototype.setWrappedInstance=function(e){this.wrappedInstance=e},a.prototype.initSelector=function(){var t=e(this.store.dispatch,i);this.selector=function(e,t){var n={run:function(o){try{var r=e(t.getState(),o);(r!==n.props||n.error)&&(n.shouldComponentUpdate=!0,n.props=r,n.error=null)}catch(e){n.shouldComponentUpdate=!0,n.error=e}}};return n}(t,this.store),this.selector.run(this.props)},a.prototype.initSubscription=function(){if(m){var e=(this.propsMode?this.props:this.context)[T];this.subscription=new v(this.store,e,this.onStateChange.bind(this)),this.notifyNestedSubs=this.subscription.notifyNestedSubs.bind(this.subscription)}},a.prototype.onStateChange=function(){this.selector.run(this.props),this.selector.shouldComponentUpdate?(this.componentDidUpdate=this.notifyNestedSubsOnComponentDidUpdate,this.setState(O)):this.notifyNestedSubs()},a.prototype.notifyNestedSubsOnComponentDidUpdate=function(){this.componentDidUpdate=void 0,this.notifyNestedSubs()},a.prototype.isSubscribed=function(){return Boolean(this.subscription)&&this.subscription.isSubscribed()},a.prototype.addExtraProps=function(e){if(!(P||f||this.propsMode&&this.subscription))return e;var t=g({},e);return P&&(t.ref=this.setWrappedInstance),f&&(t[f]=this.renderCount++),this.propsMode&&this.subscription&&(t[T]=this.subscription),t},a.prototype.render=function(){var e=this.selector;if(e.shouldComponentUpdate=!1,e.error)throw e.error;return Object(o.createElement)(t,this.addExtraProps(e.props))},a}(o.Component);return s.WrappedComponent=t,s.displayName=r,s.childContextTypes=R,s.contextTypes=_,s.propTypes=_,d()(s,t)}}var S=Object.prototype.hasOwnProperty;function P(e,t){return e===t?0!==e||0!==t||1/e==1/t:e!=e&&t!=t}function x(e,t){if(P(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;for(var r=0;r<n.length;r++)if(!S.call(t,n[r])||!P(e[n[r]],t[n[r]]))return!1;return!0}var T=n("./node_modules/redux/node_modules/symbol-observable/es/index.js"),C=function(){return Math.random().toString(36).substring(7).split("").join(".")},_={INIT:"@@redux/INIT"+C(),REPLACE:"@@redux/REPLACE"+C(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+C()}};function R(e){if("object"!=typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function M(e,t,n){var o;if("function"==typeof t&&"function"==typeof n||"function"==typeof n&&"function"==typeof arguments[3])throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function");if("function"==typeof t&&void 0===n&&(n=t,t=void 0),void 0!==n){if("function"!=typeof n)throw new Error("Expected the enhancer to be a function.");return n(M)(e,t)}if("function"!=typeof e)throw new Error("Expected the reducer to be a function.");var r=e,i=t,a=[],s=a,u=!1;function c(){s===a&&(s=a.slice())}function p(){if(u)throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return i}function l(e){if("function"!=typeof e)throw new Error("Expected the listener to be a function.");if(u)throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");var t=!0;return c(),s.push(e),function(){if(t){if(u)throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");t=!1,c();var n=s.indexOf(e);s.splice(n,1)}}}function f(e){if(!R(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(u)throw new Error("Reducers may not dispatch actions.");try{u=!0,i=r(i,e)}finally{u=!1}for(var t=a=s,n=0;n<t.length;n++){(0,t[n])()}return e}return f({type:_.INIT}),(o={dispatch:f,subscribe:l,getState:p,replaceReducer:function(e){if("function"!=typeof e)throw new Error("Expected the nextReducer to be a function.");r=e,f({type:_.REPLACE})}})[T.a]=function(){var e,t=l;return(e={subscribe:function(e){if("object"!=typeof e||null===e)throw new TypeError("Expected the observer to be an object.");function n(){e.next&&e.next(p())}return n(),{unsubscribe:t(n)}}})[T.a]=function(){return this},e},o}function N(e,t){var n=t&&t.type;return"Given "+(n&&'action "'+String(n)+'"'||"an action")+', reducer "'+e+'" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'}function q(e,t){return function(){return t(e.apply(this,arguments))}}var I=n("./node_modules/lodash-es/_freeGlobal.js"),k="object"==typeof self&&self&&self.Object===Object&&self,A=(I.a||k||Function("return this")()).Symbol,U=Object.prototype;U.hasOwnProperty,U.toString,A&&A.toStringTag;Object.prototype.toString;A&&A.toStringTag;Object.getPrototypeOf,Object;var W=Function.prototype,L=Object.prototype,B=W.toString;L.hasOwnProperty,B.call(Object);function D(e){return function(t,n){var o=e(t,n);function r(){return o}return r.dependsOnOwnProps=!1,r}}function H(e){return null!==e.dependsOnOwnProps&&void 0!==e.dependsOnOwnProps?Boolean(e.dependsOnOwnProps):1!==e.length}function z(e,t){return function(t,n){n.displayName;var o=function(e,t){return o.dependsOnOwnProps?o.mapToProps(e,t):o.mapToProps(e)};return o.dependsOnOwnProps=!0,o.mapToProps=function(t,n){o.mapToProps=e,o.dependsOnOwnProps=H(e);var r=o(t,n);return"function"==typeof r&&(o.mapToProps=r,o.dependsOnOwnProps=H(r),r=o(t,n)),r},o}}var Y=[function(e){return"function"==typeof e?z(e):void 0},function(e){return e?void 0:D(function(e){return{dispatch:e}})},function(e){return e&&"object"==typeof e?D(function(t){return function(e,t){if("function"==typeof e)return q(e,t);if("object"!=typeof e||null===e)throw new Error("bindActionCreators expected an object or a function, instead received "+(null===e?"null":typeof e)+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');for(var n=Object.keys(e),o={},r=0;r<n.length;r++){var i=n[r],a=e[i];"function"==typeof a&&(o[i]=q(a,t))}return o}(e,t)}):void 0}];var F=[function(e){return"function"==typeof e?z(e):void 0},function(e){return e?void 0:D(function(){return{}})}],G=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e};function K(e,t,n){return G({},n,e,t)}var Q=[function(e){return"function"==typeof e?function(e){return function(t,n){n.displayName;var o=n.pure,r=n.areMergedPropsEqual,i=!1,a=void 0;return function(t,n,s){var u=e(t,n,s);return i?o&&r(u,a)||(a=u):(i=!0,a=u),a}}}(e):void 0},function(e){return e?void 0:function(){return K}}];function V(e,t,n,o){return function(r,i){return n(e(r,i),t(o,i),i)}}function J(e,t,n,o,r){var i=r.areStatesEqual,a=r.areOwnPropsEqual,s=r.areStatePropsEqual,u=!1,c=void 0,p=void 0,l=void 0,f=void 0,d=void 0;function h(r,u){var h=!a(u,p),y=!i(r,c);return c=r,p=u,h&&y?(l=e(c,p),t.dependsOnOwnProps&&(f=t(o,p)),d=n(l,f,p)):h?(e.dependsOnOwnProps&&(l=e(c,p)),t.dependsOnOwnProps&&(f=t(o,p)),d=n(l,f,p)):y?function(){var t=e(c,p),o=!s(t,l);return l=t,o&&(d=n(l,f,p)),d}():d}return function(r,i){return u?h(r,i):function(r,i){return l=e(c=r,p=i),f=t(o,p),d=n(l,f,p),u=!0,d}(r,i)}}function Z(e,t){var n=t.initMapStateToProps,o=t.initMapDispatchToProps,r=t.initMergeProps,i=function(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}(t,["initMapStateToProps","initMapDispatchToProps","initMergeProps"]),a=n(e,i),s=o(e,i),u=r(e,i);return(i.pure?J:V)(a,s,u,e,i)}var $=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e};function X(e,t,n){for(var o=t.length-1;o>=0;o--){var r=t[o](e);if(r)return r}return function(t,o){throw new Error("Invalid value of type "+typeof e+" for "+n+" argument when connecting component "+o.wrappedComponentName+".")}}function ee(e,t){return e===t}var te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.connectHOC,n=void 0===t?j:t,o=e.mapStateToPropsFactories,r=void 0===o?F:o,i=e.mapDispatchToPropsFactories,a=void 0===i?Y:i,s=e.mergePropsFactories,u=void 0===s?Q:s,c=e.selectorFactory,p=void 0===c?Z:c;return function(e,t,o){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},s=i.pure,c=void 0===s||s,l=i.areStatesEqual,f=void 0===l?ee:l,d=i.areOwnPropsEqual,h=void 0===d?x:d,y=i.areStatePropsEqual,m=void 0===y?x:y,b=i.areMergedPropsEqual,v=void 0===b?x:b,g=function(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}(i,["pure","areStatesEqual","areOwnPropsEqual","areStatePropsEqual","areMergedPropsEqual"]),w=X(e,r,"mapStateToProps"),O=X(t,a,"mapDispatchToProps"),E=X(o,u,"mergeProps");return n(p,$({methodName:"connect",getDisplayName:function(e){return"Connect("+e+")"},shouldHandleStateChanges:Boolean(e),initMapStateToProps:w,initMapDispatchToProps:O,initMergeProps:E,pure:c,areStatesEqual:f,areOwnPropsEqual:h,areStatePropsEqual:m,areMergedPropsEqual:v},g))}}(),ne=n("./node_modules/warning/warning.js"),oe=n.n(ne),re=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e};function ie(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var ae=function(e){function t(){var n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,i=Array(r),a=0;a<r;a++)i[a]=arguments[a];return n=o=ie(this,e.call.apply(e,[this].concat(i))),o.state={match:o.computeMatch(o.props.history.location.pathname)},ie(o,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.getChildContext=function(){return{router:re({},this.context.router,{history:this.props.history,route:{location:this.props.history.location,match:this.state.match}})}},t.prototype.computeMatch=function(e){return{path:"/",url:"/",params:{},isExact:"/"===e}},t.prototype.componentWillMount=function(){var e=this,t=this.props,n=t.children,o=t.history;y()(null==n||1===r.a.Children.count(n),"A <Router> may have only one child element"),this.unlisten=o.listen(function(){e.setState({match:e.computeMatch(o.location.pathname)})})},t.prototype.componentWillReceiveProps=function(e){oe()(this.props.history===e.history,"You cannot change <Router history>")},t.prototype.componentWillUnmount=function(){this.unlisten()},t.prototype.render=function(){var e=this.props.children;return e?r.a.Children.only(e):null},t}(r.a.Component);ae.propTypes={history:u.a.object.isRequired,children:u.a.node},ae.contextTypes={router:u.a.object},ae.childContextTypes={router:u.a.object.isRequired};var se=ae,ue=n("./node_modules/path-to-regexp/index.js"),ce=n.n(ue),pe={},le=0,fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments[2];"string"==typeof t&&(t={path:t});var o=t,r=o.path,i=o.exact,a=void 0!==i&&i,s=o.strict,u=void 0!==s&&s,c=o.sensitive,p=void 0!==c&&c;if(null==r)return n;var l=function(e,t){var n=""+t.end+t.strict+t.sensitive,o=pe[n]||(pe[n]={});if(o[e])return o[e];var r=[],i={re:ce()(e,r,t),keys:r};return le<1e4&&(o[e]=i,le++),i}(r,{end:a,strict:u,sensitive:p}),f=l.re,d=l.keys,h=f.exec(e);if(!h)return null;var y=h[0],m=h.slice(1),b=e===y;return a&&!b?null:{path:r,url:"/"===r&&""===y?"/":y,isExact:b,params:d.reduce(function(e,t,n){return e[t.name]=m[n],e},{})}},de=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e};function he(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var ye=function(e){return 0===r.a.Children.count(e)},me=function(e){function t(){var n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,i=Array(r),a=0;a<r;a++)i[a]=arguments[a];return n=o=he(this,e.call.apply(e,[this].concat(i))),o.state={match:o.computeMatch(o.props,o.context.router)},he(o,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.getChildContext=function(){return{router:de({},this.context.router,{route:{location:this.props.location||this.context.router.route.location,match:this.state.match}})}},t.prototype.computeMatch=function(e,t){var n=e.computedMatch,o=e.location,r=e.path,i=e.strict,a=e.exact,s=e.sensitive;if(n)return n;y()(t,"You should not use <Route> or withRouter() outside a <Router>");var u=t.route,c=(o||u.location).pathname;return fe(c,{path:r,strict:i,exact:a,sensitive:s},u.match)},t.prototype.componentWillMount=function(){oe()(!(this.props.component&&this.props.render),"You should not use <Route component> and <Route render> in the same route; <Route render> will be ignored"),oe()(!(this.props.component&&this.props.children&&!ye(this.props.children)),"You should not use <Route component> and <Route children> in the same route; <Route children> will be ignored"),oe()(!(this.props.render&&this.props.children&&!ye(this.props.children)),"You should not use <Route render> and <Route children> in the same route; <Route children> will be ignored")},t.prototype.componentWillReceiveProps=function(e,t){oe()(!(e.location&&!this.props.location),'<Route> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.'),oe()(!(!e.location&&this.props.location),'<Route> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.'),this.setState({match:this.computeMatch(e,t.router)})},t.prototype.render=function(){var e=this.state.match,t=this.props,n=t.children,o=t.component,i=t.render,a=this.context.router,s=a.history,u=a.route,c=a.staticContext,p={match:e,location:this.props.location||u.location,history:s,staticContext:c};return o?e?r.a.createElement(o,p):null:i?e?i(p):null:"function"==typeof n?n(p):n&&!ye(n)?r.a.Children.only(n):null},t}(r.a.Component);me.propTypes={computedMatch:u.a.object,path:u.a.string,exact:u.a.bool,strict:u.a.bool,sensitive:u.a.bool,component:u.a.func,render:u.a.func,children:u.a.oneOfType([u.a.func,u.a.node]),location:u.a.object},me.contextTypes={router:u.a.shape({history:u.a.object.isRequired,route:u.a.object.isRequired,staticContext:u.a.object})},me.childContextTypes={router:u.a.object.isRequired};var be=me,ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.assign({},e,t)},ge=M(function(e){for(var t=Object.keys(e),n={},o=0;o<t.length;o++){var r=t[o];"function"==typeof e[r]&&(n[r]=e[r])}var i,a=Object.keys(n);try{!function(e){Object.keys(e).forEach(function(t){var n=e[t];if(void 0===n(void 0,{type:_.INIT}))throw new Error('Reducer "'+t+"\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");if(void 0===n(void 0,{type:_.PROBE_UNKNOWN_ACTION()}))throw new Error('Reducer "'+t+"\" returned undefined when probed with a random type. Don't try to handle "+_.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')})}(n)}catch(e){i=e}return function(e,t){if(void 0===e&&(e={}),i)throw i;for(var o=!1,r={},s=0;s<a.length;s++){var u=a[s],c=n[u],p=e[u],l=c(p,t);if(void 0===l){var f=N(u,t);throw new Error(f)}r[u]=l,o=o||l!==p}return o?r:e}}({authReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{logged:!1};switch((arguments.length>1?arguments[1]:void 0).type){case"REQUEST_REGISTER_PAGE":return ve(e,{logged:!1});case"SHOW_USER_MENU":return ve(e,{logged:!0});default:return ve(e)}}}),{logged:!1}),we=n("./node_modules/@material-ui/core/styles/index.js"),Oe={PRESENTABLE_NAME:"ReBind",THEME:{palette:{primary:{light:"#484848",main:"#212121",dark:"#000000",contrastText:"#f9e8e0"},secondary:{light:"#ffffff",main:"#f9e8e0",dark:"#c6b6ae",contrastText:"#212121"}},typography:{useNextVariants:!0,fontFamily:["-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(","),fontWeightMedium:500,body1:{fontWeight:500},subtitle1:{fontSize:12},button:{fontStyle:"italic"}}}},Ee=n("./node_modules/@material-ui/core/AppBar/index.js"),je=n.n(Ee),Se=n("./node_modules/@material-ui/core/Toolbar/index.js"),Pe=n.n(Se),xe=n("./node_modules/@material-ui/core/Typography/index.js"),Te=n.n(xe),Ce=n("./node_modules/@material-ui/core/IconButton/index.js"),_e=n.n(Ce),Re=n("./node_modules/@material-ui/icons/Menu.js"),Me=n.n(Re),Ne=n("./node_modules/@material-ui/icons/AccountCircle.js"),qe=n.n(Ne),Ie=n("./node_modules/@material-ui/core/MenuItem/index.js"),ke=n.n(Ie),Ae=n("./node_modules/@material-ui/core/Menu/index.js"),Ue=n.n(Ae);function We(e){return(We="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Le(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function Be(e){return(Be=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function De(e,t){return(De=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function He(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ze(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Ye={menuTheme:{color:Oe.THEME.palette.primary.main,backgroundColor:Oe.THEME.palette.primary.contrastText},root:{flexGrow:1},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20}},Fe=function(e){function t(){var e,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return ze(He(He(n=function(e,t){return!t||"object"!==We(t)&&"function"!=typeof t?He(e):t}(this,(e=Be(t)).call.apply(e,[this].concat(r))))),"propTypes",{classes:u.a.object.isRequired,logged:u.a.bool.isRequired,dispatch:u.a.object.isRequired}),ze(He(He(n)),"state",{auth:!0,anchorEl:null}),ze(He(He(n)),"handleChange",function(e){n.setState({auth:e.target.checked})}),ze(He(He(n)),"handleMenu",function(e){n.setState({anchorEl:e.currentTarget})}),ze(He(He(n)),"handleClose",function(){n.setState({anchorEl:null})}),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&De(e,t)}(t,o["Component"]),function(e,t,n){t&&Le(e.prototype,t),n&&Le(e,n)}(t,[{key:"render",value:function(){var e=this.props,t=e.classes,n=e.logged,o=e.dispatch,i=this.state,a=i.auth,s=i.anchorEl,u=Boolean(s);return r.a.createElement("div",{className:t.root},r.a.createElement(je.a,{position:"fixed"},r.a.createElement(Pe.a,null,r.a.createElement(_e.a,{className:t.menuButton,color:"inherit","aria-label":"Menu"},r.a.createElement(Me.a,null)),r.a.createElement(Te.a,{variant:"title",color:"inherit",className:t.grow},Oe.PRESENTABLE_NAME),a&&r.a.createElement("div",null,r.a.createElement(_e.a,{"aria-owns":u?"menu-appbar":null,"aria-haspopup":"true",onClick:o.onShowUserMenu,color:"inherit"},r.a.createElement(qe.a,null)),n&&r.a.createElement(Ue.a,{id:"menu-appbar",classes:{paper:t.menuTheme},anchorEl:s,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},open:u,onClose:this.handleClose},r.a.createElement(ke.a,{color:"inherit",onClick:this.handleClose},"Profile"),r.a.createElement(ke.a,{color:"inherit",onClick:this.handleClose},"My account"))))))}}]),t}(),Ge=te(function(e){return{logged:e.logged}},function(e){return{onShowUserMenu:function(){return e({type:"SHOW_USER_MENU"})}}})(Fe),Ke=Object(we.withStyles)(Ye)(Ge);function Qe(e){return function(){return e}}var Ve=function(){};Ve.thatReturns=Qe,Ve.thatReturnsFalse=Qe(!1),Ve.thatReturnsTrue=Qe(!0),Ve.thatReturnsNull=Qe(null),Ve.thatReturnsThis=function(){return this},Ve.thatReturnsArgument=function(e){return e};var Je=Ve,Ze=function(e){};var $e=function(e,t,n,o,r,i,a,s){if(Ze(t),!e){var u;if(void 0===t)u=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,o,r,i,a,s],p=0;(u=new Error(t.replace(/%s/g,function(){return c[p++]}))).name="Invariant Violation"}throw u.framesToPop=1,u}},Xe=Object.getOwnPropertySymbols,et=Object.prototype.hasOwnProperty,tt=Object.prototype.propertyIsEnumerable;(function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(e){o[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}})()&&Object.assign;var nt="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";var ot=function(e,t){return e(t={exports:{}},t.exports),t.exports}(function(e){e.exports=function(){function e(e,t,n,o,r,i){i!==nt&&$e(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=Je,n.PropTypes=n,n}()}),rt=function(e,t,n,o,r,i,a,s){if(!e){var u;if(void 0===t)u=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,o,r,i,a,s],p=0;(u=new Error(t.replace(/%s/g,function(){return c[p++]}))).name="Invariant Violation"}throw u.framesToPop=1,u}},it=function(e){return e.replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase()}).toLowerCase()},at=function(e){var t="",n=Object.keys(e);return n.forEach(function(o,r){var i=e[o];(function(e){return/[height|width]$/.test(e)})(o=it(o))&&"number"==typeof i&&(i+="px"),t+=!0===i?o:!1===i?"not "+o:"("+o+": "+i+")",r<n.length-1&&(t+=" and ")}),t},st=function(e){var t="";return"string"==typeof e?e:e instanceof Array?(e.forEach(function(n,o){t+=at(n),o<e.length-1&&(t+=", ")}),t):at(e)},ut="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ct=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},pt=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},lt=function(e){function t(){var n,o;ct(this,t);for(var r=arguments.length,i=Array(r),a=0;a<r;a++)i[a]=arguments[a];return n=o=pt(this,e.call.apply(e,[this].concat(i))),o.state={matches:o.props.defaultMatches},o.updateMatches=function(){return o.setState({matches:o.mediaQueryList.matches})},pt(o,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentWillMount=function(){if("object"===("undefined"==typeof window?"undefined":ut(window))){var e=this.props.targetWindow||window;rt("function"==typeof e.matchMedia,"<Media targetWindow> does not support `matchMedia`.");var t=this.props.query;"string"!=typeof t&&(t=st(t)),this.mediaQueryList=e.matchMedia(t),this.mediaQueryList.addListener(this.updateMatches),this.updateMatches()}},t.prototype.componentWillUnmount=function(){this.mediaQueryList.removeListener(this.updateMatches)},t.prototype.render=function(){var e=this.props,t=e.children,n=e.render,o=this.state.matches;return n?o?n():null:t?"function"==typeof t?t(o):(!Array.isArray(t)||t.length)&&o?r.a.Children.only(t):null:null},t}(r.a.Component);lt.propTypes={defaultMatches:ot.bool,query:ot.oneOfType([ot.string,ot.object,ot.arrayOf(ot.object.isRequired)]).isRequired,render:ot.func,children:ot.oneOfType([ot.node,ot.func]),targetWindow:ot.object},lt.defaultProps={defaultMatches:!0};var ft=lt,dt=n("./node_modules/@material-ui/core/Paper/index.js"),ht=n.n(dt),yt=n("./node_modules/@material-ui/core/Button/index.js"),mt=n.n(yt),bt=n("./node_modules/@material-ui/icons/GroupAdd.js"),vt=n.n(bt),gt=(n("./src/assets/home-page.jpg"),{display1:{fontSize:75},display2:{fontSize:16},button:{marginTop:"5%",fontSize:30,height:60,width:250},icon:{fontSize:45,margin:"15px"},root:{color:Oe.THEME.palette.primary.main,backgroundColor:Oe.THEME.palette.primary.contrastText,paddingTop:"70px",height:"100vh"},card:{color:Oe.THEME.palette.primary.contrastText,backgroundColor:Oe.THEME.palette.primary.main,marginLeft:100},media:{height:140}}),wt={SMALL:{query:{maxWidth:830},scale:function(e){return e}},MEDIUM:{query:[{maxWidth:1860,minWidth:830}],scale:function(e){return"".concat(2*e,"px")}}},Ot=function(e){var t=e.classes,n=e.scale;return r.a.createElement(ht.a,{className:t.root},r.a.createElement(Te.a,{style:{fontSize:n(gt.display1.fontSize)},variant:"display1",color:"inherit",component:"h1"},"Rebind"),r.a.createElement(Te.a,{style:{fontSize:n(gt.display2.fontSize)},variant:"display2",color:"inherit",component:"p"},"is a project that brings the world closer together by making it simple to connect with anyone.",r.a.createElement("br",null),"This is achieved by empowering the users to present themselves to everyone with just one word.",r.a.createElement("br",null),"It is a cloud electronic contact book that is tailored to the natural way of human networking."),r.a.createElement(mt.a,{style:{fontSize:n(gt.button.fontSize),height:n(gt.button.height),width:n(gt.button.width)},size:"medium",variant:"contained",color:"primary",className:t.button,onClick:function(){return console.log("clicked")}},r.a.createElement(vt.a,{color:"secondary",className:t.icon,style:{fontSize:n(gt.icon.fontSize)}}),"Register"))};Ot.propTypes={classes:u.a.object.isRequired,scale:u.a.func.isRequired};var Et=function(e){var t=e.classes;return r.a.createElement("div",null,r.a.createElement(ft,{query:wt.SMALL.query},r.a.createElement(Ot,{classes:t,scale:wt.SMALL.scale})),r.a.createElement(ft,{query:wt.MEDIUM.query},r.a.createElement(Ot,{classes:t,scale:wt.MEDIUM.scale})))};Et.propTypes={classes:u.a.object.isRequired};var jt=Object(we.withStyles)(gt)(Et);function St(e){return(St="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Pt(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function xt(e){return(xt=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Tt(e,t){return(Tt=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Ct(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var _t=function(e){function t(){var e,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(Ct(Ct(n=function(e,t){return!t||"object"!==St(t)&&"function"!=typeof t?Ct(e):t}(this,(e=xt(t)).call.apply(e,[this].concat(r))))),"state",{name:"ReBind"}),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Tt(e,t)}(t,o["Component"]),function(e,t,n){t&&Pt(e.prototype,t),n&&Pt(e,n)}(t,[{key:"render",value:function(){var e=this.state.name;return console.log(e),r.a.createElement("div",null,r.a.createElement(Ke,null),r.a.createElement(jt,null))}}]),t}();_t.propTypes={classes:u.a.object.isRequired};var Rt=Object(we.withStyles)({})(_t),Mt=n("./node_modules/@material-ui/core/styles/MuiThemeProvider.js"),Nt=n.n(Mt),qt=(n("./node_modules/font-awesome/css/font-awesome.min.css"),n("./node_modules/bootstrap-css-only/css/bootstrap.min.css"),n("./node_modules/mdbreact/dist/css/mdb.css"),n("./src/App.css"),n("./node_modules/typeface-roboto/index.css"),function(){return r.a.createElement(l,{store:ge},r.a.createElement("div",{className:"App"},r.a.createElement(Nt.a,{theme:Object(we.createMuiTheme)(Oe.THEME)},r.a.createElement(se,null,r.a.createElement(be,{path:"/",component:Rt})))))});a.a.render(r.a.createElement(qt,null),document.getElementById("rebind-app"))}});
//# sourceMappingURL=0.eca096937fe7366d17ef.hot-update.js.map