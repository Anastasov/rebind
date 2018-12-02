import * as authApi from "./auth-api";

const defaultHeaderProps = {
  mode: "cors",
  cache: "no-cache",
  credentials: "same-origin",
  referrer: "no-referrer" // no-referrer, *client
};

const getRequestPropsForBind = (id, bindId, bind) => {
  let url;
  let method;
  if (!bindId) {
    // create
    url = `/api/user/${id}/bind`;
    method = "POST";
  } else if (!bind) {
    // delete
    url = `/api/user/${id}/bind/${bindId}`;
    method = "DELETE";
  } else {
    // update
    url = `/api/user/${id}/bind/${bindId}`;
    method = "PUT";
  }
  return {
    url,
    method
  };
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
  fetchCardsData(id) {
    return fetch(`/api/user/${id}/cards`, {
      method: "GET",
      headers: authApi.authHeaders(this.authInfo)
    });
  },
  changeProfileDataField(id, field, value) {
    const body = {};
    body[field] = value;
    return fetch(`/api/user/${id}/profile`, {
      method: "PUT",
      headers: authApi.authHeaders(this.authInfo),
      body: JSON.stringify(body)
    });
  },
  changeBind(id, bindId, bind) {
    let props = bind ? { body: JSON.stringify(bind) } : {};
    const { url, method } = getRequestPropsForBind(id, bindId, bind);
    return fetch(url, {
      ...props,
      method,
      headers: authApi.authHeaders(this.authInfo)
    });
  }
};

export default UserApi;
