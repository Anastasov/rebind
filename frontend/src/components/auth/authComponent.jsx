/* eslint-disable */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { getCookie } from "redux-cookie";
import { connect } from "react-redux";
import withCookies from "../withCookies";
import { loginUser } from "../../reducers/auth/authActionCreators";
import { openLoginModalActionCreator } from "../../reducers/modal/modalActionCreators";
import { authInfoSelector } from "../../reducers/rootReducer";
import { devLog } from "../../util/ObjectUtils";

const mapStateToProps = state => ({
  authInfo: authInfoSelector(state)
});
const mapDispatchToProps = dispatch => ({
  redirectToLoginPage: redirectPath =>
    dispatch(openLoginModalActionCreator(redirectPath))
});
const authComponent = (WrappedComponent, path = "") =>
  withCookies(
    connect(
      mapStateToProps,
      mapDispatchToProps
    )(
      class AuthenticatedComponent extends Component {
        static propTypes = {
          redirectToLoginPage: PropTypes.func.isRequired,
          authInfo: PropTypes.object.isRequired
        };

        redirectAfterLogin() {
          return path;
        }
        /* eslint-enable */

        constructor(props) {
          super(props);
          const { authInfo, redirectToLoginPage } = props;
          if (!authInfo.jwToken) {
            redirectToLoginPage(this.redirectAfterLogin());
          }
        }

        render() {
          const { authInfo } = this.props;
          return authInfo && authInfo.jwToken ? (
            <WrappedComponent {...this.props} />
          ) : null;
        }
      }
    )
  );

export default authComponent;
