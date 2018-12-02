/* eslint-disable */
import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import AccountIcon from "@material-ui/icons/AssignmentInd";
import CardsIcon from "@material-ui/icons/Contacts";
import ContactsIcon from "@material-ui/icons/ImportContacts";
import SettingsIcon from "@material-ui/icons/Settings";
import HomeComponent from "../../pages/home/HomePage";
import AccountComponent from "../../pages/profile/MyProfilePage";
import CardsComponent from "../../pages/cards/CardsPage";
/* eslint-enable */

const tab = (path, label, icon, component, index) => ({
  path,
  label,
  icon,
  component,
  index
});

export const HOME_TAB_PATH = "/home";
export const PROFILE_TAB_PATH = "/profile";
export const CARDS_TAB_PATH = "/cards";
export const CONTACTS_TAB_PATH = "/contacts";
export const SETTINGS_TAB_PATH = "/settings";
export const HOME_TAB_INDEX = 0;
export const PROFILE_TAB_INDEX = 1;
export const CARDS_TAB_INDEX = 2;
export const CONTACTS_TAB_INDEX = 3;
export const SETTINGS_TAB_INDEX = 4;
const Tabs = [
  tab(HOME_TAB_PATH, "Home", <HomeIcon />, <HomeComponent />, HOME_TAB_INDEX),
  tab(
    PROFILE_TAB_PATH,
    "Account",
    <AccountIcon />,
    <AccountComponent />,
    PROFILE_TAB_INDEX
  ),
  tab(
    CARDS_TAB_PATH,
    "Cards",
    <CardsIcon />,
    <CardsComponent />,
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
export const DYNAMIC_TAB_INDEX = Tabs.length;

export default Tabs;
