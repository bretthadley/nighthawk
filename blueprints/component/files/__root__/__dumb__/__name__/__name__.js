import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import styles from './style/<%= pascalEntityName %>.scss';

export default class <%= pascalEntityName %> extends Component {
    static propTypes = {
        example: PropTypes.string
    }

    static defaultProps = {

    }

    render() {
        const classnames = cx({
            [styles.test]: true
        });

        return (
            <div className={classnames}></div>
        );
    }
}
