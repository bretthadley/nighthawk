/**
 * Created by Brett Hadley on 24/03/2016.
 */
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import example from './example';

const root = combineReducers({
    routing,
    example
});

export default root;
