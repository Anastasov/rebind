import ReBind from "../config/ReBind";

export const assign = (object = {}, overrides = {}) =>
  Object.assign({}, object, overrides);

export const hasOwnProps = object =>
  object && Object.entries(object).length > 0;

/* eslint-disable */
export const devLog = (value, message = "") => {
  if (ReBind.IS_ENV_DEV) {
    console.log(message, value);
  }
};
/* eslint-enable */

/* eslint-disable */
export const devErr = (value, message = "") => {
  if (ReBind.IS_ENV_DEV) {
    console.error(message, value);
  }
};
/* eslint-enable */

export const afterMinutes = minutes =>
  new Date(new Date().getTime() + minutes * 60 * 1000);
