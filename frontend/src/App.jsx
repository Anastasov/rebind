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
import "typeface-roboto";
import "typeface-bungee";
import "typeface-montserrat";
import "./config/styles/slick-carousel.css";
/* eslint-enable */

const App = () => (
  <Provider store={configuredStore}>
    <MuiThemeProvider theme={createMuiTheme(ReBind.THEME)}>
      <CssBaseline />
      <ModalContainer />
      <Router history={history}>
        <Switch>
          <Route key={"/"} path={"/"} component={PageTemplate} />
        </Switch>
      </Router>
    </MuiThemeProvider>
  </Provider>
);

export default App;
