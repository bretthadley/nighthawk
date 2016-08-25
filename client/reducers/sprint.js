import server from '../feathers/configureFeathers';
const service = server.service('sprint');
// Actions
const SPRINT_CREATED = 'nighthawk/sprint/SPRINT_CREATED';
const SPRINT_CREATE_ERROR = 'nighthawk/sprint/SPRINT_CREATE_ERROR';

// Reducer
export const defaultState = [];

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case 'SPRINT_CREATED': // websocket
        case SPRINT_CREATED: // from action in this reducer
            return [...state, action.payload];
        default:
            return state;
    }
}

// Action Creators
export function createdSprint(payload) {
    return {
        type: SPRINT_CREATED,
        payload
    };
}

export function createSprintError(payload) {
    return {
        type: SPRINT_CREATE_ERROR,
        payload
    };
}

export function createSprint({ title, description }) {
    return dispatch => {
        service.create({
            title,
            description
        }, (error, sprint) => { // eslint-disable-line
            if (error) {
                dispatch(createSprintError(error));
            }
            // } else {
            //     dispatch(createdSprint(sprint));
            // }
        });
    };
}
