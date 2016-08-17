/**
 * Created by Brett Hadley on 29/03/2016.
 */
import { connect } from 'react-redux';
// import * as actions from '../../reducers/something';
import { TeamDashboardPage } from '../pages';

const mapStateToProps = state => state;

const mapDispatchToProps = {
    // ...actions
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TeamDashboardPage);
