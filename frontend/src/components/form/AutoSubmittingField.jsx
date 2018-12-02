/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Field } from "redux-form";
import Fade from "@material-ui/core/Fade";
import CircularProgress from "@material-ui/core/CircularProgress";
import InputAdornment from "@material-ui/core/InputAdornment";
import CheckCircle from "@material-ui/icons/CheckCircle";
import responsiveComponent from "../../meta-components/responsiveComponent";
import TextField from "./TextField";
import styles from "./styles/AutoSubmittingFieldStyles";
import { formStateSelector } from "../../reducers/rootReducer";
import { hasOwnProps } from "../../util/ObjectUtils";
import { getAllErrors } from "../../util/FormUtils";
/* eslint-enable */

const get = (form, flagName, field, formState) =>
  formState[form] &&
  formState[form][flagName] &&
  formState[form][flagName][field];
// refactor components to pass initialValues[name], error[name], submitting[name], success[name]
const AutoSubmittingField = ({
  classes,
  name,
  form,
  disabled,
  initialValue,
  synchChangeWithServer,
  onChange,
  formState,
  getFormErrors,
  submitting = false,
  success = false,
  error = null,
  disableLoader = false,
  ...properties
}) => {
  // e.g. formState.card.error.youtubeBind
  const isSubmitting = submitting || get(form, "submitting", name, formState);
  const errors = { ...formState[form], ...getFormErrors(form) };
  const showSuccess = success || get(form, "success", name, formState);
  const errorMessage = error || errors[name];
  let endAdornment = null;
  if (isSubmitting && !disableLoader) {
    endAdornment = <CircularProgress className={classes.progress} size={15} />;
  } else {
    endAdornment = (
      <Fade in={showSuccess}>
        <CheckCircle className={classes.icon} />
      </Fade>
    );
  }
  return (
    <Field
      name={name}
      {...properties}
      props={{ disabled: disabled || isSubmitting }}
      onBlur={(event, newValue) => {
        const isDirty = initialValue !== newValue;
        if (isDirty && !hasOwnProps(errors)) {
          synchChangeWithServer(name, newValue);
        }
      }}
      helperText={{ text: errorMessage }}
      orError={() => !!errorMessage}
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

const mapStateToProps = state => ({
  formState: formStateSelector(state),
  getFormErrors: form => getAllErrors(form)(state)
});
const mapDispatchToProps = {};
const ReduxAutoSubmittingField = connect(
  mapStateToProps,
  mapDispatchToProps
)(AutoSubmittingField);

export default responsiveComponent(ReduxAutoSubmittingField, {
  vertical: styles,
  horizontal: styles
});
