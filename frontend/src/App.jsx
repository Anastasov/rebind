/* eslint-disable */
import React from 'react';
import HomePage from './pages/home/HomePage';
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
  <div className="App">
    <MuiThemeProvider theme={createMuiTheme(ReBind.THEME)}>
      <HomePage />
    </MuiThemeProvider>
  </div>
);

export default App;
