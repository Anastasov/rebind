/* eslint-disable */
import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Snackbar from "@material-ui/core/Snackbar";
import ColoredSnackbarWrapper from "./ColoredSnackbarWrapper";
import { closeSnackBarActionCreator } from "../../reducers/snackbar/snackbarActionCreators";
import { snackbarSelector } from "../../reducers/rootReducer";
/* eslint-enable */

const ColoredSnackbar = ({ snackbar, closeSnackBar }) => (
  <Snackbar
    anchorOrigin={{ vertical: "top", horizontal: "center" }}
    open={snackbar.open}
    onClose={closeSnackBar}
    autoHideDuration={6000}
  >
    <ColoredSnackbarWrapper
      variant={snackbar.variant}
      onClose={closeSnackBar}
      message={snackbar.message}
    />
  </Snackbar>
);

ColoredSnackbar.propTypes = {
  snackbar: PropTypes.object.isRequired,
  closeSnackBar: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  snackbar: snackbarSelector(state)
});
const mapDispatchToProps = dispatch => ({
  closeSnackBar: () => dispatch(closeSnackBarActionCreator())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ColoredSnackbar);
