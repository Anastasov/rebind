/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import responsiveComponent from "../../meta-components/responsiveComponent";
/* eslint-enable */

const PasswordAdornMent = ({
  showPassword = false,
  togglePasswordVisibility = () => null
}) => (
  <InputAdornment position="end">
    <IconButton
      aria-label="Toggle password visibility"
      onClick={() => togglePasswordVisibility(!showPassword)}
    >
      {showPassword ? <Visibility /> : <VisibilityOff />}
    </IconButton>
  </InputAdornment>
);

PasswordAdornMent.propTypes = {
  showPassword: PropTypes.bool,
  togglePasswordVisibility: PropTypes.func
};
PasswordAdornMent.defaultProps = {
  showPassword: false,
  togglePasswordVisibility: () => null
};

export default responsiveComponent(PasswordAdornMent, {
  vertical: {},
  horizontal: {}
});
