/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import Media from 'react-media';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ReBind from '../../assets/ReBind';
import homePageImage from '../../assets/home-page.jpg';


/* eslint-enable */

const styles = {
  display1: {
    fontSize: 75
  },
  display2: {
    fontSize: 16
  },
  root: {
    color: ReBind.THEME.palette.primary.main,
    backgroundColor: ReBind.THEME.palette.primary.contrastText,
    paddingTop: '10%',
    height: '100vh',
  },
  card: {
    color: ReBind.THEME.palette.primary.contrastText,
    backgroundColor: ReBind.THEME.palette.primary.main,
    marginLeft: 100
  },
  media: {
    height: 140,
  }
};

const MEDIA_SCALE = {
  SMALL: {
    query: {
      maxWidth: 830,
    },
    scale: pixels => pixels
  },
  MEDIUM: {
    query: [{
      maxWidth: 1860,
      minWidth: 830,
    }],
    scale: pixels => pixels * 2
  }
};

const LandingPageUI = ({ classes }) => (
  <div>
    <Media query={MEDIA_SCALE.SMALL.query} >
      <Paper className={classes.root}>
        <Typography style={{ fontSize: `${MEDIA_SCALE.SMALL.scale(styles.display1.fontSize)}px` }} variant="display1" color="inherit" component="h1">Rebind</Typography>
        <Typography style={{ fontSize: `${MEDIA_SCALE.SMALL.scale(styles.display2.fontSize)}px` }} variant="display2" color="inherit" component="p">
    is a project that brings the world closer together by making it simple to connect with anyone.
<br />This is achieved by empowering the users to present themselves to everyone with just one word.
<br />It is a cloud electronic contact book that is tailored to the natural way of human networking.
        </Typography>
      </Paper>
    </Media>
    <Media query={MEDIA_SCALE.MEDIUM.query}>
      <Paper className={classes.root}>
        <Typography style={{ fontSize: `${MEDIA_SCALE.MEDIUM.scale(styles.display1.fontSize)}px` }} variant="display1" color="inherit" component="h1">Rebind</Typography>
        <Typography style={{ fontSize: `${MEDIA_SCALE.MEDIUM.scale(styles.display2.fontSize)}px` }} variant="display2" color="inherit" component="p">
    is a project that brings the world closer together by making it simple to connect with anyone.
<br />This is achieved by empowering the users to present themselves to everyone with just one word.
<br />It is a cloud electronic contact book that is tailored to the natural way of human networking.
        </Typography>
      </Paper>
    </Media>
  </div>
);

LandingPageUI.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LandingPageUI);
