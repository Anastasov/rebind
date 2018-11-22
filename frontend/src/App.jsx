/* eslint-disable */
import React from "react";
import { Provider } from "react-redux";
import { Route, Switch, Router } from "react-router-dom";
import { configuredStore, history } from "./config/configureStore";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme } from "@material-ui/core/styles";
import ReBind from "./config/ReBind";
import PageTemplate from "./components/nav/PageTemplate";
import ModalContainer from "./components/modal/ModalContainer";
import { HOME_PAGE_PATH } from "./components/nav/Paths";
import {
  ACCOUNT_TAB_PATH,
  CONTACTS_TAB_PATH
} from "./components/nav/BottomNavigationTabs";
import pathAwareComponent from "./meta-components/pathAwareComponent";
import authComponent from "./meta-components/authComponent";
import "typeface-roboto";
import "typeface-bungee";
import "typeface-montserrat";
/* eslint-enable */

const publicPaths = [HOME_PAGE_PATH];
const authPaths = [ACCOUNT_TAB_PATH, CONTACTS_TAB_PATH];

const App = () => (
  <Provider store={configuredStore}>
    <MuiThemeProvider theme={createMuiTheme(ReBind.THEME)}>
      <CssBaseline />
      <ModalContainer />
      <Router history={history}>
        <Switch>
          {publicPaths.map(path => (
            <Route
              key={path}
              path={path}
              component={pathAwareComponent(PageTemplate, path)}
            />
          ))}
          {authPaths.map(path => (
            <Route
              key={path}
              path={path}
              component={pathAwareComponent(
                authComponent(PageTemplate, path),
                path
              )}
            />
          ))}
        </Switch>
      </Router>
    </MuiThemeProvider>
  </Provider>
);

export default App;
