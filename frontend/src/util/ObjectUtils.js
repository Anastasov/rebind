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

export const isInstanceOf = (element, id) => {
  if (!element) return false;
  if (element.id === id) {
    return true;
  }
  if (element.parentNode) {
    return isInstanceOf(element.parentNode, id);
  }
  return false;
};

export const isLeftClick = event => event.button === 0;

export const doIfChildOf = (id, doJob) => event => {
  if (isLeftClick(event) && isInstanceOf(event.explicitOriginalTarget, id)) {
    doJob();
  }
};

/* eslint-disable */
export const getObjectProps = obj => {
  const props = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      props.push(key);
    }
  }
  return props;
};
/* eslint-enable */

export const removeHigherOrderParams = all => {
  const props = { ...all };
  delete props.isVerticalView;
  delete props.authInfo;
  delete props.getJWTFromCookie;
  delete props.logUser;
  delete props.path;
  return props;
};

export const endsWith = (string, suffix) =>
  string.indexOf(suffix, string.length - suffix.length) !== -1;
