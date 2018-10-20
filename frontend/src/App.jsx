/* eslint-disable */
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { configuredStore } from './configureStore';
import HomePage from './pages/home/HomePage';
import AuthModalContainer from './components/auth/AuthModalContainer';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';
import ReBind from './assets/ReBind';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './App.css';
import 'typeface-roboto';
/* eslint-enable */

const App = () => (
  <Provider store={configuredStore}>
    <div className="App">
      <MuiThemeProvider theme={createMuiTheme(ReBind.THEME)}>
        <Router>
          <Route path="/" component={HomePage} />
          <Route path="/test" component={HomePage} />
        </Router>
      </MuiThemeProvider>
    </div>
  </Provider>
);

export default App;
