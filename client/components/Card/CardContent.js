/**
 * Created by brett.hadley on 11/07/2016.
 */
import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import styles from './style/Card.scss';

export default class CardContent extends Component {
    static propTypes = {
        title: PropTypes.string
    };

    static defaultProps = {
        componentType: 'div'
    };

    render() {
        const classnames = cx({
            [styles.content]: true
        });

        return (
            <div className={classnames}>
                <h3>{this.props.title}</h3>
                {this.props.children}
            </div>
        );
    }
}
