/**
 * Created by brett.hadley on 28/06/2016.
 */
import React, { PropTypes } from 'react';
import cx from 'classnames';
import { COLUMN_TYPES } from './config';
import styles from './style/Grid.scss';

export default class GridColumn extends React.Component {
    static propTypes = {
        all: PropTypes.oneOf(COLUMN_TYPES),
        xs: PropTypes.oneOf(COLUMN_TYPES),
        sm: PropTypes.oneOf(COLUMN_TYPES),
        md: PropTypes.oneOf(COLUMN_TYPES),
        lg: PropTypes.oneOf(COLUMN_TYPES),
        xlg: PropTypes.oneOf(COLUMN_TYPES)
    };

    static defaultProps = {
        componentType: 'div'
    };

    render() {
        const Component = this.props.componentType;
        const classnames = cx({
            [styles.grid__item]: true,
            [styles[this.props.all]]: this.props.all,
            [styles[`xs--${this.props.xs}`]]: this.props.xs,
            [styles[`sm--${this.props.sm}`]]: this.props.sm,
            [styles[`md--${this.props.md}`]]: this.props.md,
            [styles[`lg--${this.props.lg}`]]: this.props.lg,
            [styles[`xlg--${this.props.xlg}`]]: this.props.xlg,
            [this.props.componentClass]: this.props.componentClass
        });

        if (this.props.children) {
            return (
                <Component className={classnames}>
                    {this.props.children}
                </Component>
            );
        }

        return null;
    }
}
