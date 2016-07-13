/**
 * Created by Brett Hadley on 29/03/2016.
 */
import { connect } from 'react-redux';
// import * as actions from '../../reducers/something';
import Page from '../components/Page/Page';

const mapStateToProps = state => state;

const mapDispatchToProps = {
    // ...actions
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Page);
