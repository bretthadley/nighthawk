import server from '../feathers/configureFeathers';

/**
    Example structure:
    {
        sprints: [sprintId1, sprintId2, sprintId3],
        [sprintId1]: {},
        [sprintId2]: {},
        [sprintId3]: {},
    }
*/

const service = server.service('/api/sprint');

// Actions
export const SPRINT_CREATED = 'nighthawk/sprint/CREATED';
export const SPRINT_CREATE_ERROR = 'nighthawk/sprint/CREATE_ERROR';
export const SPRINT_FETCHED = 'nighthawk/sprint/FETCHED';
export const SPRINT_FETCH_ERROR = 'nighthawk/sprint/FETCH_ERROR';
export const SPRINTS_FETCHED = 'nighthawk/sprints/FETCHED';
export const SPRINTS_FETCH_ERROR = 'nighthawk/sprints/FETCH_ERROR';

// Reducer
export const defaultState = {
    sprints: []
};

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case SPRINT_CREATED:
            return {
                ...state,
                sprints: [...state.sprints, action.payload.id],
                [action.payload.id]: action.payload
            };
        case SPRINTS_FETCHED:
            return action.payload.data.reduce((state, sprint) => {
                return {
                    ...state,
                    sprints: [...state.sprints, sprint.id],
                    [sprint.id]: sprint
                }
            }, state);
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
const fetchedSprint = payload => ({ type: SPRINT_FETCHED, payload });
const fetchSprintError = payload => ({ type: SPRINT_FETCH_ERROR, payload });
const fetchedSprints = payload => ({ type: SPRINTS_FETCHED, payload });
const fetchedSprintsError = payload => ({ type: SPRINTS_FETCH_ERROR, payload });

// Async Actions
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

export function fetchSprints() {
    return dispatch => {
        service.find().then(sprints => {
            dispatch(fetchedSprints(sprints));
        }).catch(err => {
            dispatch(fetchedSprintsError(err));
        });
    };
}

export function fetchSprint(sprintId) {
    return dispatch => {
        service.get(sprintId).then(sprint => {
            dispatch(fetchedSprint(sprint));
        }).catch(err => {
            dispatch(fetchedSprintError(err));
        });
    };
}
