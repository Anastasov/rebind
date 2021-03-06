/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import { removeHigherOrderParams } from "../../util/ObjectUtils";
import styles from "./styles/TextFieldStyles";
import responsiveComponent from "../../meta-components/responsiveComponent";
/* eslint-enable */

const hasValidationError = meta => meta.error && meta.touched;
const showError = (meta, orError) =>
  Boolean(
    orError
      ? hasValidationError(meta) || orError(meta)
      : hasValidationError(meta)
  );

const visibleHelperText = (meta, orError, helperText) => {
  let helper = null;
  if (showError(meta, orError)) {
    helper = meta.error || helperText.text;
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
  disableHelper = false,
  ...rest
}) => (
  <TextField
    fullWidth
    className={classes.formControl}
    color="inherit"
    error={showError(meta, orError)}
    label={
      disableHelper && showError(meta, orError)
        ? visibleHelperText(meta, orError, helperText)
        : label
    }
    helperText={!disableHelper && visibleHelperText(meta, orError, helperText)}
    {...input}
    {...removeHigherOrderParams(rest)}
  />
);
TextFieldComponent.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  disableHelper: PropTypes.bool.isRequired,
  fullWidth: PropTypes.bool,
  helperText: PropTypes.object,
  label: PropTypes.string,
  orError: PropTypes.func
};

TextFieldComponent.defaultProps = {
  label: "",
  helperText: { text: "" },
  orError: () => false,
  fullWidth: false,
  disableHelper: false
};

export default responsiveComponent(TextFieldComponent, {
  vertical: styles,
  horizontal: styles
});
