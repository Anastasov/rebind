/* eslint-disable */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Navigation from '../../components/nav/Navigation';
import LandingPageUI from './LandingPageUI';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import { getAuthInfoSelector } from '../../reducers/rootReducer';
import HomePageImage from '../../assets/home-page.jpg';
/* eslint-enable */

const HomePage = ({ fullScreen }) => (
  <div className = 'Component-Bg'
     style = {{
       backgroundImage: `url(${HomePageImage})`,
       backgroundSize: 'cover',
       backgroundPosition: 'center center',
       backgroundRepeat: 'no-repeat',
     }}>
    {/* <Navigation /> */}
    <LandingPageUI useSmallScale={fullScreen} />
  </div>
);

HomePage.propTypes = {
  fullScreen: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired
};

const StyledHomePage = withStyles({})(HomePage);
const MediaHomePage = withMobileDialog()(StyledHomePage);

const mapStateToProps = state => ({
  authInfo: getAuthInfoSelector(state)
});
const mapDispatchToProps = dispatch => ({
  onShowUserMenu: () => dispatch(null)
});
const ReduxHomePage = connect(
  mapStateToProps,
  mapDispatchToProps
)(MediaHomePage);

export default ReduxHomePage;
