/**
 * Created by Brett Hadley on 18/08/2016.
 */
import { connect } from 'react-redux';
import * as actions from '../reducers/sprint';
import { SprintList } from '../components/SprintList';
import _ from 'lodash';

const mapStateToProps = state => {
    const sprints = state.sprint.sprints.map(sprintId => {
        return {
            ...state.sprint[sprintId],
            stories:  _.get(state,`story.${sprintId}.stories`) || []
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
