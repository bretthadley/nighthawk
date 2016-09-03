/**
 * Created by Brett Hadley on 18/08/2016.
 */
import { connect } from 'react-redux';
import * as actions from '../reducers/sprint';
import { SprintList } from '../components/SprintList';

const mapStateToProps = state => {
    const sprints = state.sprint.sprints.map(sprintId => {
        return {
            ...state.sprint[sprintId],
            stories: state.story[sprintId] || []
        };
    });

    return { sprints };
};

const mapDispatchToActions = {
    ...actions
};

export default connect(
    mapStateToProps,
    mapDispatchToActions
)(SprintList);
