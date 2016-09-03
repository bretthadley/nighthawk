import server from '../feathers/configureFeathers';
import { SPRINTS_FETCHED } from './sprint';

const service = server.service('story');

// Actions
export const STORY_CREATED = 'nighthawk/story/CREATED';
export const STORY_CREATE_ERROR = 'nighthawk/story/CREATE_ERROR';

// Reducer
export const defaultState = {};
export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case STORY_CREATED:
            return {
                ...state,
                [action.payload.sprintId]: [...state[action.payload.sprintId], action.payload]
            };
        case SPRINTS_FETCHED:
            return action.payload.data.reduce((state, sprint) => {
                return {
                    ...state,
                    [sprint.id]: sprint.stories || []
                }
            }, state);
        default:
            return state;
    }
}

// Action Creators

const createStoryError = payload => ({ type: STORY_CREATE_ERROR, payload });

export const createStory = (sprintId, { title, description }) => {
    return dispatch => {
        service.create({
            title,
            description,
            sprintId
        }, (error, sprint) => {
            if (error) {
                dispatch(createStoryError(error));
            }
        });
    };
}
