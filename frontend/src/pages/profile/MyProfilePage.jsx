/* eslint-disable */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Typography from "@material-ui/core/Typography";
import jwtDecode from "jwt-decode";
import { withStyles } from "@material-ui/core/styles";
import styles from "./MyProfilePageStyles";
import { authInfoSelector, profileSelector } from "../../reducers/rootReducer";
import { showNavActionCreator } from "../../reducers/nav/navActionCreators";
import { fetchProfileData } from "../../reducers/profile/profileActionCreators";
import authComponent from "../../components/auth/authComponent";
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
    const { authInfo, fetchProfile, showNav } = this.props;

    const token = authInfo.jwToken;
    devLog(token, "token");
    if (token) {
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
const AuthMyProfilePage = authComponent(MyProfilePage, "/profile");
const StyledMyProfilePage = withStyles(styles)(AuthMyProfilePage);

const mapStateToProps = state => ({
  authInfo: authInfoSelector(state),
  profile: profileSelector(state)
});
const mapDispatchToProps = dispatch => ({
  showNav: () => dispatch(showNavActionCreator()),
  fetchProfile: id => dispatch(fetchProfileData(id))
});
const ReduxMyProfilePage = connect(
  mapStateToProps,
  mapDispatchToProps
)(StyledMyProfilePage);

export default ReduxMyProfilePage;
