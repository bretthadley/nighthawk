// Actions
const SOMETHING = 'cdx/example/SOMETHING';

// Reducer
export const defaultState = [];

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case 'MESSAGES_CREATED':
            return [...state, action.payload];
        default:
            return state;
    }
}

// Action Creators
export function something() {
    return { type: SOMETHING };
}
