/**
 * Created by Brett Hadley on 24/03/2016.
 */
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

const root = combineReducers({
    routing
});

export default root;
