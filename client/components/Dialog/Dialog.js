import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import EventListener from 'react-event-listener';
import keycode from 'keycode';
import { TransitionMotion, spring } from 'react-motion';
import { DisownChildren } from '../DisownChildren';
import { Overlay } from '../Overlay';
// import styles from './style/Dialog.scss';

export default class Dialog extends Component {
    static propTypes = {
        componentType: PropTypes.string,
        className: PropTypes.string,
        open: PropTypes.bool.isRequired,
        onClose: PropTypes.func
    };

    static defaultProps = {
        componentType: 'div',
        overlayDismiss: true
    };

    getStyles() {
        return this.props.open ? [
            {
                key: '1',
                style: {
                    opacity: spring(1)
                },
                data: this.props.children
            }
        ] : [];
    }

    willEnter() {
        return {
            opacity: 0

        };
    }

    willLeave() {
        return {
            opacity: spring(0)
        };
    }

    handleOnClose = () => {
        if (this.props.onClose) {
            this.props.onClose();
        }
    };

    handleOverlayClick = () => {
        if (this.props.overlayDismiss) {
            this.handleOnClose();
        }
    };

    handleKeyUp = (e) => {
        if (keycode(e) === 'esc') {
            this.handleOnClose();
        }
    };

    renderDialogContent = (interpolated) => (
        <DisownChildren>
            {
                interpolated.map(({ key, style, data }) => (
                    <div className="dialog-animation-root">
                        <Overlay
                            lock
                            key={key}
                            onTouchTap={this.handleOverlayClick}
                            style={{
                                opacity: style.opacity
                            }}
                        />
                        <div
                            className="dialog-animation-content-root"
                            style={{
                                ...style
                            }}
                        >
                            {data}
                        </div>
                    </div>
                ))
            }
        </DisownChildren>
    );

    render() {
        const {
            componentType,
            className,
            open
        } = this.props;

        const Element = componentType;
        const classnames = cx({
            [className]: className
        });

        return (
            <Element className={classnames}>
                {
                    open &&
                        <EventListener
                            target="window"
                            onKeyUp={this.handleKeyUp}
                        />
                }
                <TransitionMotion
                    styles={this.getStyles()}
                    willEnter={this.willEnter}
                    willLeave={this.willLeave}
                >
                    {this.renderDialogContent}
                </TransitionMotion>
            </Element>
        );
    }
}
