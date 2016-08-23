/**
 * Created by brett.hadley on 11/07/2016.
 */
import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import styles from './style/Card.scss';

export default class CardActions extends Component {
    static propTypes = {
        componentType: PropTypes.string,
        className: PropTypes.string,
        align: PropTypes.oneOf('vertical', 'horizontal'),
        includeInExpanding: PropTypes.bool
    };

    static defaultProps = {
        componentType: 'div',
        layout: 'vertical',
        includeInExpanding: true
    };

    render() {
        const {
            componentType,
            className,
            align,
            includeInExpanding, // eslint-disable-line
            children,
            ...others
        } = this.props;
        const Element = componentType;
        const classnames = cx({
            [styles.actions]: true,
            [styles[align]]: true,
            [className]: className
        });

        return (
            <Element className={classnames} {...others}>
                {children}
            </Element>
        );
    }
}
