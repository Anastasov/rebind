/* eslint-disable */
import React from "react";
import Tabs from "./BottomNavigationTabs";
import HomePage from "../../pages/home/HomePage";
/* eslint-enable */

const newPath = (path, component) => ({
  path,
  component
});
export const HOME_PAGE_PATH = "/home";
const Paths = [newPath(HOME_PAGE_PATH, <HomePage />)];

export const BOT_NAV_DISABLED_PATHS = [HOME_PAGE_PATH];

export const showBottomNavigationForPath = path =>
  BOT_NAV_DISABLED_PATHS.filter(
    botNavDisabledPath => botNavDisabledPath === path
  ).length === 0;

export const getTabIndexForPath = path => {
  const matchingTabs = Tabs.filter(tab => tab.path === path);
  let isBottomTab = matchingTabs && matchingTabs.length === 1;
  return isBottomTab ? matchingTabs[0].index : Tabs.length;
};

export const getPageBodyForPath = path => {
  const matchingPaths = Paths.filter(tab => tab.path === path);
  let isRegisteredPath = matchingPaths && matchingPaths.length === 1;
  return isRegisteredPath ? matchingPaths[0].component : <React.Fragment />;
};

export default Paths;
