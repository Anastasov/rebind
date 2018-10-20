/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReBind from "../../assets/ReBind";
import PropTypes from 'prop-types';
import { Link, withRouter } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { 
  showUserMenuActionCreator,
  hideUserMenuActionCreator 
} from './actions/navActionsCreators';
import { getAuthInfoSelector } from '../../reducers/rootReducer';

const styles = {
  menuTheme: {
    color: ReBind.THEME.palette.primary.main,
    backgroundColor: ReBind.THEME.palette.primary.contrastText
  },
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};
/* eslint-enable */

class Navigation extends Component {
      static defaultProps = {
        title: ReBind.PRESENTABLE_NAME
      }

      static propTypes = {
        title: PropTypes.string,
        classes: PropTypes.object.isRequired,
        authInfo: PropTypes.object.isRequired,
        onShowUserMenu: PropTypes.func.isRequired,
        onHideUserMenu: PropTypes.func.isRequired
      }

      state = {
        auth: true,
        anchorEl: null,
      }

      handleChange = (event) => {
        this.setState({ auth: event.target.checked });
      };

      handleMenu = (event) => {
        this.setState({ anchorEl: event.currentTarget });
      };

      handleClose = () => {
        this.setState({ anchorEl: null });
      };

      render() {
        const {
          title,
          classes,
          onShowUserMenu,
          onHideUserMenu
        } = this.props;
        const { auth, anchorEl } = this.state;
        const open = Boolean(anchorEl);

        return (
          <div className={classes.root}>
            <AppBar position="fixed">
              <Toolbar>
                <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                  <MenuIcon />
                </IconButton>
                <Typography variant="title" color="inherit" className={classes.grow}>
                    {title}
                </Typography>
                {auth && (
                  <div>
                    <IconButton
                      aria-owns={open ? 'menu-appbar' : null}
                      aria-haspopup="true"
                      onClick={(event) => { onShowUserMenu(); this.handleMenu(event); }}
                      color="inherit"
                    >
                      <AccountCircle />
                    </IconButton>
                    <Menu
                      id="menu-appbar"
                      classes={{ paper: classes.menuTheme }}
                      anchorEl={anchorEl}
                      anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      open={open}
                      onClose={this.handleClose}
                    >
                      <MenuItem color="inherit" onClick={this.handleClose}>Profile</MenuItem>
                      <Link to="/">
                        <MenuItem color="inherit" onClick={(event) => { onHideUserMenu(); this.handleClose(event); }}>My account</MenuItem>
                      </Link>
                    </Menu>
                  </div>
                )}
              </Toolbar>
            </AppBar>
          </div>
        );
      }
}

const StyledNavigation = withStyles(styles)(Navigation);

const mapStateToProps = state => ({
  authInfo: getAuthInfoSelector(state)
});
const mapDispatchToProps = dispatch => ({
  onShowUserMenu: () => dispatch(showUserMenuActionCreator()),
  onHideUserMenu: () => dispatch(hideUserMenuActionCreator())
});
const ReduxNavigation = connect(
  mapStateToProps,
  mapDispatchToProps
)(StyledNavigation);

export default withRouter(ReduxNavigation);
