import { expect } from 'chai';
import reducer, * as actions from '../../client/reducers/example.js';

describe('Reducer example.js tests', () => {
    it('should return default state if no action type matches', () => {
        const oldState = undefined;
        const action = { type: 'FAKE_ACTION' };

        const newState = reducer(oldState, action);
        expect(newState).to.deep.equal({});
    });

    it('should return old state when no action type matches', () => {
        const oldState = { fake: 'state' };
        const action = { type: 'FAKE_ACTION' };

        const newState = reducer(oldState, action);
        expect(newState).to.deep.equal(oldState);
    });

    it('should ...', () => {
        const action = actions.something;
        const oldState = {};

        const newState = reducer(oldState, action);

        expect(newState).to.deep.equal(oldState);
    });
});
