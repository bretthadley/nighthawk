/**
 * Created by brett.hadley on 09/08/2016.
 */
import React, { PropTypes } from 'react';
import cx from 'classnames';
import styles from './style/Grid.scss';

export default class GridContainer extends React.Component {
    static propTypes = {
        componentType: PropTypes.string,
        className: PropTypes.string,
        type: PropTypes.oneOf(['content', 'hero'])
    };

    static defaultProps = {
        componentType: 'div',
        type: 'content'
    };

    render() {
        const Component = this.props.componentType;
        const classnames = cx({
            [styles['grid-container']]: true,
            [styles['grid-container--hero']]: this.props.type === 'hero',
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
