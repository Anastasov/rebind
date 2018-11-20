/* eslint-disable */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  reduxForm,
  Field,
  getFormSyncErrors,
  getFormAsyncErrors,
  getFormMeta
} from "redux-form";
import { withStyles } from "@material-ui/core/styles";
import Fade from "@material-ui/core/Fade";
import TextField from "../../components/form/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import CircularProgress from "@material-ui/core/CircularProgress";
import CheckCircle from "@material-ui/icons/CheckCircle";
import { createMatrix } from "../../util/GridUtil";
import styles from "./styles/ProfileFormStyles";
import {
  profileInitializerSelector,
  profileSelector
} from "../../reducers/rootReducer";
import { changeProfileDataField } from "../../reducers/profile/profileActionCreators";
import { formatRequiredThing, formatWrongThing } from "../../config/ux";
/* eslint-enable */

const AutoSubmittingField = ({
  classes,
  name,
  formIsInvalid,
  submitting,
  errors,
  initialValues,
  success,
  synchChangeWithServer,
  ...properties
}) => {
  let endAdornment = null;
  if (submitting[name]) {
    endAdornment = <CircularProgress className={classes.progress} size={15} />;
  } else {
    endAdornment = (
      <Fade in={success[name]}>
        <CheckCircle className={classes.icon} />
      </Fade>
    );
  }
  return (
    <Field
      name={name}
      {...properties}
      props={{
        disabled: submitting[name] || (formIsInvalid && !errors[name])
      }}
      onBlur={(event, newValue) => {
        const isDirty = initialValues[name] !== newValue;
        if (isDirty) {
          synchChangeWithServer(name, newValue);
        }
      }}
      helperText={{ text: errors[name] }}
      orError={() => !!errors[name]}
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
  formIsInvalid: PropTypes.bool,
  errors: PropTypes.object.isRequired,
  synchChangeWithServer: PropTypes.func.isRequired
};

AutoSubmittingField.defaultProps = {
  formIsInvalid: false
};

class ProfileFormComponent extends Component {
  static defaultProps = {
    profile: {
      submitting: {}
    },
    authInfo: {},
    invalid: false
  };

  static propTypes = {
    initialValues: PropTypes.object.isRequired,
    authInfo: PropTypes.object,
    profile: PropTypes.object,
    classes: PropTypes.object.isRequired,
    invalid: PropTypes.bool,
    submitting: PropTypes.bool.isRequired,
    errors: PropTypes.object.isRequired,
    changeDatum: PropTypes.func.isRequired
  };

  synchChangeWithServer = (field, value) => {
    const { authInfo, errors, changeDatum } = this.props;
    if (!errors[field]) {
      changeDatum(authInfo.id, field, value);
    }
  };

  render() {
    const { classes, profile, invalid, initialValues, errors } = this.props;
    const allErrors = { ...errors, ...profile.error };
    const fields = [
      <AutoSubmittingField
        name="username"
        type="text"
        label="Set your username"
        placeholder="emuskfan5"
        classes={classes}
        submitting={profile.submitting}
        success={profile.success}
        formIsInvalid={invalid}
        errors={allErrors}
        initialValues={initialValues}
        synchChangeWithServer={this.synchChangeWithServer}
      />,
      <AutoSubmittingField
        name="email"
        type="email"
        label="Set your email"
        placeholder="my-email@mail.com"
        classes={classes}
        submitting={profile.submitting}
        success={profile.success}
        formIsInvalid={invalid}
        errors={allErrors}
        initialValues={initialValues}
        synchChangeWithServer={this.synchChangeWithServer}
      />,
      <AutoSubmittingField
        name="firstName"
        type="text"
        label="Set your first name"
        placeholder="John"
        classes={classes}
        submitting={profile.submitting}
        success={profile.success}
        formIsInvalid={invalid}
        errors={allErrors}
        initialValues={initialValues}
        synchChangeWithServer={this.synchChangeWithServer}
      />,
      <AutoSubmittingField
        name="lastName"
        type="text"
        label="Set your last name"
        placeholder="Johnson"
        classes={classes}
        submitting={profile.submitting}
        success={profile.success}
        formIsInvalid={invalid}
        errors={allErrors}
        initialValues={initialValues}
        synchChangeWithServer={this.synchChangeWithServer}
      />,
      <AutoSubmittingField
        name="phone"
        type="text"
        label="Set your phone number"
        placeholder="0 7401 765522"
        normalize={value =>
          /^[\s0-9]+$/.test(value)
            ? value
            : value.substring(0, value.length - 1)
        }
        classes={classes}
        submitting={profile.submitting}
        success={profile.success}
        formIsInvalid={invalid}
        errors={allErrors}
        initialValues={initialValues}
        synchChangeWithServer={this.synchChangeWithServer}
      />,
      <AutoSubmittingField
        name="postcode"
        type="text"
        label="Set your post code"
        placeholder="M14 7LH"
        normalize={value => value.toUpperCase()}
        classes={classes}
        submitting={profile.submitting}
        success={profile.success}
        formIsInvalid={invalid}
        errors={allErrors}
        initialValues={initialValues}
        synchChangeWithServer={this.synchChangeWithServer}
      />
    ];
    return createMatrix(fields, { spacing: 24 }, { xs: 5 });
  }
}

const validate = values => {
  const errors = {};
  const isLettersAndNumbers = value => /^[A-z0-9]+$/.test(value);
  if (!values.username) {
    errors.username = formatRequiredThing("email");
  } else if (!isLettersAndNumbers(values.username)) {
    errors.username = formatWrongThing(
      "username",
      "use only lower-case letters and numbers"
    );
  }

  return errors;
};

const ProfileForm = reduxForm({
  form: "profile",
  validate,
  enableReinitialize: true,
  destroyOnUnmount: false
})(ProfileFormComponent);
const StyledProfileForm = withStyles(styles)(ProfileForm);

const mapStateToProps = state => ({
  initialValues: profileInitializerSelector(state),
  profile: profileSelector(state),
  errors: {
    ...getFormSyncErrors("profile")(state),
    ...getFormAsyncErrors("profile")(state)
  }
});
const mapDispatchToProps = {
  changeDatum: changeProfileDataField
};
const ReduxProfileForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(StyledProfileForm);

export default ReduxProfileForm;
