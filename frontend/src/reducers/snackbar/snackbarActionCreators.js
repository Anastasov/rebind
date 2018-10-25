export const SHOW_SNACKBAR = "SHOW_SNACKBAR";
export const showSnackBarActionCreator = snackbar => ({
  type: SHOW_SNACKBAR,
  payload: {
    ...snackbar,
    open: true
  }
});

export const CLOSE_SNACKBAR = "CLOSE_SNACKBAR";
export const closeSnackBarActionCreator = () => ({
  type: CLOSE_SNACKBAR,
  payload: {
    open: false
  }
});
