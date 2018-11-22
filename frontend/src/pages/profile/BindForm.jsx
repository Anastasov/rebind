/* eslint-disable */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  Form,
  reset,
  reduxForm,
  formValueSelector,
  getFormSyncErrors,
  getFormAsyncErrors,
  getFormMeta
} from "redux-form";
import WarningIcon from "@material-ui/icons/Warning";
import SwipeableViews from "react-swipeable-views";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Slide from "@material-ui/core/Slide";
import Tab from "@material-ui/core/Tab";
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
  setIconOnBindForm,
  setTabOnBindForm
} from "../../reducers/profile/profileActionCreators";
import { formatRequiredThing, formatWrongThing } from "../../config/ux";
import { hasOwnProps, getObjectProps, devLog } from "../../util/ObjectUtils";
import { setModalOnCloseActionCreator } from "../../reducers/modal/modalActionCreators";
import TabContainer from "../../components/nav/TabContainer";
import responsiveComponent from "../../meta-components/responsiveComponent";
/* eslint-enable */

const createItem = (name, title, select, icon) => ({
  name,
  title,
  onClick: () => select(name),
  selected: icon === name,
  onClickAway: () => select("")
});
const doNothing = () => ({});

const lastOf = (fieldName, values) => {
  switch (fieldName) {
    case "icon":
      return !values.icon && values.url && values.name;
    case "url":
      return !values.url && values.icon && values.name;
    case "name":
      return !values.name && values.icon && values.url;
    default:
      return true;
  }
};
class BindFormComponent extends Component {
  static defaultProps = {
    profile: {
      submitting: {}
    },
    authInfo: {},
    invalid: false,
    icon: ""
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
    setModalOnClose: PropTypes.func.isRequired,
    resetForm: PropTypes.func.isRequired,
    selectIcon: PropTypes.func.isRequired,
    selectTab: PropTypes.func.isRequired
  };

  componentDidMount() {
    const { setModalOnClose, resetForm } = this.props;
    setModalOnClose(() => {
      resetForm();
      setModalOnClose(doNothing);
    });
  }

  synchChangeWithServer = (field, value) => {
    const {
      authInfo,
      errors,
      formValues,
      initialValues,
      changeBindProp
    } = this.props;
    const isAdd = !initialValues || !initialValues.id;
    if (!hasOwnProps(errors)) {
      const bind = isAdd ? { ...formValues } : {};
      bind[field] = value;
      changeBindProp(authInfo.id, isAdd ? initialValues.id : null, bind);
    }
  };

  render() {
    const {
      classes,
      profile,
      selectIcon,
      selectTab,
      fieldsMeta,
      initialValues,
      formValues,
      errors
    } = this.props;
    const userIsNotTyping =
      (!fieldsMeta.url || !fieldsMeta.url.active) &&
      (!fieldsMeta.name || !fieldsMeta.name.active);
    const showIconError = lastOf("icon", formValues) && userIsNotTyping;
    const touchedOrLast = fieldName =>
      (fieldsMeta[fieldName] && fieldsMeta[fieldName].touched) ||
      lastOf(fieldName, formValues);
    const selectAndChangeTab = iconName => {
      const isCreating = !initialValues.icon;
      if (isCreating) {
        selectIcon(iconName);
        selectTab(1);
      } else if (iconName) {
        this.synchChangeWithServer("icon", iconName);
      }
    };
    const items = getObjectProps(Icons).map(iconKey =>
      createItem(
        Icons[iconKey].name,
        Icons[iconKey].title,
        selectAndChangeTab,
        formValues.icon
      )
    );
    const leftPanel = (
      <React.Fragment>
        <Slide direction="right" in={showIconError} mountOnEnter unmountOnExit>
          <Typography className={classes.error_message} variant="caption">
            Please select an icon from the list.
          </Typography>
        </Slide>

        <GridList items={items} cols={7} spacing={14} />
      </React.Fragment>
    );

    let icon;
    if (formValues.icon) {
      icon = <Icon name={formValues.icon} />;
    } else if (showIconError) {
      selectTab(0);
      icon = createRows(
        [
          <WarningIcon className={classes.icon_warning} />,
          <Typography variant="caption" gutterBottom align="center">
            Please select an icon from the list.
          </Typography>
        ],
        { spacing: 0 }
      );
    } else {
      icon = <Icon empty />;
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
    const direction = "ltr";
    return (
      !profile.initializing && (
        <Form onSubmit={doNothing}>
          <div className={classes.root}>
            <AppBar position="static" color="secondary">
              <Tabs
                value={formValues.tabSelected}
                onChange={(event, value) => selectTab(value)}
                indicatorColor="secondary"
                textColor="primary"
                fullWidth
              >
                <Tab label="Select Icon" />
                <Tab label="Bind Details" />
              </Tabs>
            </AppBar>
            <SwipeableViews
              axis={direction === "rtl" ? "x-reverse" : "x"}
              index={formValues.tabSelected}
              onChangeIndex={selectTab}
            >
              <TabContainer dir={direction}>{leftPanel}</TabContainer>
              <TabContainer dir={direction}>{rightPanel}</TabContainer>
            </SwipeableViews>
          </div>
        </Form>
      )
    );
  }
}

const validate = values => {
  const errors = {};
  const isLettersAndNumbers = value => /^[A-z0-9]+$/.test(value);
  if (!values.icon) {
    errors.icon = "select Icon please";
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

const BindForm = reduxForm({
  form: "bind",
  validate,
  enableReinitialize: true
})(BindFormComponent);
const StyledBindForm = responsiveComponent(BindForm, {
  vertical: styles,
  horizontal: styles
});

const mapStateToProps = state => ({
  authInfo: authInfoSelector(state),
  initialValues: bindInitializerSelector(state),
  fieldsMeta: getFormMeta("bind")(state),
  formValues: {
    tabSelected: formValueSelector("bind")(state, "tabSelected") || 0,
    icon: formValueSelector("bind")(state, "icon"),
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
  selectIcon: setIconOnBindForm,
  selectTab: setTabOnBindForm,
  setModalOnClose: setModalOnCloseActionCreator,
  resetForm: () => reset("bind")
};
const ReduxBindForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(StyledBindForm);

export default ReduxBindForm;
