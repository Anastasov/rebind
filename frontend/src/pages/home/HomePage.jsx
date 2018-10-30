/* eslint-disable */
import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { isMobileOnly } from "react-device-detect";
import { withStyles } from "@material-ui/core/styles";
import {
  openSignUpModalActionCreator,
  openLoginModalActionCreator
} from "../../reducers/modal/modalActionCreators";
import withMobileDialog from "@material-ui/core/withMobileDialog";
import withCookies from "../../components/withCookies";
import HomePageResponsiveUI from "./HomePageResponsiveUI";
import verticalStyles from "./HomePageVerticalStyles";
import horizontalStyles from "./HomePageHorizontalStyles";
import { showNavActionCreator } from "../../reducers/nav/navActionCreators";
const VerticalUI = withStyles(verticalStyles)(HomePageResponsiveUI);
const HorizontalUI = withStyles(horizontalStyles)(HomePageResponsiveUI);
/* eslint-enable */

class HomePage extends Component {
  static propTypes = {
    showNav: PropTypes.func.isRequired,
    fullScreen: PropTypes.bool.isRequired,
    openSignUpPage: PropTypes.func.isRequired
  };

  componentDidMount() {
    const { showNav } = this.props;
    const SECOND = 1000;
    setTimeout(showNav, 1 * SECOND);
  }

  render() {
    /* eslint-disable */
    const { fullScreen, openSignUpPage, openLoginPage } = this.props;
    const actions = {
      openSignUpPage,
      openLoginPage
    };
    const isVerticalView = isMobileOnly || fullScreen;
    /* eslint-enable */
    return isVerticalView ? (
      <VerticalUI isVerticalView actions={actions} />
    ) : (
      <HorizontalUI isVerticalView={false} actions={actions} />
    );
  }
}

const ResponsiveHomePage = withMobileDialog()(withCookies(HomePage));

const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => ({
  openSignUpPage: () => dispatch(openSignUpModalActionCreator()),
  openLoginPage: () => dispatch(openLoginModalActionCreator()),
  showNav: () => dispatch(showNavActionCreator())
});
const ReduxHomePage = connect(
  mapStateToProps,
  mapDispatchToProps
)(ResponsiveHomePage);

export default ReduxHomePage;
