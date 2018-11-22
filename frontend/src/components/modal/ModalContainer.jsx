/* eslint-disable */
import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styles from "./styles/ModalContainerStyles";
import RegisterForm from "../auth/RegisterForm";
import LoginForm from "../auth/LoginForm";
import BindForm from "../../pages/profile/BindForm";
import DeleteBindAlert from "../../pages/profile/DeleteBindAlert";
import LinearProgress from "@material-ui/core/LinearProgress";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import {
  SIGN_UP_MODAL_NAME,
  LOGIN_MODAL_NAME,
  EDIT_BIND_MODAL_NAME,
  ALERT_DELETE_BIND_NAME
} from "../../reducers/modal/modalActionCreators";
import { closeModalActionCreator } from "../../reducers/modal/modalActionCreators";
import { modalSelector } from "../../reducers/rootReducer";
import responsiveComponent from "../../meta-components/responsiveComponent";
/* eslint-enable */

const mapNameToComponent = name => {
  switch (name) {
    case SIGN_UP_MODAL_NAME:
      return <RegisterForm />;
    case LOGIN_MODAL_NAME:
      return <LoginForm />;
    case EDIT_BIND_MODAL_NAME:
      return <BindForm />;
    case ALERT_DELETE_BIND_NAME:
      return <DeleteBindAlert />;
    default:
      return <Fragment />;
  }
};
class ModalContainer extends Component {
  static defaultProps = {
    modal: { show: null, error: {} },
    showProgressBar: false
  };

  static propTypes = {
    isVerticalView: PropTypes.bool.isRequired,
    classes: PropTypes.object.isRequired,
    modal: PropTypes.object.isRequired,
    closeModal: PropTypes.func.isRequired
  };

  render() {
    const { classes, modal, isVerticalView, closeModal } = this.props;
    const disableClose = modal.showProgressBar || !!modal.redirect;
    const onClose = () => {
      if (modal.onClose) {
        modal.onClose();
      }
      closeModal();
    };
    const close = () => !disableClose && onClose();
    let body = mapNameToComponent(modal.show);
    return (
      <Dialog
        fullScreen={isVerticalView}
        open={!!modal.show}
        onBackdropClick={close}
        onEscapeKeyDown={close}
        aria-labelledby="modal-title"
        color="inherit"
      >
        {modal.showProgressBar && (
          <div className={classes.progress}>
            <LinearProgress />
          </div>
        )}
        {modal.title && (
          <DialogTitle className={classes.auth} id="modal-title">
            {modal.title}
          </DialogTitle>
        )}
        {<div className={classes[modal.bodyClass]}>{body}</div>}
      </Dialog>
    );
  }
}

// exports injections
const StyledModalContainer = responsiveComponent(ModalContainer, {
  vertical: styles,
  horizontal: styles
});
const mapStateToProps = state => ({
  modal: modalSelector(state)
});
const mapDispatchToProps = {
  closeModal: closeModalActionCreator
};
const ReduxModalContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(StyledModalContainer);

export default ReduxModalContainer;
