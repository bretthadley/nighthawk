import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import styles from './style/Overlay.scss';

let originalBodyOverflow = null;
let lockingCounter = 0;

export default class Overlay extends Component {
    static propTypes = {
        componentType: PropTypes.string,
        className: PropTypes.string,
        theme: PropTypes.string,
        lockScrolling: PropTypes.bool
    };

    static defaultProps = {
        componentType: 'div',
        theme: 'dark'
    };

    componentWillMount() {
        this.locked = false;
    }

    componentDidMount() {
        if (this.props.lock === true) {
            this.preventScrolling();
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.lock !== nextProps.lock) {
            if (nextProps.lock) {
                this.preventScrolling();
            } else {
                this.allowScrolling();
            }
        }
    }

    componentWillUnmount() {
        this.allowScrolling();
    }

    preventScrolling() {
        if (this.locked === true) {
            return;
        }

        lockingCounter += 1;
        this.locked = true;

        // only lock the first time the component is mounted.
        if (lockingCounter === 1) {
            const body = document.getElementsByTagName('body')[0];
            originalBodyOverflow = body.style.overflow;
            body.style.overflow = 'hidden';
        }
    }

    allowScrolling() {
        if (this.locked === true) {
            lockingCounter -= 1;
            this.locked = false;
        }

        if (lockingCounter === 0 && originalBodyOverflow !== null) {
            const body = document.getElementsByTagName('body')[0];
            body.style.overflow = originalBodyOverflow || '';
            originalBodyOverflow = null;
        }
    }

    render() {
        const {
            componentType,
            className,
            theme,
            children,
            lock, // eslint-disable-line
            ...others
        } = this.props;

        const Element = componentType;
        const classnames = cx({
            [styles.overlay]: true,
            [styles[`overlay--${theme}`]]: true,
            [className]: className
        });

        return (
            <Element className={classnames} {...others}>
                {children}
            </Element>
        );
    }
}
