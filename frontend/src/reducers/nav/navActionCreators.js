export const SHOW_USER_MENU = "SHOW_USER_MENU";
export const showUserMenuActionCreator = () => ({
  type: SHOW_USER_MENU,
  payload: { logged: true }
});

export const HIDE_USER_MENU = "HIDE_USER_MENU";
export const hideUserMenuActionCreator = () => ({
  type: HIDE_USER_MENU,
  payload: { logged: false }
});

export const SHOW_NAVBAR = "SHOW_NAVBAR";
export const showNavActionCreator = () => ({
  type: SHOW_NAVBAR,
  payload: { show: true }
});

export const HIDE_NAVBAR = "HIDE_NAVBAR";
export const hideNavActionCreator = () => ({
  type: HIDE_NAVBAR,
  payload: { show: false }
});
