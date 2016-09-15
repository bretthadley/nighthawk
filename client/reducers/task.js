import server from '../feathers/configureFeathers';
import _ from 'lodash';

/**
    Example structure:
    {
        [parentTaskId]: {
            tasks: [taskId1, taskId2, taskId3],
            [taskId1]: {},
            [taskId2]: {},
            [taskId3]: {},
        }
    }

    Stories are not stored in here, see story reducer for explaination!
*/

const service = server.service('/api/task');

// Actions
export const TASK_CREATED = 'nighthawk/task/CREATED';
export const TASK_CREATE_ERROR = 'nighthawk/task/CREATE_ERROR';
export const TASK_FETCHED = 'nighthawk/task/FETCHED';
export const TASK_FETCH_ERROR = 'nighthawk/task/FETCH_ERROR';

const handleTaskCreated = (oldState, action) => {
    let newState = Object.assign({}, oldState);

    // Whether story or task is being created, we need to setup the parent object.
    if(!newState[action.payload.id]) {
        newState = {
            ...newState,
            [action.payload.id]: { tasks: [] }
        };
    }
    if(action.payload.type !== 'task') return newState;
    const parentTaskId = action.payload.parentTaskId;
    return {
        ...newState,
        [parentTaskId]: {
            ...newState[parentTaskId],
            tasks: [...newState[parentTaskId].tasks, action.payload.id],
            [action.payload.id]: action.payload
        }
    };
}

const handleTaskFetched = (oldState, action) => {
    if(!oldState[action.payload.id]) {
        const taskIds = action.payload.tasks.map(task => task.id) || [];
        return {
            ...oldState,
            [action.payload.id]: {
                tasks: taskIds,
                ...taskIds.reduce((acc, taskId) => {
                    return { ...acc, [taskId]: action.payload.tasks.find(task => task.id === taskId) }
                }, {})
            }
        };
    }
    return oldState;
}

// Reducer
export const defaultState = {};
export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case TASK_CREATED:
            return handleTaskCreated(state, action);
        case TASK_FETCHED:
            return handleTaskFetched(state, action);
        default:
            return state;
    }
}

// Action Creators
const createTaskError = payload => ({ type: TASK_CREATE_ERROR, payload });
export const createTask = (parentTaskIdOrSprintId, { title, description, estimatedTime, type }) => {
    return dispatch => {
        let payload = { title, description, type };
        if (type === 'story') {
            payload = { ...payload, sprintId: parentTaskIdOrSprintId };
        } else {
            payload = { ...payload, parentTaskId: parentTaskIdOrSprintId, estimatedTime };
        }

        service.create(payload, (error, task) => {
            if (error) {
                dispatch(createTaskError(error));
            }
        });
    };
}

const fetchedTask = payload => ({ type: TASK_FETCHED, payload });
const fetchTaskError = payload => ({ type: TASK_FETCH_ERROR, payload });
export const fetchTask = (taskId) => {
    return dispatch => {
        service.get(taskId).then(task => {
            dispatch(fetchedTask(task));
        }).catch(err => {
            dispatch(fetchTaskError(err));
        });
    };
}
