/* eslint-disable */
import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import withMobileDialog from "@material-ui/core/withMobileDialog";
import { modalSelector, authInfoSelector } from "../../reducers/rootReducer";
import styles from "./styles/DeleteBindAlertStyles";
import { closeModalActionCreator } from "../../reducers/modal/modalActionCreators";
import { changeBind } from "../../reducers/profile/profileActionCreators";
/* eslint-enable */

const DeleteBindAlert = ({
  classes,
  authInfo,
  bind,
  fullScreen,
  closeModal,
  deleteBind
}) => (
  <Fragment>
    <DialogContent>
      <DialogContentText variant="body1">
        {`This action will permanently delete bind '${bind.name}'.`}
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button
        className={classes.button_alternative}
        label="Cancel action"
        variant="text"
        color="primary"
        size="large"
        onClick={closeModal}
        style={
          fullScreen
            ? styles.button_alternative_full
            : styles.button_alternative_normal
        }
        disableRipple
      >
        Cancel
      </Button>
      <Button
        label="Delete"
        variant="contained"
        color="primary"
        size="large"
        onClick={() => deleteBind(authInfo.id, bind.id)}
        className={classes.button}
      >
        Delete
      </Button>
    </DialogActions>
  </Fragment>
);

DeleteBindAlert.propTypes = {
  classes: PropTypes.object.isRequired,
  authInfo: PropTypes.object.isRequired,
  bind: PropTypes.shape({
    id: PropTypes.number.isRequired,
    icon: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  }),
  closeModal: PropTypes.func.isRequired,
  deleteBind: PropTypes.func.isRequired,
  fullScreen: PropTypes.bool.isRequired
};

const ResponsiveDeleteBindAlert = withMobileDialog()(DeleteBindAlert);
const StyledDeleteBindAlert = withStyles(styles)(ResponsiveDeleteBindAlert);
const mapStateToContentProps = state => ({
  authInfo: authInfoSelector(state),
  bind: modalSelector(state).data.bind
});
const mapDispatchToContentProps = {
  closeModal: closeModalActionCreator,
  deleteBind: changeBind
};
const ReduxDeleteBindAlert = connect(
  mapStateToContentProps,
  mapDispatchToContentProps
)(StyledDeleteBindAlert);

export default ReduxDeleteBindAlert;
