import { connect } from 'react-redux';
import { StoryList } from '../components/StoryList';
import * as actions from '../reducers/story';

const mapStateToProps = (state, props) => {
    return {
        stories: state.story[props.sprintId] || []
    };
};

const mapDispatchToActions = {
    ...actions
};

export default connect(
    mapStateToProps,
    mapDispatchToActions
)(StoryList);
