import React, { Component, PropTypes } from 'react';
import { Motion, spring } from 'react-motion';
import Measure from 'react-measure';
import cx from 'classnames';
// import styles from './style/Collapse.scss';

export default class Collapse extends Component {
    static propTypes = {
        componentType: PropTypes.string,
        className: PropTypes.string,
        expanded: PropTypes.bool,
        onRest: PropTypes.func,
        height: PropTypes.number
    };

    static defaultProps = {
        componentType: 'div',
        expanded: false
    };

    handleOnRest = () => {
        if (this.props.onRest) {
            this.props.onRest(this.props.expanded);
        }
    };

    handleMeasure = ({ height }) => {
        if (this.props.height) {
            this.setState({
                height: this.props.height
            });
        } else {
            this.setState({
                height
            });
        }
    };

    render() {
        const {
            onRest, //eslint-disable-line
            children,
            className,
            componentType,
            expanded,
            ...others
        } = this.props;

        const Element = componentType;
        const classnames = cx({
            [className]: className
        });

        const content = <Measure onMeasure={this.handleMeasure}><div>{children}</div></Measure>;

        return (
            <Element className={classnames} {...others}>
                <Motion
                    style={{ height: spring(expanded ? this.state.height : 0) }}
                    onRest={this.handleOnRest}
                >
                    {({ height }) =>
                        <div className="motion-collapse" style={{ height: `${height}px`, overflow: 'hidden' }}>
                            {content}
                        </div>
                    }
                </Motion>
            </Element>
        );
    }
}
