import { SubmissionError } from "redux-form";
import { setCookie } from "redux-cookie";
import COOKIES from "../config/COOKIES";
import { showSnackBarActionCreator } from "../reducers/snackbar/snackbarActionCreators";
import { hasOwnProps, afterMinutes } from "./ObjectUtils";

export const validateIsOk = (dispatch, response, serverData, message) => {
  if (serverData && hasOwnProps(serverData.errors)) {
    if (message) {
      dispatch(
        showSnackBarActionCreator({
          variant: "error",
          message: `Ooops... ${message}`
        })
      );
    }
    throw new SubmissionError(serverData.errors);
  } else if (!serverData.ok) {
    if (message) {
      dispatch(
        showSnackBarActionCreator({
          variant: "error",
          message: `Ooops... ${message}`
        })
      );
    }
    throw new Error(message);
  } else if (!response.ok) {
    if (message) {
      dispatch(
        showSnackBarActionCreator({
          variant: "error",
          message: `Ooops... Something went wrong.`
        })
      );
    }
    throw new Error(response);
  }
};

export const getData = (dispatch, serverData, tokenHandler) => {
  const { ok, message, errors, ...responseData } = serverData;
  if (serverData.token) {
    const { token, ...rest } = responseData;
    if (tokenHandler) {
      dispatch(tokenHandler(token));
      let now = new Date();
      now.setMinutes(now.getMinutes() + 30);
      dispatch(
        setCookie(COOKIES.TOKEN, token, {
          expires: afterMinutes(29)
        })
      );
    }
    return rest;
  }

  return responseData;
};

export const handleResponse = (
  dispatch,
  response,
  errorMessage,
  tokenHandler = () => {}
) => {
  console.log(response, "Server Response:");
  return response.json().then(serverData => {
    console.log(serverData, "Server Data:");
    validateIsOk(dispatch, response, serverData, errorMessage);
    const data = getData(dispatch, serverData, tokenHandler);
    return data;
  });
};

// const handleError = (dispatch, error) => {
//   devLog(error.errors, "Caught Error");
//   return promiseTo(() =>
//     dispatch(setFormErrorsActionCreator(error.errors))
//   ).then(
//     promiseTo(() =>
//       dispatch(
//         showSnackBarActionCreator({
//           variant: "error",
//           message: `Ooops... ${error.message}`
//         })
//       )
//     )
//   );
// };
