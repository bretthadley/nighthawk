import server from '../feathers/configureFeathers';
import { SPRINTS_FETCHED } from './sprint';
import { TASK_CREATED, TASK_FETCHED } from './task';

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

    Even though tasks and stories are the same in the DB, need to keep them
    in two reducers because of our data structure. The object key is the ID of
    the owner, therefore could be a sprintId (for a story) or a parentTaskId (for as task).

    This means we could have conflicts as sprintId and taskId increment independently.

    By keeping stories and tasks separate, it negates the inevitable conflicts
    and is also nicer from a React Component perspective.
*/

const service = server.service('/api/task');

// Reducer
export const defaultState = {};
export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case TASK_FETCHED:
        case TASK_CREATED:
            if (action.payload.type !== 'story') return state;
            const sprintObject = state[action.payload.sprintId] || { stories: [] };
            return {
                ...state,
                [action.payload.sprintId]: {
                    ...sprintObject,
                    stories: [...sprintObject.stories, action.payload.id],
                    [action.payload.id]: action.payload
                }
            };
        case SPRINTS_FETCHED:
            return action.payload.data.reduce((state, sprint) => {
                const storiesForSprint = sprint.tasks || [];
                const obj = storiesForSprint.reduce((acc, story) => {
                    return {
                        ...acc,
                        stories: [...acc.stories, story.id],
                        [story.id]: story
                    };
                }, { stories: [] });
                return { ...state, [sprint.id]: obj };
            }, state);
        default:
            return state;
    }
}
