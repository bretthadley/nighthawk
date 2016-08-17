/**
 * Created by brett.hadley on 17/06/2016.
 */
import React, { PropTypes } from 'react';
import cx from 'classnames';
import { Link } from 'react-router';

export default class Navigation extends React.Component {
    static propTypes = {
        className: PropTypes.string,
        componentType: PropTypes.string
    };

    static defaultProps = {
        componentType: 'div'
    };

    render() {
        const Component = this.props.componentType;
        const classnames = cx({
            [this.props.className]: this.props.className
        });

        return (
            <Component className={classnames}>
                <Link to="/">Home</Link>
                <Link to="/team">Dashbaord</Link>
            </Component>
        );
    }
}
