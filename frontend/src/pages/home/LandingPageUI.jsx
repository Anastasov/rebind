/* eslint-disable */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import styles from './LandingPageUIStyles';
import { 
  SIGN_UP_MODAL_NAME, 
  LOGIN_MODAL_NAME, 
  openSignUpModalActionCreator 
} from '../../reducers/modal/modalActionCreators';
import AuthModalContainer from '../../components/auth/AuthModalContainer';
import { getModalSelector } from '../../reducers/rootReducer';
/* eslint-enable */

/* order them from smallest to biggest */
const MEDIA_SCALE = {
  SMALL: {
    query: {
      maxWidth: 830,
    },
    scale: pixels => pixels
  },
  MEDIUM: {
    query: [{
      maxWidth: 1860,
      minWidth: 830,
    }],
    scale: pixels => `${pixels * 2}px`
  }
};

const ScalableLandingView = ({
  classes, scale, register
}) => (
  <Paper className={classes.root_img}>
        <Typography
          style={{ fontSize: scale(styles.display1.fontSize) }}
          variant="display1"
          color="inherit"
          component="h1"
        >
          Rebind
        </Typography>
        <Typography
          style={{ fontSize: scale(styles.display2.fontSize) }}
          variant="display2"
          color="inherit"
          component="p"
        >
    is a project that brings the world closer together by making it simple to connect with anyone.
<br />This is achieved by empowering the users to present themselves to everyone with just one word.
<br />It is a cloud electronic contact book that is tailored to the natural way of human networking.
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
          onClick={(event) => { event.preventDefault(); register(); }}
        >
          <GroupAddIcon
            color="secondary"
            className={classes.icon}
            style={{
              fontSize: scale(styles.icon.fontSize),
            }}
          />
          Sign up
        </Button>
      </Paper>
);

ScalableLandingView.propTypes = {
  classes: PropTypes.object.isRequired,
  register: PropTypes.func.isRequired,
  scale: PropTypes.func.isRequired
};

const LandingPageUI = ({
  classes, useSmallScale, modal, openSignUpPage
}) => (
  <Fragment>
    {useSmallScale ? (
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
    <AuthModalContainer
      open={modal.show === SIGN_UP_MODAL_NAME || modal.show === LOGIN_MODAL_NAME}
    />
  </Fragment>
);

LandingPageUI.propTypes = {
  useSmallScale: PropTypes.bool.isRequired,
  modal: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  openSignUpPage: PropTypes.func.isRequired
};

const StyledLandingPageUI = withStyles(styles)(LandingPageUI);

const mapStateToProps = state => ({
  modal: getModalSelector(state)
});
const mapDispatchToProps = dispatch => ({
  openSignUpPage: () => dispatch(openSignUpModalActionCreator())
});
const ReduxLandingPageUI = connect(
  mapStateToProps,
  mapDispatchToProps
)(StyledLandingPageUI);

export default ReduxLandingPageUI;
