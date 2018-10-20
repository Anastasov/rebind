/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import styles from './AuthModalContainerStyles';
import RegisterPage, * as RegisterPageDetails from '../../pages/auth/RegisterPage';
import LoginForm, * as LoginFormDetails from './LoginForm'
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import { 
  SIGN_UP_MODAL_NAME,
  LOGIN_MODAL_NAME
} from '../../reducers/modal/modalActionCreators';
import { closeAuthenticationModalActionCreator } from '../../reducers/modal/modalActionCreators';
import { getModalSelector } from '../../reducers/rootReducer';
/* eslint-enable */

class AuthModalContainer extends Component {
    static defaultProps = {
      modal: { show: null }
    }

    static propTypes = {
      modal: PropTypes.object.isRequired,
      closeAuthenticationWindow: PropTypes.func.isRequired
    }

    render() {
      const {
        classes, modal, fullScreen, closeAuthenticationWindow
      } = this.props;
      return (
        <Dialog
          // disableBackdropClick
          // disableEscapeKeyDown
          fullScreen={fullScreen}
          open={!!modal.show}
          onBackdropClick={() => closeAuthenticationWindow()}
          onEscapeKeyDown={() => closeAuthenticationWindow()}
          aria-labelledby="authentication-title"
          color="inherit"
        >
          <DialogTitle className={classes.auth} id="authentication-title">
            {modal.show === SIGN_UP_MODAL_NAME
              ? RegisterPageDetails.PAGE_NAME
              : modal.show === LOGIN_MODAL_NAME && LoginFormDetails.PAGE_NAME}
          </DialogTitle>
          { modal.show === SIGN_UP_MODAL_NAME
            ? <RegisterPage />
            : modal.show === LOGIN_MODAL_NAME && <LoginForm /> }
        </Dialog>
      );
    }
}

AuthModalContainer.propTypes = {
  fullScreen: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired
};

// exports injections
const StyledAuthModalContainer = withStyles(styles)(AuthModalContainer);
const MediaAuthModalContainer = withMobileDialog()(StyledAuthModalContainer);
const mapStateToProps = state => ({
  modal: getModalSelector(state)
});
const mapDispatchToProps = dispatch => ({
  closeAuthenticationWindow: () => dispatch(closeAuthenticationModalActionCreator({})),
});
const ReduxAuthModalContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MediaAuthModalContainer);

export default ReduxAuthModalContainer;
