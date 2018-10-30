/* eslint-disable */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import styles from "./AuthModalContainerStyles";
import RegisterForm, * as RegisterPageDetails from "./RegisterForm";
import LoginForm, * as LoginFormDetails from "./LoginForm";
import LinearProgress from "@material-ui/core/LinearProgress";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import withMobileDialog from "@material-ui/core/withMobileDialog";
import {
  SIGN_UP_MODAL_NAME,
  LOGIN_MODAL_NAME
} from "../../reducers/modal/modalActionCreators";
import { closeAuthenticationModalActionCreator } from "../../reducers/modal/modalActionCreators";
import { modalSelector } from "../../reducers/rootReducer";
/* eslint-enable */

class AuthModalContainer extends Component {
  static defaultProps = {
    modal: { show: null, error: {} },
    showProgressBar: false
  };

  static propTypes = {
    open: PropTypes.bool.isRequired,
    fullScreen: PropTypes.bool.isRequired,
    classes: PropTypes.object.isRequired,
    modal: PropTypes.object.isRequired,
    closeAuthenticationWindow: PropTypes.func.isRequired
  };

  render() {
    const {
      open,
      classes,
      modal,
      fullScreen,
      closeAuthenticationWindow
    } = this.props;
    const disableClose = modal.showProgressBar || !!modal.redirect;
    const closeAuthModal = () => !disableClose && closeAuthenticationWindow();
    return (
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onBackdropClick={closeAuthModal}
        onEscapeKeyDown={closeAuthModal}
        aria-labelledby="authentication-title"
        color="inherit"
      >
        {modal.showProgressBar && (
          <div className={classes.progress}>
            <LinearProgress />
          </div>
        )}

        <DialogTitle className={classes.auth} id="authentication-title">
          {modal.show === SIGN_UP_MODAL_NAME
            ? RegisterPageDetails.PAGE_NAME
            : modal.show === LOGIN_MODAL_NAME && LoginFormDetails.PAGE_NAME}
        </DialogTitle>
        {modal.show === SIGN_UP_MODAL_NAME ? (
          <RegisterForm />
        ) : (
          modal.show === LOGIN_MODAL_NAME && <LoginForm />
        )}
      </Dialog>
    );
  }
}

// exports injections
const StyledAuthModalContainer = withStyles(styles)(AuthModalContainer);
const MediaAuthModalContainer = withMobileDialog()(StyledAuthModalContainer);
const mapStateToProps = state => ({
  modal: modalSelector(state)
});
const mapDispatchToProps = dispatch => ({
  closeAuthenticationWindow: () =>
    dispatch(closeAuthenticationModalActionCreator({}))
});
const ReduxAuthModalContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MediaAuthModalContainer);

export default ReduxAuthModalContainer;
