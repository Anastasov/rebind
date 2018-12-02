import { getFormSyncErrors, getFormAsyncErrors } from "redux-form";

export const getAllErrors = form => state => ({
  ...getFormSyncErrors(form)(state),
  ...getFormAsyncErrors(form)(state)
});

export const notDefault = 5;
