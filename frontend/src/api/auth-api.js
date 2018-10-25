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
  auth(auth) {
    this.authInfo = auth;
    return this;
  }
};
