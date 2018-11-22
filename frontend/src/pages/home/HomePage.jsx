/* eslint-disable */
import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  openSignUpModalActionCreator,
  openLoginModalActionCreator
} from "../../reducers/modal/modalActionCreators";
import HomePageResponsiveUI from "./HomePageResponsiveUI";
import { showNavActionCreator } from "../../reducers/nav/navActionCreators";
/* eslint-enable */

class HomePage extends Component {
  static propTypes = {
    showNav: PropTypes.func.isRequired,
    openSignUpPage: PropTypes.func.isRequired,
    openLoginPage: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.showNav({ backgroundColor: "rgba(255,255,255,0)" });
  }

  render() {
    const { openSignUpPage, openLoginPage } = this.props;
    const actions = {
      openSignUpPage,
      openLoginPage
    };

    return <HomePageResponsiveUI actions={actions} />;
  }
}

const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => ({
  openSignUpPage: () => dispatch(openSignUpModalActionCreator()),
  openLoginPage: () => dispatch(openLoginModalActionCreator()),
  showNav: styles => dispatch(showNavActionCreator(styles))
});
const ReduxHomePage = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);

export default ReduxHomePage;
