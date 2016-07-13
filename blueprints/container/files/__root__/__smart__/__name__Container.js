import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { action } from '../../actions';
import { Component } from '../../components';

class <%= pascalEntityName %>Container extends Component {
    render() {
        return (
            <div></div>
        );
    }
}

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = {
    action
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(<%= pascalEntityName %>Container);
