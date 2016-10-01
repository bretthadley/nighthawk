/**
 * Created by Brett Hadley on 20/09/2016.
 */
import { connect } from 'react-redux';
import { SprintPlanning } from '../components/SprintPlanning';

const mapStateToProps = (state, props) => {
    return { ...props, sprintId: props.routeParams.sprintId };
};

const mapDispatchToActions = {};

export default connect(
    mapStateToProps,
    mapDispatchToActions
)(SprintPlanning);
