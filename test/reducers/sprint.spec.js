import { expect } from 'chai';
import sprint, * as actions from '../../client/reducers/sprint';

describe('Reducer [sprint]', () => {
    it('should return default state if no action type matches', () => {
        const action = { type: 'FAKE_ACTION' };
        const newState = sprint({}, action);
        expect(newState).to.deep.equal({});
    });
});
