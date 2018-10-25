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
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import { authInfoSelector } from "../../reducers/rootReducer";
import {
  setPasswordVisibilityActionCreator,
  handleRegisterActionCreator
} from "../../reducers/auth/authActionCreators";
import { openLoginModalActionCreator } from "../../reducers/modal/modalActionCreators";
import isEmailValid from "sane-email-validation";
import { formatRequiredThing, formatWrongThing } from "../../config/ux";
import styles from "./RegisterFormStyles";
import { devLog } from "../../util/ObjectUtils";
/* eslint-enable */

export const PAGE_NAME = "Sign up";

const showError = meta => meta.touched && meta.error;
const FieldRenderer = ({
  input,
  meta,
  label,
  orError = () => false,
  ...rest
}) => (
  <TextField
    fullWidth
    color="inherit"
    error={showError(meta) || orError(meta)}
    label={showError(meta) ? meta.error : label}
    {...input}
    {...rest}
  />
);
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

  if (!values.re_password) {
    errors.re_password = formatRequiredThing("re-password");
  } else if (!values.password || values.re_password !== values.password) {
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
      <DialogContentText>to continue with ReBind.</DialogContentText>
      <br />
      <Field
        name="email"
        type="email"
        label="Email"
        placeholder="my-email@mail.com"
        className={classes.textField}
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
        component={FieldRenderer}
      />
      <br />
      <Field
        name="password"
        type={authInfo.isPasswordVisible ? "text" : "password"}
        label="Password"
        placeholder="mySecretPassowrd"
        className={classes.textField}
        props={{
          disabled: submitting
        }}
        InputProps={{
          endAdornment: passAdornment(
            authInfo.isPasswordVisible,
            togglePasswordVisibility
          )
        }}
        component={FieldRenderer}
      />
      <br />
      <Field
        name="re_password"
        type={authInfo.isPasswordVisible ? "text" : "password"}
        label="Re-password"
        placeholder="mySecretPassowrd"
        className={classes.textField}
        props={{
          disabled: submitting
        }}
        orError={meta => meta.invalid}
        component={FieldRenderer}
      />
      <br />
    </DialogContent>
    <DialogActions>
      <Button
        disableRipple
        onClick={() => openLoginModal()}
        label="Go to Sign In"
        style={styles}
        variant="text"
        color="primary"
        className={classes.button_alternative}
        disabled={submitting}
      >
        Or, Sign In
      </Button>
      <Button
        type="submit"
        label="Sign Up"
        style={styles}
        variant="contained"
        color="primary"
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

const ReduxFormRegisterForm = reduxForm({
  form: "register",
  validate
})(RegisterFormComponent);
const StyledRegisterForm = withStyles(styles)(ReduxFormRegisterForm);

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
