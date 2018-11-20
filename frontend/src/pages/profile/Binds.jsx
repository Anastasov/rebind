/* eslint-disable */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/AddBox";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/BindsStyles";
import { profileInitializerSelector } from "../../reducers/rootReducer";
import {
  loadBindModalActionCreator,
  alertDeleteBindActionCreator
} from "../../reducers/modal/modalActionCreators";
import { createMatrix } from "../../util/GridUtil";
import BindIcon from "./BindIcon";
/* eslint-enable */

class Binds extends Component {
  static defaultProps = {
    binds: [],
    authInfo: {},
    profile: {
      submitting: {}
    }
  };

  static propTypes = {
    classes: PropTypes.object.isRequired,
    openBindModal: PropTypes.func.isRequired,
    deleteBindAlert: PropTypes.func.isRequired,
    binds: PropTypes.array,
    authInfo: PropTypes.object,
    profile: PropTypes.object
  };

  render() {
    const {
      classes,
      profile,
      binds,
      openBindModal,
      deleteBindAlert
    } = this.props;
    const addButton = (
      <IconButton
        component="span"
        color="primary"
        className={classes.button}
        onClick={() => openBindModal({})}
      >
        <AddIcon className={classes.icon} />
      </IconButton>
    );
    const buttons = binds
      ? binds.map(bind => (
          <BindIcon bind={bind} deleteBindAlert={deleteBindAlert} />
        ))
      : [];
    buttons.push(addButton);
    return (
      !profile.initializing && (
        <div className={classes.buttons}>
          {createMatrix(buttons, {
            spacing: 40,
            alignItems: "flex-end",
            justify: "flex-start"
          })}
        </div>
      )
    );
  }
}
const StyledBinds = withStyles(styles)(Binds);

const mapStateToProps = state => ({
  binds: profileInitializerSelector(state).binds
});
const mapDispatchToProps = {
  openBindModal: loadBindModalActionCreator,
  deleteBindAlert: alertDeleteBindActionCreator
};
const ReduxBinds = connect(
  mapStateToProps,
  mapDispatchToProps
)(StyledBinds);

export default ReduxBinds;
