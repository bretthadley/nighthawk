/**
 * Created by brett.hadley on 28/06/2016.
 */
import React, { PropTypes } from 'react';
import cx from 'classnames';
import { COLUMN_TYPES } from './config';
import styles from './style/Grid.scss';

export default class GridColumn extends React.Component {
    static propTypes = {
        default: PropTypes.oneOf(COLUMN_TYPES),
        pull: PropTypes.oneOf(COLUMN_TYPES),
        push: PropTypes.oneOf(COLUMN_TYPES),
        xs: PropTypes.oneOf(COLUMN_TYPES),
        xsPull: PropTypes.oneOf(COLUMN_TYPES),
        xsPush: PropTypes.oneOf(COLUMN_TYPES),
        sm: PropTypes.oneOf(COLUMN_TYPES),
        smPull: PropTypes.oneOf(COLUMN_TYPES),
        smPush: PropTypes.oneOf(COLUMN_TYPES),
        md: PropTypes.oneOf(COLUMN_TYPES),
        mdPull: PropTypes.oneOf(COLUMN_TYPES),
        mdPush: PropTypes.oneOf(COLUMN_TYPES),
        lg: PropTypes.oneOf(COLUMN_TYPES),
        lgPull: PropTypes.oneOf(COLUMN_TYPES),
        lgPush: PropTypes.oneOf(COLUMN_TYPES),
        xlg: PropTypes.oneOf(COLUMN_TYPES),
        xlgPull: PropTypes.oneOf(COLUMN_TYPES),
        xlgPush: PropTypes.oneOf(COLUMN_TYPES)
    };

    static defaultProps = {
        componentType: 'div'
    };

    render() {
        const Component = this.props.componentType;
        const classnames = cx({
            [styles.grid__item]: true,
            [styles[this.props.default]]: this.props.default,
            [styles[`pull--${this.props.pull}`]]: this.props.pull,
            [styles[`push--${this.props.push}`]]: this.props.push,
            [styles[`xs--${this.props.xs}`]]: this.props.xs,
            [styles[`pull--xs--${this.props.xsPull}`]]: this.props.xsPull,
            [styles[`push--xs--${this.props.xsPush}`]]: this.props.xsPush,
            [styles[`sm--${this.props.sm}`]]: this.props.sm,
            [styles[`pull--sm--${this.props.smPull}`]]: this.props.smPull,
            [styles[`push--sm--${this.props.smPush}`]]: this.props.smPush,
            [styles[`md--${this.props.md}`]]: this.props.md,
            [styles[`pull--md--${this.props.mdPull}`]]: this.props.mdPull,
            [styles[`push--md--${this.props.mdPush}`]]: this.props.mdPush,
            [styles[`lg--${this.props.lg}`]]: this.props.lg,
            [styles[`pull--lg--${this.props.lgPull}`]]: this.props.lgPull,
            [styles[`push--lg--${this.props.lgPush}`]]: this.props.lgPush,
            [styles[`xlg--${this.props.xlg}`]]: this.props.xlg,
            [styles[`pull--xlg--${this.props.xlgPull}`]]: this.props.xlgPull,
            [styles[`push--xlg--${this.props.xlgPush}`]]: this.props.xlgPush,
            [this.props.className]: this.props.className
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
