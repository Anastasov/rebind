/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import { Field } from "redux-form";
import Fade from "@material-ui/core/Fade";
import CircularProgress from "@material-ui/core/CircularProgress";
import InputAdornment from "@material-ui/core/InputAdornment";
import CheckCircle from "@material-ui/icons/CheckCircle";
import responsiveComponent from "../../meta-components/responsiveComponent";
import TextField from "./TextField";
import styles from "./styles/AutoSubmittingFieldStyles";
/* eslint-enable */
// refactor components to pass initialValues[name], error[name], submitting[name], success[name]
const AutoSubmittingField = ({
  classes,
  name,
  form,
  submitting,
  disabled,
  error,
  initialValue,
  success,
  synchChangeWithServer,
  onChange,
  disableLoader = false,
  ...properties
}) => {
  let endAdornment = null;
  if (submitting && !disableLoader) {
    endAdornment = <CircularProgress className={classes.progress} size={15} />;
  } else {
    endAdornment = (
      <Fade in={success}>
        <CheckCircle className={classes.icon} />
      </Fade>
    );
  }
  return (
    <Field
      name={name}
      {...properties}
      props={{ disabled }}
      onBlur={(event, newValue) => {
        const isDirty = initialValue !== newValue;
        if (isDirty) {
          synchChangeWithServer(name, newValue);
        }
      }}
      helperText={{ text: error }}
      orError={() => !!error}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">{endAdornment}</InputAdornment>
        )
      }}
      component={TextField}
    />
  );
};

AutoSubmittingField.propTypes = {
  name: PropTypes.string.isRequired,
  synchChangeWithServer: PropTypes.func.isRequired,
  error: PropTypes.string
};

AutoSubmittingField.defaultProps = {
  error: ""
};

export default responsiveComponent(AutoSubmittingField, {
  vertical: styles,
  horizontal: styles
});
