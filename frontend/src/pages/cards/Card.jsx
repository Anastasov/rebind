/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Switch from "@material-ui/core/Switch";
import styles from "./styles/CardStyles";
import Icon from "../../components/Icon";
import AutoSubmittingField from "../../components/form/AutoSubmittingField";
import responsiveComponent from "../../meta-components/responsiveComponent";
import DefaultProfilePic from "../../../assets/profile-pic-default.jpg";
import { formatRequiredThing } from "../../config/ux";
import {
  profileSelector,
  profileInitializerSelector
} from "../../reducers/rootReducer";
import { createRows, createMatrix } from "../../util/GridUtil";
import { CARDS_TAB_PATH } from "../../components/nav/BottomNavigationTabs";
import authComponent from "../../meta-components/authComponent";
import { getAllErrors } from "../../util/FormUtils";
/* eslint-enable */

const CardComponent = ({
  classes,
  form,
  getErrors,
  initialValues,
  profile,
  setName,
  toggleSwitch
}) => (
  <div>
    <div className={classes.card_name}>
      <AutoSubmittingField
        form={form}
        name="cardname"
        type="text"
        label="Card name"
        variant="filled"
        placeholder="social_card"
        classes={classes}
        initialValue={initialValues.name}
        synchChangeWithServer={setName(initialValues.id)}
        disableHelper
      />
    </div>

    <Card className={classes.card}>
      <CardMedia
        className={classes.cover}
        image={DefaultProfilePic}
        title="Profile Photo"
      />
      <CardContent className={classes.content}>
        {createRows([
          createMatrix(
            initialValues.protectedBinds
              .map(bind => (
                <div key={bind.id} style={{ width: 50 }}>
                  <Icon name={bind.icon} alt={bind.name} />
                  <Switch
                    color="primary"
                    checked={!bind.bindCheck}
                    onChange={event =>
                      !getErrors(form).cardname &&
                      toggleSwitch(
                        initialValues.id,
                        `bind_${bind.id}`,
                        event.target.checked
                      )
                    }
                    value={`${bind.name}_checked`}
                    disabled={
                      initialValues.id !== 0 &&
                      Boolean(getErrors(form).cardname)
                    }
                  />
                </div>
              ))
              .concat(
                createMatrix([
                  <TextField
                    disabled
                    id="standard-disabled"
                    label="Username"
                    defaultValue={initialValues.user.usernameField.value}
                    className={classes.card_bind_link}
                    margin="normal"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <Switch
                            name="username-switch"
                            color="primary"
                            checked={!initialValues.user.usernameField.hidden}
                            onChange={event =>
                              !getErrors(form).cardname &&
                              toggleSwitch(
                                initialValues.id,
                                "usernameField",
                                event.target.checked
                              )
                            }
                            value="username-switch_checked"
                            disabled={
                              initialValues.id !== 0 &&
                              Boolean(getErrors(form).cardname)
                            }
                          />
                        </InputAdornment>
                      )
                    }}
                  />,
                  <TextField
                    disabled
                    id="standard-disabled"
                    label="Email"
                    defaultValue={initialValues.user.emailField.value}
                    className={classes.card_bind_link}
                    margin="normal"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end" variant="outlined">
                          <Switch
                            color="primary"
                            checked={!initialValues.user.emailField.hidden}
                            onChange={event => {
                              if (!getErrors(form)) {
                                toggleSwitch(
                                  initialValues.id,
                                  "emailField",
                                  event.target.checked
                                );
                              }
                            }}
                            value="name_checked"
                            disabled={
                              initialValues.id !== 0 &&
                              Boolean(getErrors(form).cardname)
                            }
                          />
                        </InputAdornment>
                      )
                    }}
                  />,
                  <TextField
                    disabled
                    id="standard-disabled"
                    label="First Name"
                    defaultValue={initialValues.user.firstNameField.value}
                    className={classes.card_bind_link}
                    margin="normal"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end" variant="filled">
                          <Switch
                            color="primary"
                            checked={!initialValues.user.firstNameField.hidden}
                            onChange={event => {
                              if (!getErrors(form)) {
                                toggleSwitch(
                                  initialValues.id,
                                  "firstNameField",
                                  event.target.checked
                                );
                              }
                            }}
                            value="name_checked"
                            disabled={
                              initialValues.id !== 0 &&
                              Boolean(getErrors(form).cardname)
                            }
                          />
                        </InputAdornment>
                      )
                    }}
                  />,
                  <TextField
                    disabled
                    id="standard-disabled"
                    label="Last Name"
                    defaultValue={initialValues.user.lastNameField.value}
                    className={classes.card_bind_link}
                    margin="normal"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <Switch
                            color="primary"
                            checked={!initialValues.user.lastNameField.hidden}
                            onChange={event => {
                              if (!getErrors(form)) {
                                toggleSwitch(
                                  initialValues.id,
                                  "lastNameField",
                                  event.target.checked
                                );
                              }
                            }}
                            value="name_checked"
                            disabled={
                              initialValues.id !== 0 &&
                              Boolean(getErrors(form).cardname)
                            }
                          />
                        </InputAdornment>
                      )
                    }}
                  />,
                  <TextField
                    disabled
                    id="standard-disabled"
                    label="Phone"
                    defaultValue={initialValues.user.phoneField.value}
                    className={classes.card_bind_link}
                    margin="normal"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <Switch
                            color="primary"
                            checked={!initialValues.user.phoneField.hidden}
                            onChange={event => {
                              if (!getErrors(form)) {
                                toggleSwitch(
                                  initialValues.id,
                                  "phoneField",
                                  event.target.checked
                                );
                              }
                            }}
                            disabled={
                              initialValues.id !== 0 &&
                              Boolean(getErrors(form).cardname)
                            }
                            value="name_checked"
                          />
                        </InputAdornment>
                      )
                    }}
                  />,
                  <TextField
                    disabled
                    id="standard-disabled"
                    label="Post code"
                    defaultValue={initialValues.user.postcodeField.value}
                    className={classes.card_bind_link}
                    margin="normal"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <Switch
                            color="primary"
                            checked={!initialValues.user.postcodeField.hidden}
                            onChange={event => {
                              if (!getErrors(form)) {
                                toggleSwitch(
                                  initialValues.id,
                                  "postcodeField",
                                  event.target.checked
                                );
                              }
                            }}
                            disabled={
                              initialValues.id !== 0 &&
                              Boolean(getErrors(form).cardname)
                            }
                            value="name_checked"
                          />
                        </InputAdornment>
                      )
                    }}
                  />
                ])
              )
              .reverse(),
            {
              spacing: 40,
              alignItems: profile.initializing ? "center" : "flex-start",
              justify: profile.initializing ? "space-evenly" : "center"
            }
          )
        ])}
      </CardContent>
    </Card>
  </div>
);

CardComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  getErrors: PropTypes.func.isRequired,
  form: PropTypes.string.isRequired,
  profile: PropTypes.object.isRequired,
  initialValues: PropTypes.object.isRequired,
  binds: PropTypes.array,
  setName: PropTypes.func.isRequired,
  toggleSwitch: PropTypes.func.isRequired
};

CardComponent.defaultProps = {
  card: null,
  binds: []
};

const validate = values => {
  const errors = {};
  const isLettersAndNumbers = value => /^[A-z0-9]+$/.test(value);
  if (!values.cardname) {
    errors.cardname = `Card Disabled. ${formatRequiredThing("card name")}`;
  } else if (!isLettersAndNumbers(values.cardname)) {
    errors.cardname = `Card Disabled. Please, use only lower-case letters and numbers`;
  }

  return errors;
};

const CardForm = reduxForm({
  validate,
  enableReinitialize: true,
  destroyOnUnmount: false
})(CardComponent);

const StyledCard = responsiveComponent(CardForm, {
  vertical: styles,
  horizontal: styles
});

const mapStateToProps = state => ({
  profile: profileSelector(state),
  binds: profileInitializerSelector(state).binds,
  getErrors: form => getAllErrors(form)(state)
});
const mapDispatchToProps = () => ({});
const ReduxCard = connect(
  mapStateToProps,
  mapDispatchToProps
)(StyledCard);

export default authComponent(ReduxCard, CARDS_TAB_PATH);
