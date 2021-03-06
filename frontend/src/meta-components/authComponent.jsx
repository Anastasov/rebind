/* eslint-disable */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { openLoginModalActionCreator } from "../reducers/modal/modalActionCreators";
import { authInfoSelector } from "../reducers/rootReducer";
import withCookies from "./withCookies";

const mapStateToProps = state => ({
  authInfo: authInfoSelector(state)
});
const mapDispatchToProps = dispatch => ({
  redirectToLoginPage: redirectPath =>
    dispatch(openLoginModalActionCreator(redirectPath))
});
const authComponent = (WrappedAuthComponent, path = "") =>
  withCookies(
    connect(
      mapStateToProps,
      mapDispatchToProps
    )(
      class AuthenticatedComponent extends Component {
        static propTypes = {
          authInfo: PropTypes.object.isRequired
        };
        /* eslint-enable */

        constructor(props) {
          super(props);
          const { authInfo, redirectToLoginPage } = props;
          if (!authInfo.jwToken) {
            redirectToLoginPage(path);
          }
        }

        render() {
          const { authInfo } = this.props;
          return authInfo && authInfo.jwToken ? (
            <WrappedAuthComponent authInfo={authInfo} {...this.props} />
          ) : null;
        }
      }
    )
  );

export default authComponent;
