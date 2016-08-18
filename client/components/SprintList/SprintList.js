/**
 * Created by Brett Hadley on 18/08/2016.
 */
import React, { PropTypes } from 'react';
import cx from 'classnames';

export default class SprintList extends React.Component {
    static propTypes = {
        className: PropTypes.string,
        componentType: PropTypes.string
    };

    static defaultProps = {
        componentType: 'div'
    };

    render() {
        const Component = this.props.componentType;
        const classnames = cx({
            [this.props.className]: this.props.className
        });

        console.log('===', this.props)

        return (
            <Component className={classnames}>
                {
                    this.props.sprints.map(sprint => (
                        <div>
                            <h2>{sprint.title}</h2>
                            <h3>{sprint.description}</h3>
                        </div>
                    ))
                }
            </Component>
        );
    }
}
