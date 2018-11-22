/* eslint-disable */
import React from "react";
import AccountIcon from "@material-ui/icons/AssignmentInd";
import CardsIcon from "@material-ui/icons/Contacts";
import ContactsIcon from "@material-ui/icons/ImportContacts";
import SettingsIcon from "@material-ui/icons/Settings";
import AccountComponent from "../../pages/profile/MyProfilePage";
/* eslint-enable */

const tab = (path, label, icon, component, index) => ({
  path,
  label,
  icon,
  component,
  index
});

export const ACCOUNT_TAB_INDEX = 0;
export const CARDS_TAB_INDEX = 1;
export const CONTACTS_TAB_INDEX = 2;
export const SETTINGS_TAB_INDEX = 3;
export const DYNAMIC_TAB_INDEX = 4;
export const ACCOUNT_TAB_PATH = "/profile";
export const CARDS_TAB_PATH = "/cards";
export const CONTACTS_TAB_PATH = "/contacts";
export const SETTINGS_TAB_PATH = "/settings";
const Tabs = [
  tab(
    ACCOUNT_TAB_PATH,
    "Account",
    <AccountIcon />,
    <AccountComponent />,
    ACCOUNT_TAB_INDEX
  ),
  tab(
    CARDS_TAB_PATH,
    "Cards",
    <CardsIcon />,
    <React.Fragment />,
    CARDS_TAB_INDEX
  ),
  tab(
    CONTACTS_TAB_PATH,
    "Contacts",
    <ContactsIcon />,
    <React.Fragment />,
    CONTACTS_TAB_INDEX
  ),
  tab(
    SETTINGS_TAB_PATH,
    "Settings",
    <SettingsIcon />,
    <React.Fragment />,
    SETTINGS_TAB_INDEX
  )
];

export default Tabs;
