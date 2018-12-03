/* eslint-disable */
import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { push } from "react-router-redux";
import { withRouter, Route } from "react-router-dom";
import SwipeableViews from "react-swipeable-views";
import Navigation from "./Navigation";
import ColoredSnackbar from "../snackbar/ColoredSnackbar";
import TabContainer from "./TabContainer";
import { setNavTabIndexActionCreator } from "../../reducers/nav/navActionCreators";
import {
  showBottomNavigationForPath,
  getTabIndexForPath,
  getPageBodyForPath
} from "./Paths";
import { authInfoSelector, navbarSelector } from "../../reducers/rootReducer";
import styles from "./styles/NavigationStyles";
import responsiveComponent from "../../meta-components/responsiveComponent";
import Tabs from "./BottomNavigationTabs";
import BottomNavigation from "./BotNavigation";
/* eslint-enable */

const defaultTab = Tabs[0];

class PageTemplate extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    authInfo: PropTypes.object.isRequired,
    navbar: PropTypes.object.isRequired,
    setNavTabIndex: PropTypes.func.isRequired,
    changeUrl: PropTypes.func.isRequired,
    location: PropTypes.object.isRequired
  };

  componentDidMount() {
    const { location, setNavTabIndex } = this.props;
    const path = this.getPathFromParams(new URLSearchParams(location));
    setNavTabIndex(getTabIndexForPath(path));
  }

  getPathFromParams = params => params.get("pathname") || defaultTab.path;

  render() {
    const {
      classes,
      authInfo,
      navbar,
      changeUrl,
      setNavTabIndex,
      location
    } = this.props;
    const direction = "ltr";
    const { tabIndex } = navbar;
    const index = tabIndex || defaultTab.index;
    const params = new URLSearchParams(location);
    const path = this.getPathFromParams(params);
    const isAuthenticated = Boolean(authInfo.jwToken);
    const showBottomNavigation =
      isAuthenticated && showBottomNavigationForPath(path);
    const body = getPageBodyForPath(path);
    const onTabChange = indexOfTab => {
      if (indexOfTab < Tabs.length) {
        // params.set("search", `?page=${Tabs[indexOfTab].path}`);
        // changeUrl(params.get("search").toString());
        changeUrl(Tabs[indexOfTab].path);
      }
      setNavTabIndex(indexOfTab);
    };

    return (
      <div className={classes.root}>
        <Navigation />
        <ColoredSnackbar />
        <SwipeableViews
          axis={direction === "rtl" ? "x-reverse" : "x"}
          index={index}
          onChangeIndex={onTabChange}
        >
          {isAuthenticated ? (
            Tabs.map(tab => (
              <Route key={tab.path} path={tab.path}>
                <TabContainer key={tab.path} dir={direction}>
                  {tab.component}
                </TabContainer>
              </Route>
            ))
          ) : (
            <Route key={Tabs[index].path} path={Tabs[index].path}>
              <TabContainer key={Tabs[index].path} dir={direction}>
                {Tabs[index].component}
              </TabContainer>
            </Route>
          )}
          <TabContainer dir={direction}>{body}</TabContainer>
        </SwipeableViews>
        {showBottomNavigation && (
          <BottomNavigation tabIndex={tabIndex} onTabChange={onTabChange} />
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
const changeUrl = url => dispatch => dispatch(push(url));
const mapDispatchToProps = {
  setNavTabIndex: setNavTabIndexActionCreator,
  changeUrl
};
const ReduxPageTemplate = connect(
  mapStateToProps,
  mapDispatchToProps
)(StyledPageTemplate);

export default withRouter(ReduxPageTemplate);
