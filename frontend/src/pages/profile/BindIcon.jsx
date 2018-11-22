/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Icon from "../../components/Icon";
import vertical from "./styles/BindIconVerticalStyles";
import horizontal from "./styles/BindIconHorizontalStyles";
import responsiveComponent from "../../meta-components/responsiveComponent";
/* eslint-enable */

const BindIcon = ({
  classes,
  isVerticalView,
  bind,
  editBind,
  deleteBindAlert
}) =>
  isVerticalView ? (
    <React.Fragment>
      <IconButton
        component="span"
        color="primary"
        className={classes.button}
        onClick={() => {
          editBind(bind);
        }}
      >
        <Icon name={bind.icon} alt={bind.name} />
      </IconButton>
      <div>
        <div className={classes.arrow} />
        <div className={classes.tooltip} onClick={() => deleteBindAlert(bind)}>
          <DeleteIcon className={classes.delete_icon} color="primary" />
        </div>
      </div>
    </React.Fragment>
  ) : (
    <Tooltip
      title={
        <div onClick={() => deleteBindAlert(bind)}>
          <IconButton
            component="span"
            color="primary"
            className={classes.delete_button}
            onClick={() => deleteBindAlert(bind)}
          >
            <DeleteIcon className={classes.delete_icon} color="primary" />
          </IconButton>
          <span className={classes.arrow} />
        </div>
      }
      classes={{ tooltip: classes.tooltip, popper: classes.arrowPopper }}
      interactive
    >
      <IconButton
        component="span"
        color="primary"
        className={classes.button}
        onClick={() => {
          editBind(bind);
        }}
      >
        <Icon name={bind.icon} alt={bind.name} />
      </IconButton>
    </Tooltip>
  );

BindIcon.propTypes = {
  classes: PropTypes.object.isRequired,
  isVerticalView: PropTypes.bool.isRequired,
  editBind: PropTypes.func.isRequired,
  deleteBindAlert: PropTypes.func.isRequired,
  bind: PropTypes.shape({
    id: PropTypes.number.isRequired,
    icon: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  })
};

export default responsiveComponent(BindIcon, {
  vertical,
  horizontal
});
