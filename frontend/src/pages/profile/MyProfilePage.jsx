/* eslint-disable */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCookie } from "redux-cookie";
import Typography from "@material-ui/core/Typography";
import jwtDecode from "jwt-decode";
import COOKIES from "../../config/COOKIES";
import { withStyles } from "@material-ui/core/styles";
import styles from "./MyProfilePageStyles";
import { authInfoSelector, profileSelector } from "../../reducers/rootReducer";
import { loginUser } from "../../reducers/auth/authActionCreators";
import { showNavActionCreator } from "../../reducers/nav/navActionCreators";
import { fetchProfileData } from "../../reducers/profile/profileActionCreators";
import { devLog } from "../../util/ObjectUtils";
/* eslint-enable */

class MyProfilePage extends Component {
  static defaultProps = {
    profile: null
  };

  static propTypes = {
    classes: PropTypes.object.isRequired,
    getJWTFromCookie: PropTypes.func.isRequired,
    logUser: PropTypes.func.isRequired,
    showNav: PropTypes.func.isRequired,
    fetchProfile: PropTypes.func.isRequired,
    authInfo: PropTypes.object.isRequired,
    profile: PropTypes.object
  };

  componentDidMount() {
    const {
      authInfo,
      fetchProfile,
      getJWTFromCookie,
      logUser,
      showNav
    } = this.props;

    const token =
      authInfo && authInfo.jwToken ? authInfo.jwToken : getJWTFromCookie();
    devLog(token, "token");
    if (token) {
      if (!authInfo.jwToken) {
        logUser(token);
      }

      const decodedToken = jwtDecode(token);
      devLog(decodedToken, "jwt-decode");
      if (decodedToken) {
        const id = decodedToken.jti;
        fetchProfile(id);
        showNav();
      }
    }
  }

  render() {
    const { classes, profile } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.root_body}>
          <Typography variant="display1" color="primary" component="h1">
            Hi, {profile.user && profile.user.email}
          </Typography>
        </div>
      </div>
    );
  }
}
const StyledMyProfilePage = withStyles(styles)(MyProfilePage);

const mapStateToProps = state => ({
  authInfo: authInfoSelector(state),
  profile: profileSelector(state)
});
const mapDispatchToProps = dispatch => ({
  getJWTFromCookie: () => dispatch(getCookie(COOKIES.TOKEN)),
  logUser: jwToken => dispatch(loginUser(jwToken)),
  showNav: () => dispatch(showNavActionCreator()),
  fetchProfile: id => dispatch(fetchProfileData(id))
});
const ReduxMyProfilePage = connect(
  mapStateToProps,
  mapDispatchToProps
)(StyledMyProfilePage);

export default ReduxMyProfilePage;
