/**
 * Created by brett.hadley on 28/06/2016.
 */
import React, { PropTypes } from 'react';
import cx from 'classnames';
import styles from './style/Grid.scss';

export default class Grid extends React.Component {
    static propTypes = {
        reverse: PropTypes.bool,
        align: PropTypes.oneOf(['right', 'center']),
        alignVertical: PropTypes.oneOf(['bottom', 'middle']),
        spacing: PropTypes.oneOf(['narrow', 'wide', 'full']),
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
            [styles[`grid--${this.props.spacing}`]]: this.props.spacing,
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
