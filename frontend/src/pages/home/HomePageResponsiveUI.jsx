/* eslint-disable */
import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import SignUpIcon from "@material-ui/icons/KeyboardArrowRight";
import Grid from "@material-ui/core/Grid";
import Slide from "@material-ui/core/Slide";
import {
  mouseOnRegisterButtonActionCreator,
  mouseOnLoginButtonActionCreator
} from "../../reducers/auth/authActionCreators";
import { authInfoSelector } from "../../reducers/rootReducer";
/* eslint-enable */

const stylesForGridMember = index => ({
  paddingTop: (index + 1) * 5,
  paddingBottom: (index + 1) * 5
});

/**
 * Sign Up / Login Buttons -------------------------------------
 */
let Buttons = ({
  classes,
  actions,
  isVerticalView,
  authInfo,
  mouseOnRegister,
  mouseOnLogin
}) => (
  <Grid
    className={classes.buttons}
    container
    direction="column"
    justify="space-evenly"
  >
    <Grid item>
      {!isVerticalView && authInfo.mouseOnRegisterButton ? (
        <Slide
          direction="left"
          in={authInfo.mouseOnRegisterButton}
          timeout={500}
        >
          <Button
            size="large"
            variant="contained"
            color="primary"
            className={classes.sign_up_button}
            onMouseEnter={() => mouseOnRegister(true)}
            onMouseLeave={() => mouseOnRegister(false)}
            onClick={event => {
              event.preventDefault();
              actions.openSignUpPage();
            }}
          >
            Get Started
            <SignUpIcon color="secondary" className={classes.icon} />
          </Button>
        </Slide>
      ) : (
        <Button
          size="large"
          variant="contained"
          color="primary"
          className={classes.sign_up_button}
          onMouseEnter={() => mouseOnRegister(true)}
          onMouseLeave={() => mouseOnRegister(false)}
          onClick={event => {
            event.preventDefault();
            actions.openSignUpPage();
          }}
        >
          Get Started
        </Button>
      )}
    </Grid>
    <Grid item xs>
      {!isVerticalView && authInfo.mouseOnLoginButton ? (
        <Slide
          direction="left"
          mountOnEnter
          unmountOnExit
          in={authInfo.mouseOnLoginButton}
        >
          <Button
            size="large"
            variant="outlined"
            color="primary"
            className={classes.login_button}
            onMouseEnter={() => mouseOnLogin(true)}
            onMouseLeave={() => mouseOnLogin(false)}
            onClick={event => {
              event.preventDefault();
              actions.openLoginPage();
            }}
          >
            Login
            <SignUpIcon
              style={{ color: "transparent" }}
              className={classes.icon}
            />
          </Button>
        </Slide>
      ) : (
        <Button
          size="large"
          variant="outlined"
          color="primary"
          className={classes.login_button}
          onMouseEnter={() => mouseOnLogin(true)}
          onMouseLeave={() => mouseOnLogin(false)}
          onClick={event => {
            event.preventDefault();
            actions.openLoginPage();
          }}
        >
          Login
        </Button>
      )}
    </Grid>
  </Grid>
);

Buttons.propTypes = {
  isVerticalView: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  mouseOnRegister: PropTypes.func.isRequired,
  mouseOnLogin: PropTypes.func.isRequired,
  authInfo: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  authInfo: authInfoSelector(state)
});
const mapDispatchToProps = dispatch => ({
  mouseOnRegister: isOnMouse =>
    dispatch(mouseOnRegisterButtonActionCreator(isOnMouse)),
  mouseOnLogin: isOnMouse =>
    dispatch(mouseOnLoginButtonActionCreator(isOnMouse))
});
Buttons = connect(
  mapStateToProps,
  mapDispatchToProps
)(Buttons);
/**
 * Sign Up / Login Buttons -------------------------------------
 */

/**
 * Page Body: --------------------------------------------------
 *          |_> Sign Up / Login Buttons
 */
let SloganAndAuthButtons = ({
  isVerticalView,
  authInfo,
  classes,
  actions,
  ...containerProps
}) =>
  authInfo.jwToken ? (
    <Typography
      className={classes.description}
      color="primary"
      component="p"
      style={{
        ...stylesForGridMember(0),
        paddingLeft: "20%",
        paddingRight: "20%"
      }}
    >
      ReBind brings the world closer together by making it easy to connect with
      anyone. It makes possible for people to reach out to others with a single
      word, but also link with new aquantances in a matter of seconds. You can
      create an electronic business card as well as keep existing connections in
      a contact book.
    </Typography>
  ) : (
    <Grid container justify="center" {...containerProps}>
      <Grid item xs={isVerticalView ? 10 : 6}>
        <Typography
          className={classes.description}
          color="primary"
          component="p"
          style={stylesForGridMember(0)}
        >
          ReBind brings the world closer together by making it easy to connect
          with anyone. It makes possible for people to reach out to others with
          a single word, but also link with new aquantances in a matter of
          seconds. You can create an electronic business card as well as keep
          existing connections in a contact book.
        </Typography>
      </Grid>
      <Grid item xs>
        <Buttons
          isVerticalView={isVerticalView}
          classes={classes}
          actions={actions}
        />
      </Grid>
    </Grid>
  );
SloganAndAuthButtons.propTypes = {
  isVerticalView: PropTypes.bool,
  classes: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};
SloganAndAuthButtons.defaultProps = {
  isVerticalView: false
};
const mapStateToButtonsProps = state => ({
  authInfo: authInfoSelector(state)
});
const mapDispatchToDescriptionProps = () => ({});
SloganAndAuthButtons = connect(
  mapStateToButtonsProps,
  mapDispatchToDescriptionProps
)(SloganAndAuthButtons);
/**
 * Page Body: --------------------------------------------------
 */

/* eslint-disable */
const TwoColumnsView = props => (
  <SloganAndAuthButtons direction="row" alignItems="flex-start" {...props} />
);
const OneColumnView = props => (
  <SloganAndAuthButtons direction="column" alignItems="center" {...props} />
);
/* eslint-enable */

const HomePageResponsiveUI = ({ classes, isVerticalView, actions }) => (
  <div className={classes.root}>
    <div className={classes.root_overlay}>
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
      >
        <Grid item xs={9}>
          <Typography
            className={classes.slogan}
            color="primary"
            component="p"
            style={stylesForGridMember(0)}
          >
            We are all one.
          </Typography>
        </Grid>
        <Grid item xs>
          {isVerticalView ? (
            <OneColumnView
              isVerticalView
              classes={classes}
              actions={actions}
              style={stylesForGridMember(1)}
            />
          ) : (
            <TwoColumnsView
              classes={classes}
              actions={actions}
              style={stylesForGridMember(1)}
            />
          )}
        </Grid>
      </Grid>
    </div>
  </div>
);

HomePageResponsiveUI.propTypes = {
  isVerticalView: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired,
  actions: PropTypes.shape({
    openSignUpPage: PropTypes.func.isRequired,
    openLoginPage: PropTypes.func.isRequired
  }).isRequired
};

export default HomePageResponsiveUI;
