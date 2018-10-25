/* eslint-disable */
import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import styles from "./AppUIStyles";
import Navigation from "./components/nav/Navigation";
import ColoredSnackbar from "./components/snackbar/ColoredSnackbar";
import ModalContainer from "./components/modal/ModalContainer";
import HomePage from "./pages/home/HomePage";
/* eslint-enable */

const AppUI = () => (
  <Fragment>
    <Navigation />
    <ColoredSnackbar />
    <ModalContainer />
    <Router>
      <Route path="/" component={HomePage} />
      <Route path="/test" component={HomePage} />
    </Router>
  </Fragment>
);

AppUI.propTypes = {
  AppUI: PropTypes.object
};

AppUI.defaultProps = {
  prop: null
};

export default withStyles(styles)(AppUI);
