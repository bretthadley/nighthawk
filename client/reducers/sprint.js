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
export const SPRINT_PATCHED = 'nighthawk/sprint/PATCHED';
export const SPRINT_PATCH_ERROR = 'nighthawk/sprint/PATCH_ERROR';

// Reducer
export const defaultState = {
    sprints: []
};

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case SPRINT_PATCHED:
            return {
                ...state,
                [action.payload.id]: action.payload
            };
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
export const createdSprint = payload => ({ type: SPRINT_CREATED, payload });
export const createSprintError = payload => ({ type: SPRINT_CREATE_ERROR, payload });
export const fetchedSprints = payload => ({ type: SPRINTS_FETCHED, payload });
const fetchedSprintsError = payload => ({ type: SPRINTS_FETCH_ERROR, payload });
const fetchedSprint = payload => ({ type: SPRINT_FETCHED, payload });
const fetchSprintError = payload => ({ type: SPRINT_FETCH_ERROR, payload });
const patchedSprint = payload => ({ type: SPRINT_PATCHED, payload });
const patchSprintError = payload => ({ type: SPRINT_PATCH_ERROR, payload });

// Async Actions
export function createSprint({ title, description }) {
    return dispatch => {
        service.create({ title, description}).catch(err => {
            dispatch(createSprintError(error));
        });
    };
}

export function patchSprint(sprintId, data) {
    return dispatch => {
        service.patch(sprintId, data).catch(err => {
            dispatch(patchSprintError(err));
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
