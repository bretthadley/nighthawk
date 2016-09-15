import { connect } from 'react-redux';
import { TaskList } from '../components/TaskList';
import * as actions from '../reducers/task';

const mapStateToProps = (state, props) => {
    const tasksForStory = state.task[props.storyId] || {};
    const taskIds = tasksForStory.tasks || [];
    return {
        tasks: taskIds.map(taskId => tasksForStory[taskId])
    };
};

const mapDispatchToActions = {
    ...actions
};

export default connect(
    mapStateToProps,
    mapDispatchToActions
)(TaskList);
