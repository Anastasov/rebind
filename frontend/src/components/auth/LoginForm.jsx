/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { reduxForm, Form, Field } from "redux-form";
import InputAdornment from "@material-ui/core/InputAdornment";
import Email from "@material-ui/icons/Email";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import TextField from "../form/TextField";
import { withStyles } from "@material-ui/core/styles";
import withMobileDialog from "@material-ui/core/withMobileDialog";
import { authInfoSelector, modalSelector } from "../../reducers/rootReducer";
import {
  setPasswordVisibilityActionCreator,
  handleLoginActionCreator
} from "../../reducers/auth/authActionCreators";
import isEmailValid from "sane-email-validation";
import { formatRequiredThing, formatWrongThing } from "../../config/ux";
import styles from "./AuthModalContainerStyles";
import { openSignUpModalActionCreator } from "../../reducers/modal/modalActionCreators";
/* eslint-enable */

export const PAGE_NAME = "Login";

const passAdornment = (showPassword, toggleShowPassword) => (
  <InputAdornment position="end">
    <IconButton
      aria-label="Toggle password visibility"
      onClick={() => toggleShowPassword(!showPassword)}
    >
      {showPassword ? <Visibility /> : <VisibilityOff />}
    </IconButton>
  </InputAdornment>
);

const validate = values => {
  const errors = {};
  if (!values.email) {
    errors.email = formatRequiredThing("email");
  } else if (!isEmailValid(values.email)) {
    errors.email = formatWrongThing("email", false);
  }

  if (!values.password) {
    errors.password = formatRequiredThing("password");
  }

  return errors;
};

const LoginFormComponent = ({
  classes,
  fullScreen,
  authInfo,
  modal,
  togglePasswordVisibility,
  handleLogin,
  openSignUpModal,
  handleSubmit,
  submitting,
  valid
}) => (
  <Form
    onSubmit={handleSubmit(values =>
      handleLogin(
        {
          username: values.email,
          password: values.password
        },
        modal.redirect
      )
    )}
  >
    <DialogContent>
      <DialogContentText>to continue with ReBind.</DialogContentText>
      <br />
      <Field
        name="email"
        type="email"
        label="Email"
        placeholder="my-email@mail.com"
        props={{
          disabled: submitting
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton disabled>
                <Email />
              </IconButton>
            </InputAdornment>
          )
        }}
        component={TextField}
      />
      <br />
      <Field
        name="password"
        type={authInfo.isPasswordVisible ? "text" : "password"}
        label="Password"
        placeholder="mySecretPassowrd"
        props={{
          disabled: submitting
        }}
        InputProps={{
          endAdornment: passAdornment(
            authInfo.isPasswordVisible,
            togglePasswordVisibility
          )
        }}
        component={TextField}
      />
      <br />
    </DialogContent>
    <DialogActions>
      <Button
        disableRipple
        onClick={openSignUpModal}
        label="Go to Sign In"
        variant="text"
        color="primary"
        size="large"
        className={classes.button_alternative}
        disabled={submitting}
        style={
          fullScreen
            ? styles.button_alternative_full
            : styles.button_alternative_normal
        }
      >
        Sign Up
      </Button>
      <Button
        type="submit"
        label="Submit"
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        disabled={!valid || submitting}
      >
        Login
      </Button>
    </DialogActions>
  </Form>
);

LoginFormComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  modal: PropTypes.object.isRequired,
  authInfo: PropTypes.object.isRequired,
  openSignUpModal: PropTypes.func.isRequired,
  togglePasswordVisibility: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  fullScreen: PropTypes.bool.isRequired,
  valid: PropTypes.bool.isRequired
};

const LoginForm = reduxForm({
  form: "login",
  validate,
  destroyOnUnmount: false
})(LoginFormComponent);
const ResponsiveLoginForm = withMobileDialog()(LoginForm);
const StyledLoginForm = withStyles(styles)(ResponsiveLoginForm);
const mapStateToContentProps = state => ({
  authInfo: authInfoSelector(state),
  modal: modalSelector(state)
});
const mapDispatchToContentProps = dispatch => ({
  togglePasswordVisibility: isVisible =>
    dispatch(setPasswordVisibilityActionCreator(isVisible)),
  handleLogin: (userCredentials, redirect) =>
    dispatch(handleLoginActionCreator(userCredentials, redirect)),
  openSignUpModal: () => dispatch(openSignUpModalActionCreator())
});
const ReduxLoginForm = connect(
  mapStateToContentProps,
  mapDispatchToContentProps
)(StyledLoginForm);

export default ReduxLoginForm;
