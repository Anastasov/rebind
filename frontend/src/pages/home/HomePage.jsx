/* eslint-disable */
import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import SignUpIcon from "@material-ui/icons/KeyboardArrowRight";
import Grid from "@material-ui/core/Grid";
import styles from "./HomePageStyles";
import { openSignUpModalActionCreator } from "../../reducers/modal/modalActionCreators";
import withMobileDialog from "@material-ui/core/withMobileDialog";
import { devLog } from "../../util/ObjectUtils";
/* eslint-enable */

const stylesForGridMember = index => ({
  paddingTop: (index + 1) * 5,
  paddingBottom: (index + 1) * 5
});
const addButtonScaledStyles = (props, fullScreen, isLoginButton) => ({
  ...props,
  fontSize: fullScreen ? "7vw" : `${4 - isLoginButton}vw`,
  marginTop: "2vw"
});
const addIconScaledStyles = (props, fullScreen) => ({
  ...props,
  fontSize: fullScreen ? "9vw" : "6vw"
});

const Buttons = ({ classes, fullScreen, openSignUpPage }) => (
  <Grid
    className={fullScreen ? {} : classes.buttons}
    container
    direction="column"
    justify="space-evenly"
    alignItems="center"
  >
    <Grid item>
      <Button
        size="large"
        variant="contained"
        color="primary"
        className={classes.sign_up_button}
        onClick={event => {
          event.preventDefault();
          openSignUpPage();
        }}
        style={addButtonScaledStyles(1, fullScreen, 0)}
      >
        Get Started
        <SignUpIcon
          color="secondary"
          className={classes.icon}
          style={addIconScaledStyles(1, fullScreen)}
        />
      </Button>
    </Grid>
    <Grid item xs>
      <Button
        size="large"
        variant="outlined"
        color="primary"
        className={classes.login_button}
        onClick={event => {
          event.preventDefault();
          openSignUpPage();
        }}
        style={addButtonScaledStyles(1, fullScreen, 1)}
      >
        Login
      </Button>
    </Grid>
  </Grid>
);

Buttons.propTypes = {
  fullScreen: PropTypes.bool,
  classes: PropTypes.object.isRequired,
  openSignUpPage: PropTypes.func.isRequired
};

Buttons.defaultProps = {
  fullScreen: false
};

const SloganAndAuthButtons = ({
  fullScreen,
  classes,
  openSignUpPage,
  ...containerProps
}) => (
  <Grid container spacing={8} justify="center" {...containerProps}>
    <Grid item xs={fullScreen ? 10 : 6}>
      <Typography
        className={classes.description}
        color="primary"
        component="p"
        style={stylesForGridMember(0)}
      >
        ReBind brings the world closer together by making it easy to connect
        with anyone. It makes possible for people to reach out to others with a
        single word, but also link with new aquantances in a matter of seconds.
        You can create an electronic business card as well as keep existing
        connections in a contact book.
      </Typography>
    </Grid>
    <Grid item xs>
      <Buttons
        classes={classes}
        fullScreen={fullScreen}
        openSignUpPage={openSignUpPage}
      />
    </Grid>
  </Grid>
);

SloganAndAuthButtons.propTypes = {
  fullScreen: PropTypes.bool,
  classes: PropTypes.object.isRequired,
  openSignUpPage: PropTypes.func.isRequired
};
Buttons.defaultProps = {
  fullScreen: false
};

/* eslint-disable */
const TwoColumnsView = props => (
  <SloganAndAuthButtons direction="row" alignItems="flex-start" {...props} />
);
const OneColumnView = props => (
  <SloganAndAuthButtons direction="column" alignItems="center" {...props} />
);
/* eslint-enable */

class HomePage extends Component {
  static propTypes = {
    fullScreen: PropTypes.bool.isRequired,
    classes: PropTypes.object.isRequired,
    openSignUpPage: PropTypes.func.isRequired
  };

  render() {
    /* eslint-disable */
    const { classes, fullScreen, openSignUpPage } = this.props;
    /* eslint-enable */
    return (
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
              {fullScreen ? (
                <OneColumnView
                  fullScreen
                  classes={classes}
                  openSignUpPage={openSignUpPage}
                  style={stylesForGridMember(1)}
                />
              ) : (
                <TwoColumnsView
                  classes={classes}
                  openSignUpPage={openSignUpPage}
                  style={stylesForGridMember(1)}
                />
              )}
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

const StyledHomePage = withStyles(styles)(HomePage);
const ResponsiveHomePage = withMobileDialog()(StyledHomePage);

const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => ({
  openSignUpPage: () => dispatch(openSignUpModalActionCreator())
});
const ReduxHomePage = connect(
  mapStateToProps,
  mapDispatchToProps
)(ResponsiveHomePage);

export default ReduxHomePage;
