/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Tabs from "./BottomNavigationTabs";
import styles from "./styles/BotNavigationStyles";
import responsiveComponent from "../../meta-components/responsiveComponent";
/* eslint-enable */

const BotNavigation = ({ classes, tabIndex, onTabChange }) => (
  <BottomNavigation
    value={tabIndex}
    onChange={(event, value) => onTabChange(value)}
    showLabels
    className={classes.bot_nav_root}
  >
    {Tabs.map(tab => (
      <BottomNavigationAction
        key={tab.path}
        label={tab.label}
        icon={tab.icon}
      />
    ))}
  </BottomNavigation>
);

BotNavigation.propTypes = {
  classes: PropTypes.object.isRequired,
  tabIndex: PropTypes.number.isRequired,
  onTabChange: PropTypes.func.isRequired
};
export default responsiveComponent(BotNavigation, {
  vertical: styles,
  horizontal: styles
});
