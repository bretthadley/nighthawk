import server from '../feathers/configureFeathers';
import { SPRINTS_FETCHED } from './sprint';

/**
    Example structure:
    {
        [sprintId]: {
            stories: [storyId1, storyId2, storyId3],
            [storyId1]: {},
            [storyId2]: {},
            [storyId3]: {},
        }
    }
*/

const service = server.service('story');

// Actions
export const STORY_CREATED = 'nighthawk/story/CREATED';
export const STORY_CREATE_ERROR = 'nighthawk/story/CREATE_ERROR';

// Reducer
export const defaultState = {};
export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case STORY_CREATED:
            const storiesForSprint = state[action.payload.sprintId] || { stories: [] };
            return {
                ...state,
                [action.payload.sprintId]: {
                    ...storiesForSprint,
                    stories: [...storiesForSprint.stories, action.payload.id],
                    [action.payload.id]: action.payload
                }
            };
        case SPRINTS_FETCHED:
            return action.payload.data.reduce((state, sprint) => {
                const stories = sprint.stories || [];
                const obj = stories.reduce((acc, story) => {
                    return {
                        ...acc,
                        stories: [...acc.stories, story.id],
                        [story.id]: story
                    }
                }, { stories: [] });
                return {
                    ...state,
                    [sprint.id]: obj
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
