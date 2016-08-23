/**
 * Created by Brett Hadley on 18/08/2016.
 */
import React, { PropTypes } from 'react';
import cx from 'classnames';
import { Grid, GridColumn } from '../Grid';
import { Card, CardTitle, CardContent } from '../Card';

export default class SprintList extends React.Component {
    static propTypes = {
        className: PropTypes.string,
        componentType: PropTypes.string
    };

    static defaultProps = {
        componentType: 'div'
    };

    renderSprints(sprint, i) {
        const { title, description } = sprint;
        return (
            <Card key={i}>
                <CardTitle title={title} />
                <CardContent>
                    <p>{description}</p>
                </CardContent>
            </Card>
        );
    }

    render() {
        const Component = this.props.componentType;
        const classnames = cx({
            [this.props.className]: this.props.className
        });

        return (
            <Component className={classnames}>
                {
                    this.props.sprints.map(this.renderSprints)
                }
            </Component>
        );
    }
}
