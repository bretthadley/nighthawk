import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import styles from './style/Card.scss';
import { Collapse } from '../Collapse';
import { isOneOf } from '../../utils';

export default class Card extends Component {
    static propTypes = {
        componentType: PropTypes.string,
        className: PropTypes.string,
        headerClassName: PropTypes.string,
        bodyClassName: PropTypes.string,
        onSelect: PropTypes.func,

        // Collapse specific propTypes
        onToggle: PropTypes.func,
        defaultExpanded: PropTypes.bool,
        expandable: PropTypes.bool,
        expanded: React.PropTypes.bool,
        trigger: PropTypes.oneOfType([
            PropTypes.oneOf(['click', 'hover', 'focus']),
            PropTypes.arrayOf(
                PropTypes.oneOf(['click', 'hover', 'focus'])
            )
        ])
    };

    static defaultProps = {
        componentType: 'div',
        defaultExpanded: false,
        trigger: ['click']
    };

    state = {
        expanded: this.props.defaultExpanded
    };

    toggle() {
        this.setState({
            expanded: !this.state.expanded
        });
        if (this.props.onToggle) {
            this.props.onToggle();
        }
    }

    handleAction(type) {
        if (isOneOf(type, this.props.trigger)) {
            if (this.props.expandable) {
                this.toggle();
            } else if (this.props.onSelect) {
                this.props.onSelect();
            }
        }
    }

    handleClick = () => {
        this.handleAction('click');
    };

    handleHover = () => {
        this.handleAction('hover');
    };

    handleFocus = () => {
        this.handleAction('focus');
    };

    handleOnRest = (expanded) => {
        console.log('onRest', expanded);
    };

    formatExpandingChildren(children) {
        let lastChildExpandable = false;

        return React.Children.toArray(children).reduce((acc, currentChild, index) => {
            if (currentChild.props.includeInExpanding) {
                if (lastChildExpandable) {
                    const lastChild = acc[acc.length - 1];

                    return [
                        ...acc.slice(0, -1),
                        React.cloneElement(lastChild, lastChild.props.children, currentChild)
                    ];
                }

                lastChildExpandable = true;

                return [
                    ...acc,
                    <Collapse
                        key={index}
                        expanded={this.state.expanded}
                        onRest={this.handleOnRest}
                    >
                        {currentChild}
                    </Collapse>
                ];
            }

            lastChildExpandable = false;

            return [
                ...acc,
                currentChild
            ];
        }, []);
    }

    renderHeader() {
        const Element = this.props.componentType;
        const classnames = cx({
            [styles.header]: true,
            [this.props.headerClassName]: this.props.headerClassName
        });
        const header = typeof this.props.header === 'string' ? <h3>{this.props.header}</h3> : this.props.header;

        return (
            <Element
                className={classnames}
                onClick={this.handleClick}
                onFocus={this.handleFocus}
                onBlur={this.handleFocus}
                onMouseEnter={this.handleHover}
                onMouseLeave={this.handleHover}
            >
                {header}
            </Element>
        );
    }

    render() {
        const {
            componentType,
            className,
            expandable,
            children
        } = this.props;

        const Element = componentType;
        const classnames = cx({
            [styles.card]: true,
            [className]: className
        });

        const newChildren = expandable ? this.formatExpandingChildren(children) : children;

        return (
            <Element
                className={classnames}
                onClick={this.handleClick}
                onFocus={this.handleFocus}
                onBlur={this.handleFocus}
                onMouseEnter={this.handleHover}
                onMouseLeave={this.handleHover}
            >
                {newChildren}
            </Element>
        );
    }
}
