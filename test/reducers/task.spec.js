import { expect } from 'chai';
import reducer, * as taskActions from '../../client/reducers/task';

const taskCreated = payload => ({ type: taskActions.TASK_CREATED, payload });

describe('Reducer [task]', () => {
    it('should return default state if no action type matches', () => {
        const action = { type: 'FAKE_ACTION' };
        const newState = reducer({}, action);
        expect(newState).to.deep.equal({});
    });

    it('should save empty container object when creating a story', () => {
        const payload = { id: 9, type: 'story', tasks: [], sprintId: 746};
        const newState = reducer({}, taskCreated(payload));
        expect(newState).to.have.property(9);
        expect(newState[9].tasks).to.have.lengthOf(0);
    });

    it('should save empty container object when creating a task', () => {
        const oldState = { 123: { tasks: [] } };
        const payload = { id: 9, type: 'task', tasks: [], parentTaskId: 123};
        const newState = reducer(oldState, taskCreated(payload));
        expect(newState).to.have.property(9);
        expect(newState[9].tasks).to.have.lengthOf(0);
    });

    it('should append task when creating a task for a parent task that already has tasks', () => {
        const oldState = {
            123: { tasks: [4,5], 4: {}, 5: {} }
        };
        const payload = { id: 9, type: 'task', tasks: [], parentTaskId: 123};
        const newState = reducer(oldState, taskCreated(payload));
        expect(newState).to.have.property(9);
        expect(newState[9].tasks).to.have.lengthOf(0);
        expect(newState).to.have.property(123);
        expect(newState[123].tasks).to.deep.equal([4,5,9]);
        expect(newState[123][9]).to.deep.equal(payload);
    });
});
