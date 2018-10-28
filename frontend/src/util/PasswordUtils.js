export const validate = password => {
  let error = null;
  if (password.length < 8) {
    error = "Please use at least 8 symbols";
  } else if (!/\d/.test(password)) {
    error = "Please include at least one number";
  } else if (!/[a-z]/.test(password)) {
    error = "Please include at least one lower-case letter";
  } else if (!/[A-Z]/.test(password)) {
    error = "Please include at least one upper-case letter";
  } else if (/\s/.test(password)) {
    error = "Please do not use tabs or spaces";
  }
  return error;
};

export const x = 5;
