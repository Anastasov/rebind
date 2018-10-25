/* eslint-disable */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCookie } from "redux-cookie";
import { withStyles } from "@material-ui/core/styles";
import styles from "./MyProfilePageStyles";
import { authInfoSelector } from "../../reducers/rootReducer";
import { loginUser } from "../../reducers/auth/authActionCreators";
import { showNavActionCreator } from "../../reducers/nav/navActionCreators";
/* eslint-enable */

class MyProfilePage extends Component {
  static defaultProps = {
    authInfo: null
  };

  static propTypes = {
    classes: PropTypes.object.isRequired,
    getJWTFromCookie: PropTypes.func.isRequired,
    logUser: PropTypes.func.isRequired,
    showNav: PropTypes.func.isRequired,
    authInfo: PropTypes.object
  };

  constructor(props) {
    super(props);
    const { authInfo, getJWTFromCookie, logUser, showNav } = this.props;
    const jwtCookie = getJWTFromCookie();
    if (!authInfo.jwToken && jwtCookie) {
      logUser(jwtCookie);
      showNav();
    }
  }

  render() {
    const { classes, authInfo } = this.props;
    return (
      <h1 className={classes.root_body}>
        Hi, {authInfo.user && authInfo.user.email}
      </h1>
    );
  }
}
const StyledMyProfilePage = withStyles(styles)(MyProfilePage);

const mapStateToProps = state => ({
  authInfo: authInfoSelector(state)
});
const mapDispatchToProps = dispatch => ({
  getJWTFromCookie: () => dispatch(getCookie("jwToken")),
  logUser: jwToken => dispatch(loginUser(jwToken)),
  showNav: () => dispatch(showNavActionCreator())
});
const ReduxMyProfilePage = connect(
  mapStateToProps,
  mapDispatchToProps
)(StyledMyProfilePage);

export default ReduxMyProfilePage;
