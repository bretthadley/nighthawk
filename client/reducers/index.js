/**
 * Created by Brett Hadley on 24/03/2016.
 */
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import example from './example';
import sprint from './sprint';

const root = combineReducers({
    routing,
    example,
    sprint
});

export default root;
