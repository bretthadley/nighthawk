/**
 * Created by Brett Hadley on 29/03/2016.
 */
import { connect } from 'react-redux';
// import * as actions from '../../reducers/something';
import { SprintPage } from '../pages';

const mapStateToProps = (state, props) => {
    return { sprint : state.sprint[props.routeParams.sprintId] };
}

const mapDispatchToActions = {
    // ...actions
};

export default connect(
    mapStateToProps,
    mapDispatchToActions
)(SprintPage);
