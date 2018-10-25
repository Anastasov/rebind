// import { devLog } from "../util/ObjectUtils";
import * as authApi from "./auth-api";

const UserApi = {
  ...authApi.api,
  login(userCredentials) {
    return fetch("/login", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: authApi.authHeaders(this.authInfo),
      referrer: "no-referrer", // no-referrer, *client
      body: JSON.stringify(userCredentials) // body data type must match "Content-Type" header
    });
  },
  registerNewUser(userCredentials) {
    return fetch("/signUp", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: authApi.authHeaders(this.authInfo),
      redirect: "follow", // manual, *follow, error
      referrer: "no-referrer", // no-referrer, *client
      body: JSON.stringify(userCredentials) // body data type must match "Content-Type" header
    });
  }
};

export default UserApi;
