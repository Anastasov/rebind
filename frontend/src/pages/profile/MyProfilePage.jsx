/* eslint-disable */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import styles from "./styles/MyProfilePageStyles";
import { authInfoSelector, profileSelector } from "../../reducers/rootReducer";
import { showNavActionCreator } from "../../reducers/nav/navActionCreators";
import { fetchProfileData } from "../../reducers/profile/profileActionCreators";
import authComponent from "../../meta-components/authComponent";
import ProfileForm from "./ProfileForm";
import Binds from "./Binds";
import DefaultProfilePic from "../../../assets/profile-pic-default.jpg";
import { createRows } from "../../util/GridUtil";
import responsiveComponent from "../../meta-components/responsiveComponent";
/* eslint-enable */

class MyProfilePage extends Component {
  static defaultProps = {
    profile: null
  };

  static propTypes = {
    classes: PropTypes.object.isRequired,
    showNav: PropTypes.func.isRequired,
    fetchProfile: PropTypes.func.isRequired,
    authInfo: PropTypes.object.isRequired,
    profile: PropTypes.object
  };

  componentDidMount() {
    const { showNav, authInfo, fetchProfile } = this.props;
    if (authInfo.id) {
      fetchProfile(authInfo.id);
    }
    showNav();
  }

  render() {
    const { classes, authInfo, profile } = this.props;
    const body = profile.initializing
      ? [
          <div className={classes.progressContainer}>
            <CircularProgress className={classes.progress} size={100} />
            <Typography className={classes.progressText} variant="h6">
              Loading...
            </Typography>
          </div>
        ]
      : [<ProfileForm authInfo={authInfo} />, <Binds authInfo={authInfo} />];
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
              {createRows(body, {
                spacing: 40,
                alignItems: profile.initializing ? "center" : "flex-start",
                justify: profile.initializing ? "space-evenly" : "center"
              })}
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }
}
const StyledMyProfilePage = responsiveComponent(MyProfilePage, {
  vertical: styles,
  horizontal: styles
});

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
