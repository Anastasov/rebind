/* eslint-disable */
import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import styles from "./HomePageStyles";
import { openSignUpModalActionCreator } from "../../reducers/modal/modalActionCreators";
import withMobileDialog from "@material-ui/core/withMobileDialog";
/* eslint-enable */

/* order them from smallest to biggest */
const MEDIA_SCALE = {
  SMALL: {
    query: {
      maxWidth: 830
    },
    scale: pixels => pixels
  },
  MEDIUM: {
    query: [
      {
        maxWidth: 1860,
        minWidth: 830
      }
    ],
    scale: pixels => `${pixels * 2}px`
  }
};

const ScalableLandingView = ({ classes, scale, register }) => (
  <div className={classes.root}>
    <div className={classes.root_overlay}>
      <Typography
        style={{ fontSize: scale(styles.display1.fontSize) }}
        variant="display1"
        color="primary"
        component="h1"
      >
        Rebind
      </Typography>
      <Typography
        style={{ fontSize: scale(styles.display2.fontSize) }}
        variant="display2"
        color="primary"
        component="p"
      >
        is a project that brings the world closer together by making it simple
        to connect with anyone.
        <br />
        This is achieved by empowering the users to present themselves to
        everyone with just one word.
        <br />
        It is a cloud electronic contact book that is tailored to the natural
        way of human networking.
      </Typography>
      <Button
        style={{
          fontSize: scale(styles.button.fontSize),
          height: scale(styles.button.height),
          width: scale(styles.button.width)
        }}
        size="medium"
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={event => {
          event.preventDefault();
          register();
        }}
      >
        <GroupAddIcon
          color="secondary"
          className={classes.icon}
          style={{
            fontSize: scale(styles.icon.fontSize)
          }}
        />
        Sign up
      </Button>
    </div>
  </div>
);

ScalableLandingView.propTypes = {
  classes: PropTypes.object.isRequired,
  register: PropTypes.func.isRequired,
  scale: PropTypes.func.isRequired
};

class HomePage extends Component {
  static propTypes = {
    fullScreen: PropTypes.bool.isRequired,
    classes: PropTypes.object.isRequired,
    openSignUpPage: PropTypes.func.isRequired
  };

  render() {
    const { classes, fullScreen, openSignUpPage } = this.props;
    return (
      <Fragment>
        {fullScreen ? (
          <ScalableLandingView
            classes={classes}
            scale={MEDIA_SCALE.SMALL.scale}
            register={openSignUpPage}
          />
        ) : (
          <ScalableLandingView
            classes={classes}
            scale={MEDIA_SCALE.MEDIUM.scale}
            register={openSignUpPage}
          />
        )}
      </Fragment>
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
