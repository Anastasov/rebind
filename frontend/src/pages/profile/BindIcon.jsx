/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import { isMobile } from "react-device-detect";
import { withStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import DeleteIcon from "@material-ui/icons/Delete";
import styles from "./styles/BindIconStyles";
import Icon from "../../components/Icon";
/* eslint-enable */

const BindIcon = ({ classes, bind, deleteBindAlert }) =>
  isMobile ? (
    <React.Fragment>
      <Icon name={bind.icon} alt={bind.name} />
      <div>
        <div className={classes.arrow_permanent} />
        <div
          className={classes.tooltip_permanent}
          onClick={() => deleteBindAlert(bind)}
        >
          <DeleteIcon
            className={classes.delete_icon_permanent}
            color="primary"
          />
        </div>
      </div>
    </React.Fragment>
  ) : (
    <Tooltip
      title={
        <div onClick={() => deleteBindAlert(bind)}>
          <DeleteIcon className={classes.delete_icon} color="primary" />
          <span className={classes.arrow} />
        </div>
      }
      classes={{ tooltip: classes.tooltip, popper: classes.arrowPopper }}
      interactive
    >
      <Icon name={bind.icon} alt={bind.name} />
    </Tooltip>
  );

BindIcon.propTypes = {
  classes: PropTypes.object.isRequired,
  deleteBindAlert: PropTypes.func.isRequired,
  bind: PropTypes.shape({
    id: PropTypes.number.isRequired,
    icon: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  })
};

export default withStyles(styles)(BindIcon);
