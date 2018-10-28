/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import styles from "./TextFieldStyles";
/* eslint-enable */

const hasValidationError = meta => meta.error && meta.touched;
const showError = (meta, orError) =>
  !!(orError
    ? hasValidationError(meta) || orError(meta)
    : hasValidationError(meta));

const visibleHelperText = (meta, orError, helperText) => {
  let helper = null;
  if (showError(meta, orError)) {
    helper = meta.error;
  } else if (meta.pristine || helperText.static) {
    helper = helperText.text;
  }
  return helper;
};

const TextFieldComponent = ({
  classes,
  input,
  meta,
  label,
  helperText,
  orError,
  fullWidth,
  ...rest
}) => (
  <TextField
    fullWidth
    className={classes.formControl}
    color="inherit"
    error={showError(meta, orError)}
    label={label}
    helperText={visibleHelperText(meta, orError, helperText)}
    {...input}
    {...rest}
  />
);

TextFieldComponent.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  fullWidth: PropTypes.bool,
  helperText: PropTypes.object,
  label: PropTypes.string,
  orError: PropTypes.func
};

TextFieldComponent.defaultProps = {
  label: "",
  helperText: { text: "" },
  orError: () => false,
  fullWidth: false
};

export default withStyles(styles)(TextFieldComponent);
