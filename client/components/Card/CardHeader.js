/**
 * Created by brett.hadley on 11/07/2016.
 */
import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import styles from './style/Card.scss';

export default class CardHeader extends Component {
    static propTypes = {
        componentType: PropTypes.string,
        className: PropTypes.string,
        includeInExpanding: PropTypes.bool,
        showExpandCta: PropTypes.bool,
        title: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.node
        ]),
        subtitle: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.node
        ]),
        icon: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.node
        ])
    };

    static defaultProps = {
        componentType: 'div',
        includeInExpanding: false
    };

    renderTitle(title, titleClassName) {
        const classnames = cx({
            [styles.title]: true,
            [titleClassName]: titleClassName
        });

        if (typeof title === 'string') {
            return (
                <h3 className={classnames}>{title}</h3>
            );
        }

        return title;
    }

    renderSubtitle(subtitle, subtitleClassName) {
        const classnames = cx({
            [styles.subtitle]: true,
            [subtitleClassName]: subtitleClassName
        });

        if (typeof subtitle === 'string') {
            return (
                <span className={classnames}>{subtitle}</span>
            );
        }

        return subtitle;
    }

    render() {
        const {
            componentType,
            className,
            titleClassName,
            subtitleClassName,
            title,
            subtitle,
            includeInExpanding, // eslint-disable-line
            children,
            ...others
            } = this.props;
        const Element = componentType;
        const classnames = cx({
            [styles.title]: true,
            [className]: className
        });

        const iconElement = this.renderTitle(title, titleClassName);
        const titleElement = this.renderTitle(title, titleClassName);
        const subtitleElement = this.renderSubtitle(subtitle, subtitleClassName);

        return (
            <Element className={classnames} {...others}>
                {iconElement}
                {titleElement}
                {subtitleElement}
                {children}
            </Element>
        );
    }
}
