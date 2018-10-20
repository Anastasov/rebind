webpackHotUpdate("rebind-app",{

/***/ "./node_modules/@material-ui/core/Dialog/Dialog.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material-ui/core/Dialog/Dialog.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _withStyles = _interopRequireDefault(__webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js"));

var _helpers = __webpack_require__(/*! ../utils/helpers */ "./node_modules/@material-ui/core/utils/helpers.js");

var _Modal = _interopRequireDefault(__webpack_require__(/*! ../Modal */ "./node_modules/@material-ui/core/Modal/index.js"));

var _Fade = _interopRequireDefault(__webpack_require__(/*! ../Fade */ "./node_modules/@material-ui/core/Fade/index.js"));

var _transitions = __webpack_require__(/*! ../styles/transitions */ "./node_modules/@material-ui/core/styles/transitions.js");

var _Paper = _interopRequireDefault(__webpack_require__(/*! ../Paper */ "./node_modules/@material-ui/core/Paper/index.js"));

// @inheritedComponent Modal
var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {},

    /* Styles applied to the root element if `scroll="paper"`. */
    scrollPaper: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },

    /* Styles applied to the root element if `scroll="bodyr"`. */
    scrollBody: {
      overflowY: 'auto',
      overflowX: 'hidden'
    },

    /* Styles applied to the `Paper` component. */
    paper: {
      display: 'flex',
      flexDirection: 'column',
      margin: 48,
      position: 'relative',
      overflowY: 'auto',
      // Fix IE11 issue, to remove at some point.
      // We disable the focus ring for mouse, touch and keyboard users.
      outline: 'none'
    },

    /* Styles applied to the `Paper` component if `scroll="paper"`. */
    paperScrollPaper: {
      flex: '0 1 auto',
      maxHeight: 'calc(100% - 96px)'
    },

    /* Styles applied to the `Paper` component if `scroll="body"`. */
    paperScrollBody: {
      margin: '48px auto'
    },

    /* Styles applied to the `Paper` component if `maxWidth="xs"`. */
    paperWidthXs: {
      maxWidth: Math.max(theme.breakpoints.values.xs, 360),
      '&$paperScrollBody': (0, _defineProperty2.default)({}, theme.breakpoints.down(Math.max(theme.breakpoints.values.xs, 360) + 48 * 2), {
        margin: 48
      })
    },

    /* Styles applied to the `Paper` component if `maxWidth="sm"`. */
    paperWidthSm: {
      maxWidth: theme.breakpoints.values.sm,
      '&$paperScrollBody': (0, _defineProperty2.default)({}, theme.breakpoints.down(theme.breakpoints.values.sm + 48 * 2), {
        margin: 48
      })
    },

    /* Styles applied to the `Paper` component if `maxWidth="md"`. */
    paperWidthMd: {
      maxWidth: theme.breakpoints.values.md,
      '&$paperScrollBody': (0, _defineProperty2.default)({}, theme.breakpoints.down(theme.breakpoints.values.md + 48 * 2), {
        margin: 48
      })
    },

    /* Styles applied to the `Paper` component if `maxWidth="lg"`. */
    paperWidthLg: {
      maxWidth: theme.breakpoints.values.lg,
      '&$paperScrollBody': (0, _defineProperty2.default)({}, theme.breakpoints.down(theme.breakpoints.values.lg + 48 * 2), {
        margin: 48
      })
    },

    /* Styles applied to the `Paper` component if `fullWidth={true}`. */
    paperFullWidth: {
      width: '100%'
    },

    /* Styles applied to the `Paper` component if `fullScreen={true}`. */
    paperFullScreen: {
      margin: 0,
      width: '100%',
      maxWidth: '100%',
      height: '100%',
      maxHeight: 'none',
      borderRadius: 0,
      '&$paperScrollBody': {
        margin: 0
      }
    }
  };
};
/**
 * Dialogs are overlaid modal paper based components with a backdrop.
 */


exports.styles = styles;

function Dialog(props) {
  var _classNames;

  var BackdropProps = props.BackdropProps,
      children = props.children,
      classes = props.classes,
      className = props.className,
      disableBackdropClick = props.disableBackdropClick,
      disableEscapeKeyDown = props.disableEscapeKeyDown,
      fullScreen = props.fullScreen,
      fullWidth = props.fullWidth,
      maxWidth = props.maxWidth,
      onBackdropClick = props.onBackdropClick,
      onClose = props.onClose,
      onEnter = props.onEnter,
      onEntered = props.onEntered,
      onEntering = props.onEntering,
      onEscapeKeyDown = props.onEscapeKeyDown,
      onExit = props.onExit,
      onExited = props.onExited,
      onExiting = props.onExiting,
      open = props.open,
      PaperProps = props.PaperProps,
      scroll = props.scroll,
      TransitionComponent = props.TransitionComponent,
      transitionDuration = props.transitionDuration,
      TransitionProps = props.TransitionProps,
      other = (0, _objectWithoutProperties2.default)(props, ["BackdropProps", "children", "classes", "className", "disableBackdropClick", "disableEscapeKeyDown", "fullScreen", "fullWidth", "maxWidth", "onBackdropClick", "onClose", "onEnter", "onEntered", "onEntering", "onEscapeKeyDown", "onExit", "onExited", "onExiting", "open", "PaperProps", "scroll", "TransitionComponent", "transitionDuration", "TransitionProps"]);
  return _react.default.createElement(_Modal.default, (0, _extends2.default)({
    className: (0, _classnames.default)(classes.root, classes["scroll".concat((0, _helpers.capitalize)(scroll))], className),
    BackdropProps: (0, _extends2.default)({
      transitionDuration: transitionDuration
    }, BackdropProps),
    disableBackdropClick: disableBackdropClick,
    disableEscapeKeyDown: disableEscapeKeyDown,
    onBackdropClick: onBackdropClick,
    onEscapeKeyDown: onEscapeKeyDown,
    onClose: onClose,
    open: open,
    role: "dialog"
  }, other), _react.default.createElement(TransitionComponent, (0, _extends2.default)({
    appear: true,
    in: open,
    timeout: transitionDuration,
    onEnter: onEnter,
    onEntering: onEntering,
    onEntered: onEntered,
    onExit: onExit,
    onExiting: onExiting,
    onExited: onExited
  }, TransitionProps), _react.default.createElement(_Paper.default, (0, _extends2.default)({
    elevation: 24,
    className: (0, _classnames.default)(classes.paper, classes["paperScroll".concat((0, _helpers.capitalize)(scroll))], (_classNames = {}, (0, _defineProperty2.default)(_classNames, classes["paperWidth".concat(maxWidth ? (0, _helpers.capitalize)(maxWidth) : '')], maxWidth), (0, _defineProperty2.default)(_classNames, classes.paperFullScreen, fullScreen), (0, _defineProperty2.default)(_classNames, classes.paperFullWidth, fullWidth), _classNames))
  }, PaperProps), children)));
}

Dialog.propTypes =  true ? {
  /**
   * @ignore
   */
  BackdropProps: _propTypes.default.object,

  /**
   * Dialog children, usually the included sub-components.
   */
  children: _propTypes.default.node.isRequired,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * If `true`, clicking the backdrop will not fire the `onClose` callback.
   */
  disableBackdropClick: _propTypes.default.bool,

  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   */
  disableEscapeKeyDown: _propTypes.default.bool,

  /**
   * If `true`, the dialog will be full-screen
   */
  fullScreen: _propTypes.default.bool,

  /**
   * If `true`, the dialog stretches to `maxWidth`.
   */
  fullWidth: _propTypes.default.bool,

  /**
   * Determine the max width of the dialog.
   * The dialog width grows with the size of the screen, this property is useful
   * on the desktop where you might need some coherent different width size across your
   * application. Set to `false` to disable `maxWidth`.
   */
  maxWidth: _propTypes.default.oneOf(['xs', 'sm', 'md', 'lg', false]),

  /**
   * Callback fired when the backdrop is clicked.
   */
  onBackdropClick: _propTypes.default.func,

  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback
   */
  onClose: _propTypes.default.func,

  /**
   * Callback fired before the dialog enters.
   */
  onEnter: _propTypes.default.func,

  /**
   * Callback fired when the dialog has entered.
   */
  onEntered: _propTypes.default.func,

  /**
   * Callback fired when the dialog is entering.
   */
  onEntering: _propTypes.default.func,

  /**
   * Callback fired when the escape key is pressed,
   * `disableKeyboard` is false and the modal is in focus.
   */
  onEscapeKeyDown: _propTypes.default.func,

  /**
   * Callback fired before the dialog exits.
   */
  onExit: _propTypes.default.func,

  /**
   * Callback fired when the dialog has exited.
   */
  onExited: _propTypes.default.func,

  /**
   * Callback fired when the dialog is exiting.
   */
  onExiting: _propTypes.default.func,

  /**
   * If `true`, the Dialog is open.
   */
  open: _propTypes.default.bool.isRequired,

  /**
   * Properties applied to the [`Paper`](/api/paper) element.
   */
  PaperProps: _propTypes.default.object,

  /**
   * Determine the container for scrolling the dialog.
   */
  scroll: _propTypes.default.oneOf(['body', 'paper']),

  /**
   * Transition component.
   */
  TransitionComponent: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func, _propTypes.default.object]),

  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.shape({
    enter: _propTypes.default.number,
    exit: _propTypes.default.number
  })]),

  /**
   * Properties applied to the `Transition` element.
   */
  TransitionProps: _propTypes.default.object
} : undefined;
Dialog.defaultProps = {
  disableBackdropClick: false,
  disableEscapeKeyDown: false,
  fullScreen: false,
  fullWidth: false,
  maxWidth: 'sm',
  scroll: 'paper',
  TransitionComponent: _Fade.default,
  transitionDuration: {
    enter: _transitions.duration.enteringScreen,
    exit: _transitions.duration.leavingScreen
  }
};

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiDialog'
})(Dialog);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/Dialog/index.js":
/*!********************************************************!*\
  !*** ./node_modules/@material-ui/core/Dialog/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _Dialog.default;
  }
});

var _Dialog = _interopRequireDefault(__webpack_require__(/*! ./Dialog */ "./node_modules/@material-ui/core/Dialog/Dialog.js"));

/***/ }),

/***/ "./node_modules/@material-ui/core/DialogTitle/DialogTitle.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material-ui/core/DialogTitle/DialogTitle.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _withStyles = _interopRequireDefault(__webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js"));

var _Typography = _interopRequireDefault(__webpack_require__(/*! ../Typography */ "./node_modules/@material-ui/core/Typography/index.js"));

var styles = {
  /* Styles applied to the root element. */
  root: {
    margin: 0,
    padding: '24px 24px 20px',
    flex: '0 0 auto'
  }
};
exports.styles = styles;

function DialogTitle(props) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      disableTypography = props.disableTypography,
      other = (0, _objectWithoutProperties2.default)(props, ["children", "classes", "className", "disableTypography"]);
  return _react.default.createElement("div", (0, _extends2.default)({
    className: (0, _classnames.default)(classes.root, className)
  }, other), disableTypography ? children : _react.default.createElement(_Typography.default, {
    variant: "title"
  }, children));
}

DialogTitle.propTypes =  true ? {
  /**
   * The content of the component.
   */
  children: _propTypes.default.node.isRequired,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * If `true`, the children won't be wrapped by a typography component.
   * For instance, this can be useful to render an h4 instead of the default h2.
   */
  disableTypography: _propTypes.default.bool
} : undefined;
DialogTitle.defaultProps = {
  disableTypography: false
};

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiDialogTitle'
})(DialogTitle);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/DialogTitle/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/core/DialogTitle/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _DialogTitle.default;
  }
});

var _DialogTitle = _interopRequireDefault(__webpack_require__(/*! ./DialogTitle */ "./node_modules/@material-ui/core/DialogTitle/DialogTitle.js"));

/***/ }),

/***/ "./node_modules/@material-ui/core/withMobileDialog/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@material-ui/core/withMobileDialog/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _withMobileDialog.default;
  }
});

var _withMobileDialog = _interopRequireDefault(__webpack_require__(/*! ./withMobileDialog */ "./node_modules/@material-ui/core/withMobileDialog/withMobileDialog.js"));

/***/ }),

/***/ "./node_modules/@material-ui/core/withMobileDialog/withMobileDialog.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@material-ui/core/withMobileDialog/withMobileDialog.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _withWidth = _interopRequireWildcard(__webpack_require__(/*! ../withWidth */ "./node_modules/@material-ui/core/withWidth/index.js"));

/**
 * Dialog will responsively be full screen *at or below* the given breakpoint
 * (defaults to 'sm' for mobile devices).
 * Notice that this Higher-order Component is incompatible with server side rendering.
 */
var withMobileDialog = function withMobileDialog() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return function (Component) {
    var _options$breakpoint = options.breakpoint,
        breakpoint = _options$breakpoint === void 0 ? 'sm' : _options$breakpoint;

    function WithMobileDialog(props) {
      return _react.default.createElement(Component, (0, _extends2.default)({
        fullScreen: (0, _withWidth.isWidthDown)(breakpoint, props.width)
      }, props));
    }

    WithMobileDialog.propTypes =  true ? {
      width: _propTypes.default.oneOf(['xs', 'sm', 'md', 'lg', 'xl']).isRequired
    } : undefined;
    return (0, _withWidth.default)()(WithMobileDialog);
  };
};

var _default = withMobileDialog;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/withWidth/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material-ui/core/withWidth/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {};
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _withWidth.default;
  }
});

var _withWidth = _interopRequireWildcard(__webpack_require__(/*! ./withWidth */ "./node_modules/@material-ui/core/withWidth/withWidth.js"));

Object.keys(_withWidth).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _withWidth[key];
    }
  });
});

/***/ }),

/***/ "./node_modules/@material-ui/core/withWidth/withWidth.js":
/*!***************************************************************!*\
  !*** ./node_modules/@material-ui/core/withWidth/withWidth.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.isWidthDown = exports.isWidthUp = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _reactEventListener = _interopRequireDefault(__webpack_require__(/*! react-event-listener */ "./node_modules/react-event-listener/dist/react-event-listener.cjs.js"));

var _debounce = _interopRequireDefault(__webpack_require__(/*! debounce */ "./node_modules/debounce/index.js"));

var _wrapDisplayName = _interopRequireDefault(__webpack_require__(/*! recompose/wrapDisplayName */ "./node_modules/recompose/wrapDisplayName.js"));

var _hoistNonReactStatics = _interopRequireDefault(__webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"));

var _withTheme = _interopRequireDefault(__webpack_require__(/*! ../styles/withTheme */ "./node_modules/@material-ui/core/styles/withTheme.js"));

var _createBreakpoints = __webpack_require__(/*! ../styles/createBreakpoints */ "./node_modules/@material-ui/core/styles/createBreakpoints.js");

var _getThemeProps2 = _interopRequireDefault(__webpack_require__(/*! ../styles/getThemeProps */ "./node_modules/@material-ui/core/styles/getThemeProps.js"));

/* eslint-disable react/no-did-mount-set-state */
// < 1kb payload overhead when lodash/debounce is > 3kb.
// By default, returns true if screen width is the same or greater than the given breakpoint.
var isWidthUp = function isWidthUp(breakpoint, width) {
  var inclusive = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  if (inclusive) {
    return _createBreakpoints.keys.indexOf(breakpoint) <= _createBreakpoints.keys.indexOf(width);
  }

  return _createBreakpoints.keys.indexOf(breakpoint) < _createBreakpoints.keys.indexOf(width);
}; // By default, returns true if screen width is the same or less than the given breakpoint.


exports.isWidthUp = isWidthUp;

var isWidthDown = function isWidthDown(breakpoint, width) {
  var inclusive = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  if (inclusive) {
    return _createBreakpoints.keys.indexOf(width) <= _createBreakpoints.keys.indexOf(breakpoint);
  }

  return _createBreakpoints.keys.indexOf(width) < _createBreakpoints.keys.indexOf(breakpoint);
};

exports.isWidthDown = isWidthDown;

var withWidth = function withWidth() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return function (Component) {
    var _options$withTheme = options.withTheme,
        withThemeOption = _options$withTheme === void 0 ? false : _options$withTheme,
        _options$noSSR = options.noSSR,
        noSSR = _options$noSSR === void 0 ? false : _options$noSSR,
        initialWidthOption = options.initialWidth,
        _options$resizeInterv = options.resizeInterval,
        resizeInterval = _options$resizeInterv === void 0 ? 166 : _options$resizeInterv;

    var WithWidth =
    /*#__PURE__*/
    function (_React$Component) {
      (0, _inherits2.default)(WithWidth, _React$Component);

      function WithWidth(props) {
        var _this;

        (0, _classCallCheck2.default)(this, WithWidth);
        _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WithWidth).call(this, props));
        _this.handleResize = (0, _debounce.default)(function () {
          var width = _this.getWidth();

          if (width !== _this.state.width) {
            _this.setState({
              width: width
            });
          }
        }, resizeInterval);
        _this.state = {
          width: undefined
        };

        if (noSSR) {
          _this.state.width = _this.getWidth();
        }

        return _this;
      }

      (0, _createClass2.default)(WithWidth, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          var width = this.getWidth();

          if (width !== this.state.width) {
            this.setState({
              width: width
            });
          }
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          this.handleResize.clear();
        }
      }, {
        key: "getWidth",
        value: function getWidth() {
          var innerWidth = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window.innerWidth;
          var breakpoints = this.props.theme.breakpoints;
          var width = null;
          /**
           * Start with the slowest value as low end devices often have a small screen.
           *
           * innerWidth |xs      sm      md      lg      xl
           *            |-------|-------|-------|-------|------>
           * width      |  xs   |  sm   |  md   |  lg   |  xl
           */

          var index = 1;

          while (width === null && index < _createBreakpoints.keys.length) {
            var currentWidth = _createBreakpoints.keys[index]; // @media are inclusive, so reproduce the behavior here.

            if (innerWidth < breakpoints.values[currentWidth]) {
              width = _createBreakpoints.keys[index - 1];
              break;
            }

            index += 1;
          }

          width = width || 'xl';
          return width;
        }
      }, {
        key: "render",
        value: function render() {
          var _getThemeProps = (0, _getThemeProps2.default)({
            theme: this.props.theme,
            name: 'MuiWithWidth',
            props: (0, _extends2.default)({}, this.props)
          }),
              initialWidth = _getThemeProps.initialWidth,
              theme = _getThemeProps.theme,
              width = _getThemeProps.width,
              other = (0, _objectWithoutProperties2.default)(_getThemeProps, ["initialWidth", "theme", "width"]);

          var more = (0, _extends2.default)({
            width: width || this.state.width || initialWidth || initialWidthOption
          }, other); // When rendering the component on the server,
          // we have no idea about the client browser screen width.
          // In order to prevent blinks and help the reconciliation of the React tree
          // we are not rendering the child component.
          //
          // An alternative is to use the `initialWidth` property.

          if (more.width === undefined) {
            return null;
          }

          if (withThemeOption) {
            more.theme = theme;
          }

          return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(Component, more), _react.default.createElement(_reactEventListener.default, {
            target: "window",
            onResize: this.handleResize
          }));
        }
      }]);
      return WithWidth;
    }(_react.default.Component);

    WithWidth.propTypes =  true ? {
      /**
       * As `window.innerWidth` is unavailable on the server,
       * we default to rendering an empty component during the first mount.
       * In some situation, you might want to use an heuristic to approximate
       * the screen width of the client browser screen width.
       *
       * For instance, you could be using the user-agent or the client-hints.
       * http://caniuse.com/#search=client%20hint
       */
      initialWidth: _propTypes.default.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),

      /**
       * @ignore
       */
      theme: _propTypes.default.object.isRequired,

      /**
       * Bypass the width calculation logic.
       */
      width: _propTypes.default.oneOf(['xs', 'sm', 'md', 'lg', 'xl'])
    } : undefined;

    if (true) {
      WithWidth.displayName = (0, _wrapDisplayName.default)(Component, 'WithWidth');
    }

    (0, _hoistNonReactStatics.default)(WithWidth, Component);
    return (0, _withTheme.default)()(WithWidth);
  };
};

var _default = withWidth;
exports.default = _default;

/***/ }),

/***/ "./src/App.jsx":
/*!*********************!*\
  !*** ./src/App.jsx ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _configureStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./configureStore */ "./src/configureStore.js");
/* harmony import */ var _pages_home_HomePage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/home/HomePage */ "./src/pages/home/HomePage.jsx");
/* harmony import */ var _components_auth_AuthModalContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/auth/AuthModalContainer */ "./src/components/auth/AuthModalContainer.jsx");
/* harmony import */ var _material_ui_core_styles_MuiThemeProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles/MuiThemeProvider */ "./node_modules/@material-ui/core/styles/MuiThemeProvider.js");
/* harmony import */ var _material_ui_core_styles_MuiThemeProvider__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_MuiThemeProvider__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_ReBind__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/ReBind */ "./src/assets/ReBind.js");
/* harmony import */ var font_awesome_css_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! font-awesome/css/font-awesome.min.css */ "./node_modules/font-awesome/css/font-awesome.min.css");
/* harmony import */ var font_awesome_css_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(font_awesome_css_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var bootstrap_css_only_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! bootstrap-css-only/css/bootstrap.min.css */ "./node_modules/bootstrap-css-only/css/bootstrap.min.css");
/* harmony import */ var bootstrap_css_only_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(bootstrap_css_only_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var mdbreact_dist_css_mdb_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! mdbreact/dist/css/mdb.css */ "./node_modules/mdbreact/dist/css/mdb.css");
/* harmony import */ var mdbreact_dist_css_mdb_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(mdbreact_dist_css_mdb_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var typeface_roboto__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! typeface-roboto */ "./node_modules/typeface-roboto/index.css");
/* harmony import */ var typeface_roboto__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(typeface_roboto__WEBPACK_IMPORTED_MODULE_13__);
/* eslint-disable *//* eslint-enable */var App=function App(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_1__["Provider"],{store:_configureStore__WEBPACK_IMPORTED_MODULE_3__["configuredStore"]},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"App"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_styles_MuiThemeProvider__WEBPACK_IMPORTED_MODULE_6___default.a,{theme:Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["createMuiTheme"])(_assets_ReBind__WEBPACK_IMPORTED_MODULE_8__["default"].THEME)},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["BrowserRouter"],null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"],{path:"/",component:_pages_home_HomePage__WEBPACK_IMPORTED_MODULE_4__["default"]}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"],{path:"/test",component:_pages_home_HomePage__WEBPACK_IMPORTED_MODULE_4__["default"]}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"],{path:"/register",component:_components_auth_AuthModalContainer__WEBPACK_IMPORTED_MODULE_5__["default"]})))));};/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/components/auth/AuthModalContainer.jsx":
/*!****************************************************!*\
  !*** ./src/components/auth/AuthModalContainer.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _AuthModalContainerStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AuthModalContainerStyles */ "./src/components/auth/AuthModalContainerStyles.js");
!(function webpackMissingModule() { var e = new Error("Cannot find module '../auth/RegisterPage'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/Dialog/index.js");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "./node_modules/@material-ui/core/DialogTitle/index.js");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_withMobileDialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/withMobileDialog */ "./node_modules/@material-ui/core/withMobileDialog/index.js");
/* harmony import */ var _material_ui_core_withMobileDialog__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_withMobileDialog__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _reducers_rootReducer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../reducers/rootReducer */ "./src/reducers/rootReducer.js");
function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass);}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}/* eslint-disable *//* eslint-enable */var AuthModalContainer=/*#__PURE__*/function(_Component){_inherits(AuthModalContainer,_Component);function AuthModalContainer(){_classCallCheck(this,AuthModalContainer);return _possibleConstructorReturn(this,_getPrototypeOf(AuthModalContainer).apply(this,arguments));}_createClass(AuthModalContainer,[{key:"render",value:function render(){var _this$props=this.props,authInfo=_this$props.authInfo,fullScreen=_this$props.fullScreen;var modalContent=authInfo.isRegistering?!(function webpackMissingModule() { var e = new Error("Cannot find module '../auth/RegisterPage'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()):null;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_6___default.a,{disableBackdropClick:true,disableEscapeKeyDown:true,fullScreen:fullScreen,open:true,onClose:this.handleClose,"aria-labelledby":"responsive-dialog-title",color:"inherit"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_7___default.a,{id:"responsive-dialog-title"},authInfo.isRegistering?!(function webpackMissingModule() { var e = new Error("Cannot find module '../auth/RegisterPage'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()):'Login'),modalContent);}}]);return AuthModalContainer;}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);_defineProperty(AuthModalContainer,"propTypes",{authInfo:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired});AuthModalContainer.propTypes={fullScreen:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,classes:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired};var StyledAuthModalContainer=_material_ui_core_withMobileDialog__WEBPACK_IMPORTED_MODULE_8___default()()(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["withStyles"])(_AuthModalContainerStyles__WEBPACK_IMPORTED_MODULE_4__["default"])(AuthModalContainer));var mapStateToProps=function mapStateToProps(state){return{authInfo:Object(_reducers_rootReducer__WEBPACK_IMPORTED_MODULE_9__["getAuthInfoSelector"])(state)};};var mapDispatchToProps=function mapDispatchToProps(){return{};};var ReduxAuthModalContainer=Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps,mapDispatchToProps)(StyledAuthModalContainer);/* harmony default export */ __webpack_exports__["default"] = (ReduxAuthModalContainer);

/***/ }),

/***/ "./src/components/auth/AuthModalContainerStyles.js":
/*!*********************************************************!*\
  !*** ./src/components/auth/AuthModalContainerStyles.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var styles={};/* harmony default export */ __webpack_exports__["default"] = (styles);

/***/ })

})
//# sourceMappingURL=rebind-app.7e922f8c6ff24dd39823.hot-update.js.map