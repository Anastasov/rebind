/* eslint-disable */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { getCookie } from "redux-cookie";
import { connect } from "react-redux";
import COOKIES from "../config/COOKIES";
import { loginUser } from "../reducers/auth/authActionCreators";
import { authInfoSelector } from "../reducers/rootReducer";
import { devLog } from "../util/ObjectUtils";

const mapStateToProps = state => ({
  authInfo: authInfoSelector(state)
});
const mapDispatchToProps = dispatch => ({
  getJWTFromCookie: () => dispatch(getCookie(COOKIES.TOKEN)),
  logUser: jwToken => dispatch(loginUser(jwToken))
});
const withCookies = WrappedComponent =>
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(
    class AuthenticatedComponent extends Component {
      static propTypes = {
        getJWTFromCookie: PropTypes.func.isRequired,
        logUser: PropTypes.func.isRequired,
        redirectToLoginPage: PropTypes.func.isRequired,
        authInfo: PropTypes.object.isRequired
      };
      /* eslint-enable */

      constructor(props) {
        super(props);
        const { authInfo, getJWTFromCookie, logUser } = props;
        const token = getJWTFromCookie();
        devLog(token, "token");
        if (token) {
          if (!authInfo.jwToken) {
            logUser(token);
          }
        }
      }

      render() {
        return <WrappedComponent {...this.props} />;
      }
    }
  );

export default withCookies;
