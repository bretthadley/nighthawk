import { expect } from 'chai';
import * as taskActions from '../../client/reducers/task';
import reducer from '../../client/reducers/story';
import { fetchedSprints } from '../../client/reducers/sprint';

describe('Reducer [story]', () => {
    it('should return default state if no action type matches', () => {
        const action = { type: 'FAKE_ACTION' };
        const newState = reducer({}, action);
        expect(newState).to.deep.equal({});
    });

    it('should save stories when fetching all sprints', () => {
        const payload = {
            data: [
                { id: 1, tasks: [] },
                { id: 2, tasks: [
                    { id: 99, type: 'story' },
                    { id: 100, type: 'story' }
                ] },
                { id: 3, tasks: [] },
                { id: 4, tasks: [
                    { id: 105, type: 'story' }
                ] },
            ]
        }
        const newState = reducer({}, fetchedSprints(payload));
        expect(newState).to.have.property(1);
        expect(newState[1].stories).to.have.lengthOf(0);

        expect(newState).to.have.property(2);
        expect(newState[2].stories).to.have.lengthOf(2);
        expect(newState[2].stories[0]).to.equal(99);
        expect(newState[2].stories[1]).to.equal(100);
        expect(newState[2][99]).to.deep.equal(payload.data[1].tasks[0]);
        expect(newState[2][100]).to.deep.equal(payload.data[1].tasks[1]);

        expect(newState).to.have.property(3);
        expect(newState[3].stories).to.have.lengthOf(0);

        expect(newState).to.have.property(4);
        expect(newState[4].stories).to.have.lengthOf(1);
        expect(newState[4].stories[0]).to.equal(105);
        expect(newState[4][105]).to.deep.equal(payload.data[3].tasks[0]);
    });

    it('should create new sprint object containing the story when new story created or fetched and is first story for the sprint', () => {
        const actions = [taskActions.TASK_CREATED, taskActions.TASK_FETCHED];
        actions.forEach(actionType => {
            const payload = { id: 99, type: 'story', sprintId: 70 };
            const oldState = { 50: {}, 60: {} };
            const action = { type: actionType, payload };
            const newState = reducer(oldState, action);
            expect(newState).to.have.property(50);
            expect(newState).to.have.property(60);
            expect(newState).to.have.property(70);
            expect(newState[70].stories).to.have.lengthOf(1);
            expect(newState[70][99]).to.deep.equal(payload);
        });
    });

    it('should create add the story to existing sprint object when new story created or fetched and it is not first story for the sprint', () => {
        const actions = [taskActions.TASK_CREATED, taskActions.TASK_FETCHED];
        actions.forEach(actionType => {
            const payload = { id: 99, type: 'story', sprintId: 70 };
            const oldState = {
                70: { stories: [43, 44], 43: {}, 44: {} }
            };
            const action = { type: taskActions.TASK_CREATED, payload };
            const newState = reducer(oldState, action);
            expect(newState).to.have.property(70);
            expect(newState[70].stories).to.deep.equal([43, 44, 99]);
            expect(newState[70][43]).to.deep.equal({});
            expect(newState[70][44]).to.deep.equal({});
            expect(newState[70][99]).to.deep.equal(payload);
        });
    });

    it('should ignore tasks that are not stories when tasks are created or fetched', () => {
        const actions = [taskActions.TASK_CREATED, taskActions.TASK_FETCHED];
        actions.forEach(actionType => {
            const payload = { id: 99, type: 'task', sprintId: 70 };
            const oldState = {
                70: { stories: [43, 44], 43: {}, 44: {} }
            };
            const action = { type: taskActions.TASK_CREATED, payload };
            const newState = reducer(oldState, action);
            expect(newState).to.have.property(70);
            expect(newState[70].stories).to.deep.equal([43, 44]);
            expect(newState[70][43]).to.deep.equal({});
            expect(newState[70][44]).to.deep.equal({});
        });
    });
});
