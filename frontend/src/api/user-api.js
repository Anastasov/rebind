import * as authApi from "./auth-api";

const defaultHeaderProps = {
  mode: "cors",
  cache: "no-cache",
  credentials: "same-origin",
  referrer: "no-referrer" // no-referrer, *client
};

const UserApi = {
  ...authApi.api,
  login(userCredentials) {
    return fetch("/login", {
      ...defaultHeaderProps,
      method: "POST",
      headers: authApi.authHeaders(this.authInfo),
      body: JSON.stringify(userCredentials)
    });
  },
  registerNewUser(userCredentials) {
    return fetch("/signUp", {
      ...defaultHeaderProps,
      method: "POST",
      headers: authApi.authHeaders(this.authInfo),
      body: JSON.stringify(userCredentials)
    });
  },
  fetchProfileData(id) {
    return fetch(`/api/user/${id}/profile`, {
      method: "GET",
      headers: authApi.authHeaders(this.authInfo)
    });
  },
  changeProfileDataField(id, field, value) {
    const body = {};
    body[field] = value;
    return fetch(`/api/user/${id}/profile/update`, {
      method: "POST",
      headers: authApi.authHeaders(this.authInfo),
      body: JSON.stringify(body)
    });
  }
};

export default UserApi;
