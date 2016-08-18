/**
 * Created by Brett Hadley on 18/08/2016.
 */
import { connect } from 'react-redux';
import * as actions from '../reducers/sprint';
import { SprintList } from '../components/SprintList';

const mapStateToProps = state => ({ sprints: state.sprint });

const mapDispatchToActions = {
    ...actions
};

export default connect(
    mapStateToProps,
    mapDispatchToActions
)(SprintList);
