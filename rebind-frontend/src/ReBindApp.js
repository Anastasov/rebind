/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import {FuseLayout, FuseTheme, FuseAuthorization} from '@fuse';
import MainToolbar from './main/MainToolbar';
import MainNavbarContent from './main/MainNavbarContent';
import MainNavbarHeader from './main/MainNavbarHeader';
import MainFooter from './main/MainFooter';
import QuickPanel from 'main/quickPanel/QuickPanel';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import JssProvider from 'react-jss/lib/JssProvider';
import SettingsPanel from 'main/SettingsPanel';
import { Auth } from 'auth';
/* eslint-enable */

const ReBindApp = ({
  store, routes, history, jss, generateClassName
}) => (
    <JssProvider jss={jss} generateClassName={generateClassName}>
        <Provider store={store}>
            <Auth>
                <Router history={history}>
                    <FuseAuthorization routes={routes}>
                        <FuseTheme>
                            <FuseLayout
                                routes={routes}
                                toolbar={
                                    <MainToolbar/>
                                }
                                navbarHeader={
                                    <MainNavbarHeader/>
                                }
                                navbarContent={
                                    <MainNavbarContent/>
                                }
                                footer={
                                    <MainFooter/>
                                }
                                rightSidePanel={
                                    <React.Fragment>
                                        <QuickPanel/>
                                    </React.Fragment>
                                }
                                contentWrapper={
                                    <SettingsPanel/>
                                }
                            >
                            </FuseLayout>
                        </FuseTheme>
                    </FuseAuthorization>
                </Router>
            </Auth>
        </Provider>
    </JssProvider>
);

ReBindApp.propTypes = {
  store: PropTypes.object.isRequired,
  routes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  jss: PropTypes.object.isRequired,
  generateClassName: PropTypes.object.isRequired
};

export default ReBindApp;
