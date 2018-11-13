/* eslint-disable */
import React from "react";
import { Provider } from "react-redux";
import { Route, Switch, Router } from "react-router-dom";
import { configuredStore, history } from "./config/configureStore";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme } from "@material-ui/core/styles";
import ReBind from "./config/ReBind";
import Navigation from "./components/nav/Navigation";
import ColoredSnackbar from "./components/snackbar/ColoredSnackbar";
import ModalContainer from "./components/modal/ModalContainer";
import HomePage from "./pages/home/HomePage";
import MyProfilePage from "./pages/profile/MyProfilePage";
import ContactsPage from "./pages/ContactsPage";
import "typeface-roboto";
import "typeface-bungee";
import "typeface-montserrat";
/* eslint-enable */

const App = () => (
  <Provider store={configuredStore}>
    <MuiThemeProvider theme={createMuiTheme(ReBind.THEME)}>
      <CssBaseline />
      <Router history={history}>
        <Navigation />
        <ColoredSnackbar />
        <ModalContainer />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route path="/profile" component={MyProfilePage} />
          <Route path="/contacts" component={ContactsPage} />
        </Switch>
      </Router>
    </MuiThemeProvider>
  </Provider>
);

export default App;
