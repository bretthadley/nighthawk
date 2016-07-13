/**
 * Created by brett.hadley on 11/05/2016.
 */
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

export default class RootContainer extends Component { // eslint-disable-line
    render() {
        const { store, history, routes } = this.props;
        return (
            <Provider store={store}>
                <Router history={history} routes={routes} />
            </Provider>
        );
    }
}
