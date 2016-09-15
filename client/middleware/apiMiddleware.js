import { fetchTask } from '../reducers/task';

export default store => next => action => {
    if(action.type === '@@router/LOCATION_CHANGE') {
        const parts = action.payload.pathname.split('/').filter(v => v.length > 0);
        if (parts.length === 3) {
            // sprint page.
        } else if (parts.length === 5) {
            // task page.
            store.dispatch(fetchTask(parts[4]));
        }
    }

    return next(action);
}
