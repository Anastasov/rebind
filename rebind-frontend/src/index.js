/* eslint-disable */
import 'babel-polyfill';
import 'typeface-muli';
import React from 'react';
import ReactDOM from 'react-dom';
import './react-table-defaults';
import './styles/index.css';
import { create } from 'jss';
import { createGenerateClassName, jssPreset } from '@material-ui/core/styles';
import jssExtend from 'jss-extend'
import {routes} from './fuse-configs/fuseRoutesConfig';
import store from 'store';
import ReBindApp from './ReBindApp';
import registerServiceWorker from './registerServiceWorker';
import history from './history';
/* eslint-enable */

const jss = create({
  ...jssPreset(),
  plugins: [...jssPreset().plugins, jssExtend()]
});

jss.options.insertionPoint = document.getElementById('jss-insertion-point');
const generateClassName = createGenerateClassName();

ReactDOM.render(
    <ReBindApp
        store={store}
        routes={routes}
        history={history}
        jss={jss}
        generateClassName={generateClassName}
    />,
    document.getElementById('root')
);

registerServiceWorker();
