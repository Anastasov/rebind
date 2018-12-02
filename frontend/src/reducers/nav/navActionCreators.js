import { push } from "react-router-redux";
import Tabs from "../../components/nav/BottomNavigationTabs.jsx";

export const SHOW_USER_MENU = "SHOW_USER_MENU";
export const showUserMenuActionCreator = userMenuDropdownAnchor => ({
  type: SHOW_USER_MENU,
  payload: { showProfileDropdown: true, userMenuDropdownAnchor }
});

export const HIDE_USER_MENU = "HIDE_USER_MENU";
export const hideUserMenuActionCreator = () => ({
  type: HIDE_USER_MENU,
  payload: { showProfileDropdown: false, userMenuDropdownAnchor: null }
});

export const SHOW_NAVBAR = "SHOW_NAVBAR";
export const showNavActionCreator = (additionalStyles = {}) => ({
  type: SHOW_NAVBAR,
  payload: { show: true, additionalStyles }
});

export const HIDE_NAVBAR = "HIDE_NAVBAR";
export const hideNavActionCreator = () => ({
  type: HIDE_NAVBAR,
  payload: { show: false }
});

export const SET_NAV_TAB_INDEX = "SET_NAV_TAB_INDEX";
export const setNavTabIndexActionCreator = tabIndex => ({
  type: SET_NAV_TAB_INDEX,
  payload: { tabIndex }
});

export const navigate = index => dispatch => {
  if (index < Tabs.length) {
    const tab = Tabs[index];
    if (tab) {
      dispatch(push(tab.path));
      dispatch(setNavTabIndexActionCreator(tab.index));
    }
  }
};
