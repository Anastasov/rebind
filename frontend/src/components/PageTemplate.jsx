/* eslint-disable */
import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import styles from "./PageTemplateStyles";
import Navigation from "./nav/Navigation";
import ColoredSnackbar from "./snackbar/ColoredSnackbar";
import ModalContainer from "./modal/ModalContainer";
/* eslint-enable */

class PageTemplate extends Component {
  defaultProps = {
    body: () => null
  };

  propTypes = {
    body: PropTypes.func
  };

  render() {
    const { body } = this.props;
    return (
      <Fragment>
        <Navigation />
        <ColoredSnackbar />
        <ModalContainer />
        {body()}
      </Fragment>
    );
  }
}

export default withStyles(styles)(PageTemplate);
