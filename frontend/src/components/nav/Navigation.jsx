/* eslint-disable */
import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import ReBind from "../../config/ReBind";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SignOutIcon from "@material-ui/icons/KeyboardTab";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import {
  showUserMenuActionCreator,
  hideUserMenuActionCreator
} from "../../reducers/nav/navActionCreators";
import { signoutUser } from "../../reducers/auth/authActionCreators";
import { authInfoSelector, navbarSelector } from "../../reducers/rootReducer";
import ModalContainer from "../modal/ModalContainer";
import styles from "./styles/NavigationStyles";
import responsiveComponent from "../../meta-components/responsiveComponent";
/* eslint-enable */

class Navigation extends Component {
  static defaultProps = {
    navbar: {}
  };

  static propTypes = {
    classes: PropTypes.object.isRequired,
    navbar: PropTypes.object.isRequired,
    authInfo: PropTypes.object.isRequired,
    openHomePage: PropTypes.func.isRequired,
    openProfilePage: PropTypes.func.isRequired,
    signOutUser: PropTypes.func.isRequired,
    onShowUserMenu: PropTypes.func.isRequired,
    onHideUserMenu: PropTypes.func.isRequired
  };

  render() {
    const {
      classes,
      navbar,
      authInfo,
      onShowUserMenu,
      onHideUserMenu,
      openHomePage,
      openProfilePage,
      signOutUser
    } = this.props;
    const open = Boolean(navbar.userMenuDropdownAnchor);

    return navbar.show ? (
      <div style={this.props.style} className={classes.root}>
        <AppBar
          color="secondary"
          position="fixed"
          style={navbar.additionalStyles}
        >
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
              onClick={openHomePage}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              color="inherit"
              className={classes.logo_font}
              onClick={openHomePage}
            >
              {ReBind.PRESENTABLE_NAME}
            </Typography>
            {authInfo &&
              authInfo.jwToken && (
                <div>
                  <IconButton
                    aria-owns={open ? "menu-appbar" : null}
                    aria-haspopup="true"
                    onClick={event => onShowUserMenu(event.currentTarget)}
                    color="inherit"
                  >
                    <AccountCircle />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={navbar.userMenuDropdownAnchor}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right"
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right"
                    }}
                    open={open}
                  >
                    <MenuItem
                      color="inherit"
                      onClick={() => {
                        openProfilePage();
                        onHideUserMenu();
                      }}
                    >
                      Profile
                    </MenuItem>
                    <MenuItem color="inherit" onClick={onHideUserMenu}>
                      My account
                    </MenuItem>
                    <MenuItem
                      color="inherit"
                      onClick={() => {
                        signOutUser();
                        onHideUserMenu();
                      }}
                    >
                      Sign Out
                      <SignOutIcon className={classes.sign_out_icon} />
                    </MenuItem>
                  </Menu>
                </div>
              )}
          </Toolbar>
        </AppBar>
        <ModalContainer />
      </div>
    ) : null;
  }
}

const StyledNavigation = responsiveComponent(Navigation, {
  vertical: styles,
  horizontal: styles
});

const mapStateToProps = state => ({
  authInfo: authInfoSelector(state),
  navbar: navbarSelector(state)
});
const mapDispatchToProps = dispatch => ({
  onShowUserMenu: anchor => dispatch(showUserMenuActionCreator(anchor)),
  onHideUserMenu: () => dispatch(hideUserMenuActionCreator()),
  openHomePage: () => dispatch(push("/home")),
  openProfilePage: () => dispatch(push("/profile")),
  signOutUser: () => dispatch(signoutUser())
});
const ReduxNavigation = connect(
  mapStateToProps,
  mapDispatchToProps
)(StyledNavigation);

export default withRouter(ReduxNavigation);
