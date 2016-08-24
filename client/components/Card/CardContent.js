/**
 * Created by brett.hadley on 11/07/2016.
 */
import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import styles from './style/Card.scss';

export default class CardContent extends Component {
    static propTypes = {
        componentType: PropTypes.string,
        className: PropTypes.string,
        includeInExpanding: PropTypes.bool
    };

    static defaultProps = {
        componentType: 'div',
        includeInExpanding: true
    };

    render() {
        const {
            componentType,
            className,
            includeInExpanding, // eslint-disable-line
            children,
            ...others
        } = this.props;
        const Element = componentType;
        const classnames = cx({
            [styles['card-content']]: true,
            [className]: className
        });

        return (
            <Element className={classnames} {...others}>
                {children}
            </Element>
        );
    }
}
