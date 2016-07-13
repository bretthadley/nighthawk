/**
 * Created by Brett Hadley on 29/03/2016.
 */
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers';

export function configureStore(history, initialState = {}) {
    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunkMiddleware, routerMiddleware(history))
    );

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers').default; // eslint-disable-line
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}
