/**
 * Created by brett.hadley on 28/06/2016.
 */
import React, { PropTypes } from 'react';
import cx from 'classnames';
import { SPACING_TYPES } from './config';
import styles from './style/Grid.scss';

export default class Grid extends React.Component {
    static propTypes = {
        reverse: PropTypes.bool,
        align: PropTypes.oneOf(['right', 'center']),
        alignVertical: PropTypes.oneOf(['bottom', 'middle']),
        spacing: PropTypes.oneOf(SPACING_TYPES),
        smSpacing: PropTypes.oneOf(SPACING_TYPES),
        mdSpacing: PropTypes.oneOf(SPACING_TYPES),
        lgSpacing: PropTypes.oneOf(SPACING_TYPES),
        xlgSpacing: PropTypes.oneOf(SPACING_TYPES),
        componentType: PropTypes.string
    };

    static defaultProps = {
        componentType: 'div'
    };

    render() {
        const Component = this.props.componentType;
        const classnames = cx({
            [styles.grid]: true,
            [styles['grid--rev']]: this.props.reverse,
            [styles[`grid--${this.props.alignVertical}`]]: this.props.alignVertical,
            [styles[`grid--${this.props.align}`]]: this.props.align,
            [styles[`grid--spacing--${this.props.spacing}`]]: this.props.spacing,
            [styles[`sm--grid--spacing--${this.props.smSpacing}`]]: this.props.smSpacing,
            [styles[`md--grid--spacing--${this.props.mdSpacing}`]]: this.props.mdSpacing,
            [styles[`lg--grid--spacing--${this.props.lgSpacing}`]]: this.props.lgSpacing,
            [styles[`xlg--grid--spacing--${this.props.xlgSpacing}`]]: this.props.xlgSpacing,
            [styles[`grid--${this.props.componentType}`]]: this.props.componentType,
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
