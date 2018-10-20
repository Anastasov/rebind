/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm, Form, Field } from 'redux-form';
import InputAdornment from '@material-ui/core/InputAdornment';
import Email from '@material-ui/icons/Email';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import { getAuthInfoSelector } from '../../reducers/rootReducer';
import {
  setPasswordVisibilityActionCreator,
  handleLoginActionCreator
} from '../../reducers/auth/authActionCreators';
import isEmailValid from 'sane-email-validation';
import { formatRequiredThing, formatWrongThing } from '../../assets/ux';
import styles from './LoginFormStyles';
import { openSignUpModalActionCreator } from '../../reducers/modal/modalActionCreators';
/* eslint-enable */

export const PAGE_NAME = 'Login';

const showError = meta => meta.touched && meta.error;
const FieldRenderer = ({
  input,
  meta,
  type,
  label,
  placeholder,
  className,
  value,
  onChange,
  InputProps
}) => <TextField
    fullWidth
    color="inherit"
    error={showError(meta)}
    type={type}
    label={showError(meta) ? meta.error : label}
    placeholder={placeholder}
    className={className}
    value={value}
    onChange={onChange}
    InputProps={InputProps}
    {...input}
  />;

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

const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = formatRequiredThing('email');
  } else if (!isEmailValid(values.email)) {
    errors.email = formatWrongThing('email', false);
  }

  if (!values.password) {
    errors.password = formatRequiredThing('password');
  }

  return errors;
};

const LoginFormComponent = ({
  classes,
  authInfo,
  togglePasswordVisibility,
  handleLogin,
  openSignUpModal,
  handleSubmit,
  submitting,
  valid
}) => <Form onSubmit={
        handleSubmit(values => handleLogin({
          username: values.email,
          password: values.password
        }))}
      >
    <DialogContent>
      <DialogContentText>
        to continue with ReBind.
      </DialogContentText>
      <br />
      <Field
        name="email"
        type="email"
        label="Email"
        placeholder="my-email@mail.com"
        className={classes.textField}
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
        type={authInfo.isPasswordVisible ? 'text' : 'password'}
        label="Password"
        placeholder="mySecretPassowrd"
        className={classes.textField}
        InputProps={{
          endAdornment: passAdornment(authInfo.isPasswordVisible, togglePasswordVisibility)
        }}
        component={FieldRenderer}
      />
      <br />
    </DialogContent>
    <DialogActions>
    <Button
        disableRipple
        onClick={(() => openSignUpModal())}
        label="Go to Sign In"
        style={styles}
        variant="text"
        color="primary"
        onHover={() => null}
        className={classes.button_alternative}
        disabled={submitting}
      >
        Or, Sign Up
      </Button>
      <Button
        type="submit"
        label="Submit"
        style={styles}
        variant="contained"
        color="primary"
        className={classes.button}
        disabled={!valid || submitting}
      >
        Login
    </Button>
    </DialogActions>
  </Form>;


LoginFormComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  authInfo: PropTypes.object.isRequired,
  openSignUpModal: PropTypes.func.isRequired,
  togglePasswordVisibility: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  valid: PropTypes.bool.isRequired
};

const LoginForm = reduxForm({
  form: 'login',
  validate
})(LoginFormComponent);
const StyledLoginForm = withStyles(styles)(LoginForm);
const mapStateToContentProps = state => ({
  authInfo: getAuthInfoSelector(state)
});
const mapDispatchToContentProps = dispatch => ({
  togglePasswordVisibility: isVisible => dispatch(setPasswordVisibilityActionCreator(isVisible)),
  handleLogin: userCredentials => new Promise(
    () => dispatch(handleLoginActionCreator(userCredentials))
  ),
  openSignUpModal: () => dispatch(openSignUpModalActionCreator())
});
const ReduxLoginForm = connect(
  mapStateToContentProps,
  mapDispatchToContentProps
)(StyledLoginForm);

export default ReduxLoginForm;
