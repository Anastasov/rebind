/* eslint-disable */
import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import SwipeableViews from "react-swipeable-views";
import Navigation from "./Navigation";
import ColoredSnackbar from "../snackbar/ColoredSnackbar";
import TabContainer from "./TabContainer";
import { setNavTabIndexActionCreator } from "../../reducers/nav/navActionCreators";
import { showBottomNavigationForPath, getPageBodyForPath } from "./Paths";
import { authInfoSelector, navbarSelector } from "../../reducers/rootReducer";
import styles from "./styles/NavigationStyles";
import responsiveComponent from "../../meta-components/responsiveComponent";
import Tabs from "./BottomNavigationTabs";
import BottomNavigation from "./BotNavigation";
/* eslint-enable */

class PageTemplate extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    authInfo: PropTypes.object.isRequired,
    navbar: PropTypes.object.isRequired,
    setNavTabIndex: PropTypes.func.isRequired,
    path: PropTypes.string.isRequired
  };

  render() {
    const { classes, authInfo, path, navbar, setNavTabIndex } = this.props;
    const direction = "ltr";
    const showBottomNavigation =
      authInfo.jwToken && showBottomNavigationForPath(path);
    const { tabIndex } = navbar;
    const body = getPageBodyForPath(path);
    return (
      <div className={classes.root}>
        <Navigation />
        <ColoredSnackbar />
        <SwipeableViews
          axis={direction === "rtl" ? "x-reverse" : "x"}
          index={tabIndex}
          onChangeIndex={setNavTabIndex}
        >
          {Tabs.map(tab => (
            <TabContainer key={tab.path} dir={direction}>
              {tab.component}
            </TabContainer>
          ))}
          <TabContainer dir={direction}>{body}</TabContainer>
        </SwipeableViews>
        {showBottomNavigation && (
          <BottomNavigation
            tabIndex={tabIndex}
            setNavTabIndex={setNavTabIndex}
          />
        )}
      </div>
    );
  }
}

const StyledPageTemplate = responsiveComponent(PageTemplate, {
  vertical: styles,
  horizontal: styles
});

const mapStateToProps = state => ({
  authInfo: authInfoSelector(state),
  navbar: navbarSelector(state)
});
const mapDispatchToProps = {
  setNavTabIndex: setNavTabIndexActionCreator
};
const ReduxPageTemplate = connect(
  mapStateToProps,
  mapDispatchToProps
)(StyledPageTemplate);

export default withRouter(ReduxPageTemplate);
