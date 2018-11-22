/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { reduxForm, Form, Field } from "redux-form";
import InputAdornment from "@material-ui/core/InputAdornment";
import Email from "@material-ui/icons/Email";
import PasswordAdornment from "./PasswordAdornment";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import { authInfoSelector } from "../../reducers/rootReducer";
import {
  setPasswordVisibilityActionCreator,
  handleRegisterActionCreator
} from "../../reducers/auth/authActionCreators";
import { openLoginModalActionCreator } from "../../reducers/modal/modalActionCreators";
import isEmailValid from "sane-email-validation";
import { formatRequiredThing, formatWrongThing } from "../../config/ux";
import TextField from "../form/TextField";
import * as PasswordUtils from "../../util/PasswordUtils";
import horizontal from "./styles/AuthModalContainerHorizontalStyles";
import vertical from "./styles/AuthModalContainerVerticalStyles";
import responsiveComponent from "../../meta-components/responsiveComponent";
/* eslint-enable */

const validate = values => {
  const errors = {};
  if (!values.email) {
    errors.email = formatRequiredThing("email");
  } else if (!isEmailValid(values.email)) {
    errors.email = formatWrongThing("email");
  }

  let passwordValidationError = null;
  if (!values.password) {
    errors.password = formatRequiredThing("password");
  } else {
    passwordValidationError = PasswordUtils.validate(values.password);
    errors.password = passwordValidationError;
  }

  if (values.password && !passwordValidationError && !values.re_password) {
    errors.re_password = formatRequiredThing("re-password");
  } else if (values.re_password !== values.password) {
    errors.re_password = "Passwords don't match";
  }
  return errors;
};

const RegisterFormComponent = ({
  classes,
  authInfo,
  togglePasswordVisibility,
  handleRegister,
  openLoginModal,
  handleSubmit,
  submitting,
  valid
}) => (
  <Form
    disabled={submitting}
    onSubmit={handleSubmit(values =>
      handleRegister({
        username: values.email,
        password: values.password
      })
    )}
  >
    <DialogContent>
      <DialogContentText variant="body1">
        to make your life easier.
      </DialogContentText>
      <br />
      <Field
        name="email"
        type="email"
        label="Email"
        placeholder="my-email@mail.com"
        onFocus={() => {}}
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
        placeholder="mySecretPassword"
        helperText={{ text: "Use 8 or more letters and numbers" }}
        orError={meta => meta.dirty && meta.error}
        component={TextField}
        props={{
          disabled: submitting
        }}
        InputProps={{
          endAdornment: (
            <PasswordAdornment
              showPassword={authInfo.isPasswordVisible}
              togglePasswordVisibility={togglePasswordVisibility}
            />
          )
        }}
      />
      <br />
      <Field
        name="re_password"
        type={authInfo.isPasswordVisible ? "text" : "password"}
        label="Re-password"
        placeholder="mySecretPassword"
        props={{
          disabled: submitting
        }}
        orError={meta => meta.invalid}
        component={TextField}
      />
      <br />
    </DialogContent>
    <DialogActions>
      <Button
        disableRipple
        onClick={openLoginModal}
        label="Go to Login"
        variant="text"
        color="primary"
        size="large"
        className={classes.button_alternative}
        disabled={submitting}
      >
        Login
      </Button>
      <Button
        type="submit"
        label="Sign Up"
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        disabled={!valid || submitting}
      >
        Sign Up
      </Button>
    </DialogActions>
  </Form>
);

RegisterFormComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  authInfo: PropTypes.object.isRequired,
  togglePasswordVisibility: PropTypes.func.isRequired,
  handleRegister: PropTypes.func.isRequired,
  openLoginModal: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  valid: PropTypes.bool.isRequired
};

const RegisterForm = reduxForm({
  form: "register",
  validate
})(RegisterFormComponent);
const StyledRegisterForm = responsiveComponent(RegisterForm, {
  vertical,
  horizontal
});

const mapStateToContentProps = state => ({
  authInfo: authInfoSelector(state)
});
const mapDispatchToContentProps = dispatch => ({
  togglePasswordVisibility: isVisible =>
    dispatch(setPasswordVisibilityActionCreator(isVisible)),
  handleRegister: authInfo => dispatch(handleRegisterActionCreator(authInfo)),
  openLoginModal: () => dispatch(openLoginModalActionCreator())
});
const ReduxRegisterForm = connect(
  mapStateToContentProps,
  mapDispatchToContentProps
)(StyledRegisterForm);

export default ReduxRegisterForm;
