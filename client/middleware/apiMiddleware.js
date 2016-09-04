import { fetchStory } from '../reducers/story';

export default store => next => action => {
    if(action.type === '@@router/LOCATION_CHANGE') {
        const parts = action.payload.pathname.split('/').filter(v => v.length > 0);
        if (parts.length === 3) {
            // sprint page.
        } else if (parts.length === 4) {
            // story page.
            const storyId = parseInt(parts[3].match(/[0-9]*/g).filter(v => v.length > 0)[0]);
            store.dispatch(fetchStory(storyId));
        }
    }

    return next(action);
}
