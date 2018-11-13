import { handleResponse as handle } from "./ResponseUtils";
import { loginUser } from "../reducers/auth/authActionCreators";

/**
 * simply provides *code: loginUser* as callback to token handler
 * intended usage: new Promise
 *              .then(handleResponse(dispatch, errorMessage))
 */
export const handleResponse = (dispatch, errorMessage) => response =>
  handle(dispatch, response, errorMessage, loginUser);

export const secondExport = 5;
