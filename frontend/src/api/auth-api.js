import { authenticationSelector as getToken } from "../reducers/auth/authSelectors";

export const authHeaders = (authInfo, otherHeaders) => {
  const auhtHeader = authInfo.jwToken
    ? { Authorization: `Bearer ${authInfo.jwToken}` }
    : {};
  return {
    "Content-Type": "application/json",
    ...auhtHeader,
    ...otherHeaders
  };
};

export const api = {
  authInfo: {},
  auth(state) {
    this.authInfo = getToken(state);
    return this;
  }
};
