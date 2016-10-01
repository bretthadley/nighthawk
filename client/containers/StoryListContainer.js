import { connect } from 'react-redux';
import { StoryList } from '../components/StoryList';
import * as actions from '../reducers/task';

const mapStateToProps = (state, props) => {
    const story = state.story[props.sprintId] || {};
    const storyIds = story.stories || [];
    return {
        stories: storyIds.map(storyId => story[storyId]),
        sprintId: props.sprintId
    };
};

const mapDispatchToActions = {
    ...actions
};

export default connect(
    mapStateToProps,
    mapDispatchToActions
)(StoryList);
