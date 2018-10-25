import { SubmissionError } from "redux-form";
import { setCookie, getCookie } from "redux-cookie";
import { showSnackBarActionCreator } from "../reducers/snackbar/snackbarActionCreators";
import { devLog, hasOwnProps, afterMinutes } from "./ObjectUtils";

export const validateIsOk = (dispatch, response, serverData, message) => {
  if (serverData && hasOwnProps(serverData.errors)) {
    dispatch(
      showSnackBarActionCreator({
        variant: "error",
        message: `Ooops... ${message}`
      })
    );
    throw new SubmissionError(serverData.errors);
  } else if (!serverData.ok) {
    dispatch(
      showSnackBarActionCreator({
        variant: "error",
        message: `Ooops... ${message}`
      })
    );
    throw new Error(message);
  } else if (!response.ok) {
    dispatch(
      showSnackBarActionCreator({
        variant: "error",
        message: `Ooops... Something went wrong.`
      })
    );
    throw new Error(message);
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
        setCookie("jwToken", JSON.stringify(token), {
          expires: afterMinutes(29)
        })
      );
      console.log("cookie[jwToken]: ", dispatch(getCookie("jwToken")));
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
  devLog(response, "Server Response:");
  return response.json().then(serverData => {
    devLog(serverData, "Server Data:");
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