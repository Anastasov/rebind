/* eslint-disable */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import styles from "./MyProfilePageStyles";
import { authInfoSelector } from "../../reducers/rootReducer";
import { showNavActionCreator } from "../../reducers/nav/navActionCreators";
import { fetchProfileData } from "../../reducers/profile/profileActionCreators";
import authComponent from "../../components/auth/authComponent";
import ProfileForm from "./ProfileForm";
import DefaultProfilePic from "../../../assets/profile-pic-default.jpg";
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
    const { showNav } = this.props;
    showNav();
  }

  render() {
    const { authInfo, classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.root_body}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.cover}
              image={DefaultProfilePic}
              title="Profile Photo"
            />
            <CardContent className={classes.content}>
              <ProfileForm authInfo={authInfo} />
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }
}
const AuthMyProfilePage = authComponent(MyProfilePage, "/profile");
const StyledMyProfilePage = withStyles(styles)(AuthMyProfilePage);

const mapStateToProps = state => ({
  authInfo: authInfoSelector(state)
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
