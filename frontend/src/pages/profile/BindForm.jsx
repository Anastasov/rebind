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
import { withStyles } from "@material-ui/core/styles";
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
  authInfoSelector,
  modalSelector
} from "../../reducers/rootReducer";
import {
  changeBind,
  setIconOnBindForm,
  setTabOnBindForm
} from "../../reducers/profile/profileActionCreators";
import { formatRequiredThing, formatWrongThing } from "../../config/ux";
import { hasOwnProps } from "../../util/ObjectUtils";
import { setModalOnCloseActionCreator } from "../../reducers/modal/modalActionCreators";
import TabContainer from "../../components/nav/TabContainer";
/* eslint-enable */

const createItem = (name, title, select, selectedIcon) => ({
  name,
  title,
  onClick: () => select(name),
  selected: selectedIcon === name,
  onClickAway: () => select("")
});
const doNothing = () => ({});

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
class BindFormComponent extends Component {
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
    modal: PropTypes.object,
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
      selectTab,
      fieldsMeta,
      initialValues,
      formValues,
      errors
    } = this.props;
    const userIsNotTyping =
      (!fieldsMeta.url || !fieldsMeta.url.active) &&
      (!fieldsMeta.name || !fieldsMeta.name.active);
    const showIconError = lastOf("selectedIcon", formValues) && userIsNotTyping;
    const touchedOrLast = fieldName =>
      (fieldsMeta[fieldName] && fieldsMeta[fieldName].touched) ||
      lastOf(fieldName, formValues);
    const selectAndChangeTab = name => {
      selectIcon(name);
      setTimeout(() => selectTab(1), 500);
    };
    const items = [
      createItem(
        Icons.FACEBOOK.name,
        "Facebook",
        selectAndChangeTab,
        formValues.selectedIcon
      ),
      createItem(
        Icons.SNAPCHAT.name,
        "Snapchat",
        selectAndChangeTab,
        formValues.selectedIcon
      ),
      createItem(
        Icons.INSTAGRAM.name,
        "Instagram",
        selectAndChangeTab,
        formValues.selectedIcon
      ),
      createItem(
        Icons.TWITTER.name,
        "Twitter",
        selectAndChangeTab,
        formValues.selectedIcon
      )
    ];
    const leftPanel = (
      <React.Fragment>
        <Slide direction="right" in={showIconError} mountOnEnter unmountOnExit>
          <Typography className={classes.error} variant="caption">
            Please select an icon from the list.
          </Typography>
        </Slide>

        <GridList items={items} cols={8} spacing={14} />
      </React.Fragment>
    );

    let icon;

    if (formValues.selectedIcon) {
      icon = <Icon name={formValues.selectedIcon} />;
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

const BindForm = reduxForm({
  form: "bind",
  validate,
  enableReinitialize: true
})(BindFormComponent);
const StyledBindForm = withStyles(styles)(BindForm);

const mapStateToProps = state => ({
  authInfo: authInfoSelector(state),
  modal: modalSelector(state),
  initialValues: bindInitializerSelector(state),
  fieldsMeta: getFormMeta("bind")(state),
  formValues: {
    tabSelected: formValueSelector("bind")(state, "tabSelected"),
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
