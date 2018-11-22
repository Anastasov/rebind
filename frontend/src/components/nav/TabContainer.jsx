/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import styles from "./styles/TabContainerStyles";
import responsiveComponent from "../../meta-components/responsiveComponent";
/* eslint-enable */

const TabContainer = ({ classes, children, dir }) => (
  <div className={classes.tab_container} dir={dir}>
    {children}
  </div>
);

TabContainer.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired
};

export default responsiveComponent(TabContainer, {
  vertical: styles,
  horizontal: styles
});
