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
  handleRegisterActionCreator
} from '../../reducers/auth/authActionCreators';
import {
  openLoginModalActionCreator
} from '../../reducers/modal/modalActionCreators';
import isEmailValid from 'sane-email-validation';
import { formatRequiredThing, formatWrongThing } from '../../assets/ux';
import styles from './RegisterPageStyles';
/* eslint-enable */

export const PAGE_NAME = 'Sign up';

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

  if (!values.re_password) {
    errors.re_password = formatRequiredThing('re-password');
  } else if (!values.password || values.re_password !== values.password) {
    errors.re_password = 'Passwords don\'t match';
  }
  return errors;
};

const RegisterPageComponent = ({
  classes,
  authInfo,
  togglePasswordVisibility,
  handleRegister,
  openLoginModal,
  handleSubmit,
  submitting,
  valid
}) => <Form onSubmit={
        handleSubmit(values => handleRegister({
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
      <Field
        name="re_password"
        type={authInfo.isPasswordVisible ? 'text' : 'password'}
        label="Re-password"
        placeholder="mySecretPassowrd"
        className={classes.textField}
        component={FieldRenderer}
      />
      <br />
    </DialogContent>
    <DialogActions>
      <Button
        disableRipple
        onClick={(() => openLoginModal())}
        label="Go to Sign In"
        style={styles}
        variant="text"
        color="primary"
        onHover={() => null}
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
  </Form>;


RegisterPageComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  authInfo: PropTypes.object.isRequired,
  togglePasswordVisibility: PropTypes.func.isRequired,
  handleRegister: PropTypes.func.isRequired,
  openLoginModal: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  valid: PropTypes.bool.isRequired
};

const RegisterPageForm = reduxForm({
  form: 'register',
  validate
})(RegisterPageComponent);
const StyledRegisterPageForm = withStyles(styles)(RegisterPageForm);
const mapStateToContentProps = state => ({
  authInfo: getAuthInfoSelector(state)
});
const mapDispatchToContentProps = dispatch => ({
  togglePasswordVisibility: isVisible => dispatch(setPasswordVisibilityActionCreator(isVisible)),
  handleRegister: authInfo => new Promise(() => dispatch(handleRegisterActionCreator(authInfo))),
  openLoginModal: () => dispatch(openLoginModalActionCreator())
});
const ReduxRegisterPage = connect(
  mapStateToContentProps,
  mapDispatchToContentProps
)(StyledRegisterPageForm);

export default ReduxRegisterPage;
