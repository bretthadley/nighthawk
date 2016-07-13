// Actions
const SOMETHING = 'cdx/<%= camelEntityName %>/SOMETHING';

// Reducer
export const defaultState = {};

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case SOMETHING:
            return state;
        default:
            return state;
    }
}

// Action Creators
export function something() {
    return { type: SOMETHING };
}
