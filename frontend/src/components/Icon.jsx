/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import Avatar from "@material-ui/core/Avatar";
import EmptyIcon from "../../assets/icons/empty-logo.png";
import { withStyles } from "@material-ui/core/styles";
import FacebookIcon from "../../assets/icons/facebook-logo.png";
import InstagramIcon from "../../assets/icons/instagram-logo.png";
import SnapchatIcon from "../../assets/icons/snapchat-logo.png";
import TwitterIcon from "../../assets/icons/twitter-logo.png";
import styles from "./IconStyles";
/* eslint-enable */

export const Icons = {
  FACEBOOK: { name: "FACEBOOK", title: "Facebook logo", img: FacebookIcon },
  INSTAGRAM: { name: "INSTAGRAM", title: "Instagram logo", img: InstagramIcon },
  SNAPCHAT: { name: "SNAPCHAT", title: "Snapchat logo", img: SnapchatIcon },
  TWITTER: { name: "TWITTER", title: "Twitter logo", img: TwitterIcon }
};

const Icon = ({ className, classes, empty, alt = "", name = "", ...rest }) => (
  <Avatar
    alt={alt}
    src={empty ? EmptyIcon : Icons[name].img}
    className={className || (empty ? classes.icon_empty : classes.icon)}
    {...rest}
  />
);

Icon.propTypes = {
  classes: PropTypes.object.isRequired,
  name: PropTypes.string,
  empty: PropTypes.bool,
  alt: PropTypes.string
};

Icon.defaultProps = {
  empty: false,
  alt: "",
  name: "#"
};

export default withStyles(styles)(Icon);
