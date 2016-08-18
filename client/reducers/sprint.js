import server from '../feathers/configureFeathers';
const service = server.service('sprint');
// Actions
const SPRINT_CREATED = 'nighthawk/sprint/SPRINT_CREATED';
const SPRINT_CREATE_ERROR = 'nighthawk/sprint/SPRINT_CREATE_ERROR';

// Reducer
export const defaultState = [];

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case 'SPRINT_CREATED':
            return [...state, action.payload.sprint];
        default:
            return state;
    }
}

// Action Creators
export function createdSprint(sprint) {
    return {
        type: SPRINT_CREATED,
        payload: {
            sprint
        }
    };
}

export function createSprintError(error) {
    return {
        type: SPRINT_CREATE_ERROR,
        payload: {
            error
        }
    };
}

export function createSprint({ title, description }) {
    return dispatch => {
        service.create({
            title,
            description
        }, (error, sprint) => {
            if (error) {
                dispatch(createSprintError(error));
            } else {
                dispatch(createdSprint(sprint));
            }
        });
    };
}
