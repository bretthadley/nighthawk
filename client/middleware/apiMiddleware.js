import { fetchSprint } from '../reducers/sprint';

export default store => next => action => {
    // Example
    // store.dispatch(fetchSprint(4));
    return next(action);
}
