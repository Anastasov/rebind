/* eslint-disable */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  reduxForm,
  formValueSelector,
  getFormSyncErrors,
  getFormAsyncErrors,
  getFormMeta
} from "redux-form";
import { withStyles } from "@material-ui/core/styles";
import WarningIcon from "@material-ui/icons/Warning";
import Typography from "@material-ui/core/Typography";
import Icon, { Icons } from "../../components/Icon";
import GridList from "../../components/GridList";
import AutoSubmittingField from "../../components/form/AutoSubmittingField";
import { createStyledRows, createRows, createCols } from "../../util/GridUtil";
import styles from "./styles/BindFormStyles";
import {
  bindInitializerSelector,
  profileSelector,
  authInfoSelector
} from "../../reducers/rootReducer";
import {
  changeBind,
  setIconOnBindForm
} from "../../reducers/profile/profileActionCreators";
import { formatRequiredThing, formatWrongThing } from "../../config/ux";
import { hasOwnProps } from "../../util/ObjectUtils";
/* eslint-enable */

const createItem = (name, title, select, selectedIcon) => ({
  name,
  title,
  onClick: () => select(name),
  selected: selectedIcon === name,
  onClickAway: () => select("")
});

const lastOf = (fieldName, values) => {
  switch (fieldName) {
    case "selectedIcon":
      return !values.selectedIcon && values.url && values.name;
    case "url":
      return !values.url && values.selectedIcon && values.name;
    case "name":
      return !values.name && values.selectedIcon && values.url;
    default:
      return true;
  }
};
class ProfileFormComponent extends Component {
  static defaultProps = {
    profile: {
      submitting: {}
    },
    authInfo: {},
    invalid: false,
    selectedIcon: ""
  };

  static propTypes = {
    initialValues: PropTypes.object.isRequired,
    authInfo: PropTypes.object,
    profile: PropTypes.object,
    classes: PropTypes.object.isRequired,
    invalid: PropTypes.bool,
    submitting: PropTypes.bool.isRequired,
    formValues: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    fieldsMeta: PropTypes.object.isRequired,
    changeBindProp: PropTypes.func.isRequired,
    selectIcon: PropTypes.func.isRequired
  };

  synchChangeWithServer = () => {
    const {
      authInfo,
      errors,
      formValues,
      initialValues,
      changeBindProp
    } = this.props;
    if (!hasOwnProps(errors)) {
      changeBindProp(
        authInfo.id,
        initialValues ? initialValues.id : null,
        formValues
      );
    }
  };

  render() {
    const {
      classes,
      profile,
      selectIcon,
      fieldsMeta,
      initialValues,
      formValues,
      errors
    } = this.props;

    const items = [
      createItem(
        Icons.SNAPCHAT.name,
        "Snapchat",
        selectIcon,
        formValues.selectedIcon
      ),
      createItem(
        Icons.INSTAGRAM.name,
        "Instagram",
        selectIcon,
        formValues.selectedIcon
      ),
      createItem(
        Icons.TWITTER.name,
        "Twitter",
        selectIcon,
        formValues.selectedIcon
      )
    ];
    const touchedOrLast = fieldName =>
      (fieldsMeta[fieldName] && fieldsMeta[fieldName].touched) ||
      lastOf(fieldName, formValues);
    const leftPanel = <GridList items={items} />;
    let icon;
    if (formValues.selectedIcon) {
      icon = <Icon name={formValues.selectedIcon} />;
    } else {
      icon = lastOf("selectedIcon", formValues) ? (
        createRows(
          [
            <WarningIcon className={classes.icon_warning} />,
            <Typography variant="caption" gutterBottom align="center">
              Please select an icon from the list.
            </Typography>
          ],
          { spacing: 0 }
        )
      ) : (
        <Icon empty />
      );
    }

    const rightPanel = createStyledRows(
      [
        icon,
        <AutoSubmittingField
          form="bind"
          name="name"
          type="text"
          label="Set 'Bind' name"
          placeholder="Facebook"
          variant="outlined"
          classes={classes}
          disabled={profile.submitting.name}
          submitting={profile.submitting.name}
          success={profile.success.name}
          errors={touchedOrLast("name") ? errors.name : ""}
          initialValue={initialValues.name}
          synchChangeWithServer={this.synchChangeWithServer}
          disableLoader
        />,
        <AutoSubmittingField
          form="bind"
          name="url"
          type="text"
          label="Set 'Bind' URL"
          placeholder="https://www.facebook.com/zuck"
          variant="outlined"
          classes={classes}
          disabled={profile.submitting.url}
          submitting={profile.submitting.url}
          success={profile.success.url}
          error={touchedOrLast("url") ? errors.url : ""}
          initialValue={initialValues.url}
          synchChangeWithServer={this.synchChangeWithServer}
          disableLoader
        />
      ],
      {},
      [{ xs: 6 }, { xs: 8 }, { xs: 12 }]
    );
    return (
      !profile.initializing &&
      createCols(
        [leftPanel, rightPanel],
        { spacing: 24, style: { minWidth: 500 } },
        { xs: 6 }
      )
    );
  }
}

const validate = values => {
  const errors = {};
  const isLettersAndNumbers = value => /^[A-z0-9]+$/.test(value);
  if (!values.selectedIcon) {
    errors.selectedIcon = "select Icon please";
  }

  if (!values.name) {
    errors.name = formatRequiredThing("Bind name");
  } else if (!isLettersAndNumbers(values.name)) {
    errors.name = formatWrongThing(
      "name",
      "use only lower-case letters and numbers"
    );
  }

  if (!values.url) {
    errors.url = formatRequiredThing("Bind url");
  }

  return errors;
};

const ProfileForm = reduxForm({
  form: "bind",
  validate,
  enableReinitialize: true
})(ProfileFormComponent);
const StyledProfileForm = withStyles(styles)(ProfileForm);

const mapStateToProps = state => ({
  authInfo: authInfoSelector(state),
  initialValues: bindInitializerSelector(state),
  fieldsMeta: getFormMeta("bind")(state),
  formValues: {
    selectedIcon: formValueSelector("bind")(state, "selectedIcon"),
    name: formValueSelector("bind")(state, "name"),
    url: formValueSelector("bind")(state, "url")
  },
  profile: profileSelector(state),
  errors: {
    ...profileSelector(state).error,
    ...getFormSyncErrors("bind")(state),
    ...getFormAsyncErrors("bind")(state)
  }
});
const mapDispatchToProps = {
  changeBindProp: changeBind,
  selectIcon: setIconOnBindForm
};
const ReduxProfileForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(StyledProfileForm);

export default ReduxProfileForm;
