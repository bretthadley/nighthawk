/**
 * Created by brett.hadley on 11/05/2016.
 */
import 'babel-polyfill';
import './app.scss';
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { configureStore } from '../client/store/configureStore';
import feathersApp from '../client/feathers/configureFeathers';
import { RootContainer } from './containers';
import routes from './routes';
import listenToServer from './utils/listenToServer';

const store = configureStore(browserHistory, window.__INITIAL_STATE__); // eslint-disable-line
const history = syncHistoryWithStore(browserHistory, store);

listenToServer(feathersApp, store);

const messageService = feathersApp.service('messages');

messageService.create({
    text: 'hellllooo'
});

render(
    <AppContainer>
        <RootContainer store={store} history={history} routes={routes} />
    </AppContainer>,
    document.getElementById('app'));

if (module.hot) {
    module.hot.accept(RootContainer, () => {
        const NextRootContainer = require('./containers/RootContainer').default; // eslint-disable-line

        render(
            <AppContainer>
                <NextRootContainer store={store} history={history} routes={routes} />
            </AppContainer>,
            document.getElementById('app'));
    });
}
