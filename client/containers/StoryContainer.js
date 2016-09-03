import { connect } from 'react-redux';
import { StoryPage } from '../pages';

const mapStateToProps = (state, props) => {
    const storiesForSprint = state.story[props.routeParams.sprintId] || {};
    const story = storiesForSprint[props.routeParams.storyId] || {};
    return { story };
}

const mapDispatchToActions = {
    // ...actions
};

export default connect(
    mapStateToProps,
    mapDispatchToActions
)(StoryPage);
