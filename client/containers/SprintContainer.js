/**
 * Created by Brett Hadley on 29/03/2016.
 */
import { connect } from 'react-redux';
import { SprintPage } from '../pages';
import { patchSprint } from '../reducers/sprint';

const mapStateToProps = (state, props) => {
    return { sprint : state.sprint[props.routeParams.sprintId] };
}

const mapDispatchToActions = { patchSprint };

export default connect(
    mapStateToProps,
    mapDispatchToActions
)(SprintPage);
