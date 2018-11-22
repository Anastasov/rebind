/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import Avatar from "@material-ui/core/Avatar";
import EmptyIcon from "../../assets/icons/empty-logo.png";
import { removeHigherOrderParams } from "../util/ObjectUtils";
import responsiveComponent from "../meta-components/responsiveComponent";
import FacebookIcon from "../../assets/icons/facebook-square-logo.png";
import InstagramIcon from "../../assets/icons/instagram-logo.png";
import SnapchatIcon from "../../assets/icons/snapchat-logo.png";
import TwitterIcon from "../../assets/icons/twitter-logo.png";
import GoogleIcon from "../../assets/icons/google-account-logo.png";
import LinkedInIcon from "../../assets/icons/linked-in-logo.png";
import PinterestIcon from "../../assets/icons/pinterest-logo.png";
import SkypeIcon from "../../assets/icons/skype-logo.png";
import TumblrIcon from "../../assets/icons/tumblr-logo.png";
import ViberIcon from "../../assets/icons/viber-logo.png";
import VimeoIcon from "../../assets/icons/vimeo-logo.png";
import WhatsAppIcon from "../../assets/icons/whatsapp-rectangular-logo.png";
import MicrosoftIcon from "../../assets/icons/microsoft-account-logo.png";
import YoutubeIcon from "../../assets/icons/youtube-logo.png";
import styles from "./styles/IconStyles";
/* eslint-enable */

export const Icons = {
  FACEBOOK: { name: "FACEBOOK", title: "Facebook", img: FacebookIcon },
  INSTAGRAM: { name: "INSTAGRAM", title: "Instagram", img: InstagramIcon },
  SNAPCHAT: { name: "SNAPCHAT", title: "Snapchat", img: SnapchatIcon },
  TWITTER: { name: "TWITTER", title: "Twitter", img: TwitterIcon },
  GOOGLE: { name: "GOOGLE", title: "Google+", img: GoogleIcon },
  LINKED_IN: { name: "LINKED_IN", title: "LinkedIn", img: LinkedInIcon },
  PINTEREST: { name: "PINTEREST", title: "Pinterest", img: PinterestIcon },
  SKYPE: { name: "SKYPE", title: "Skype", img: SkypeIcon },
  TUMBLR: { name: "TUMBLR", title: "Tumblr", img: TumblrIcon },
  VIBER: { name: "VIBER", title: "Viber", img: ViberIcon },
  VIMEO: { name: "VIMEO", title: "Vimeo", img: VimeoIcon },
  WHATS_APP: { name: "WHATS_APP", title: "WhatsApp", img: WhatsAppIcon },
  MICROSOFT: {
    name: "MICROSOFT",
    title: "Microsoft",
    img: MicrosoftIcon
  },
  YOUTUBE: { name: "YOUTUBE", title: "YouTube", img: YoutubeIcon }
};

const Icon = ({ className, classes, empty, alt = "", name = "", ...rest }) => (
  <Avatar
    alt={alt}
    src={empty ? EmptyIcon : Icons[name].img}
    className={className || (empty ? classes.icon_empty : classes.icon)}
    {...removeHigherOrderParams(rest)}
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

export default responsiveComponent(Icon, {
  vertical: styles,
  horizontal: styles
});
