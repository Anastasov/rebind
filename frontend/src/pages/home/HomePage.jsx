/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Navigation from '../../components/nav/Navigation';
import LandingPageUI from './LandingPageUI';
/* eslint-enable */

class HomePage extends Component {
    state = {
      name: 'ReBind'
    }

    render() {
      const { name } = this.state;
      console.log(name);
      return (
      <div>
        <Navigation />
        <LandingPageUI />
      </div>
      );
    }
}

HomePage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles({})(HomePage);
