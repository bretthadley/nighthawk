/**
 * Created by brett.hadley on 17/06/2016.
 */
import React, { PropTypes } from 'react';
import cx from 'classnames';
import styles from './style/Cta.scss';

export default class Cta extends React.Component {
    static propTypes = {
        componentClass: PropTypes.string,
        ctaType: PropTypes.oneOf(['primary', 'secondary', 'tertiary1', 'tertiary2']),
        href: PropTypes.string,
        openInNewTab: PropTypes.bool,
        disabled: PropTypes.bool,
        componentType: PropTypes.string,
        ariaRole: PropTypes.oneOf(['button', 'link'])
    };

    static defaultProps = {
        componentType: 'a',
        ctaType: 'primary',
        ariaRole: 'link'
    };

    render() {
        const Component = this.props.componentType;
        const target = this.props.openInNewTab ? '_blank' : '';
        const cb = this.props.onClick && !this.props.disabled ? this.props.onClick : () => {};
        const href = this.props.href || '#';
        const classnames = cx({
            cta: true,
            [styles.primary]: this.props.ctaType === 'primary',
            [styles.secondary]: this.props.ctaType === 'secondary',
            [styles.disabled]: this.props.disabled,
            [this.props.componentClass]: this.props.componentClass
        });

        return (
            <Component
                role={this.props.ariaRole}
                target={target}
                href={href}
                className={classnames}
                onClick={cb}
            >{this.props.children}</Component>
        );
    }
}
