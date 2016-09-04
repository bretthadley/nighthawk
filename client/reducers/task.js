import server from '../feathers/configureFeathers';
import { STORY_CREATED, STORY_FETCHED } from './story';
import _ from 'lodash';

/**
    Example structure:
    {
        [storyId]: {
            tasks: [taskId1, taskId2, taskId3],
            [taskId1]: {},
            [taskId2]: {},
            [taskId3]: {},
        }
    }
*/

const service = server.service('task');

// Actions
export const TASK_CREATED = 'nighthawk/task/CREATED';
export const TASK_CREATE_ERROR = 'nighthawk/task/CREATE_ERROR';

// Reducer
export const defaultState = {};
export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case TASK_CREATED:
            const storyId_ = action.payload.storyId;
            return {
                ...state,
                [storyId_]: {
                    ...state[storyId_],
                    tasks: [...state[storyId_].tasks, action.payload.id],
                    [action.payload.id]: action.payload
                }
            };
        case STORY_FETCHED:
        case STORY_CREATED:
            const storyId = action.payload.id;
            const tasksFromApi = action.payload.tasks || [];
            const tasksForStory = tasksFromApi.reduce((acc, task) => {
                return { ...acc, tasks: [...acc.tasks, task.id], [task.id]: task };
            }, { tasks: [] });
            return { ...state, [storyId]: tasksForStory };
        default:
            return state;
    }
}

// Action Creators

const createTaskError = payload => ({ type: TASK_CREATE_ERROR, payload });

export const createTask = (storyId, { title, description, estimatedTime }) => {
    return dispatch => {
        service.create({
            title,
            description,
            estimatedTime,
            storyId
        }, (error, task) => {
            if (error) {
                dispatch(createTaskError(error));
            }
        });
    };
}
