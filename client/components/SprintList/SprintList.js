/**
 * Created by Brett Hadley on 18/08/2016.
 */
import React, { PropTypes } from 'react';
import cx from 'classnames';
import { Grid, GridColumn, GridContainer } from '../Grid';
import SprintListItem from './SprintListItem';
import SprintListAddItem from './SprintListAddItem';

export default class SprintList extends React.Component {
    static propTypes = {
        className: PropTypes.string,
        componentType: PropTypes.string
    };

    static defaultProps = {
        componentType: 'div'
    };

    addSprint = () => {
        const title = 'title';
        const description = 'description';

        this.props.createSprint({
            title,
            description
        });
    };

    renderAddNewSprint() {
        return (
            <GridColumn xs="one-third" sm="one-quarter">
                <SprintListAddItem addSprint={this.addSprint} />
            </GridColumn>
        );
    }

    renderSprints(sprint, i) {
        return (
            <GridColumn key={i} xs="one-third" sm="one-quarter">
                <SprintListItem {...sprint} />
            </GridColumn>
        );
    }

    render() {
        const Component = this.props.componentType;
        const classnames = cx({
            [this.props.className]: this.props.className
        });

        return (
            <Component className={classnames}>
                <Grid smSpacing="8" mdSpacing="16" lgSpacing="24" xlgSpacing="32">
                    <GridContainer>
                        {this.renderAddNewSprint()}
                        {this.props.sprints.map(this.renderSprints)}
                    </GridContainer>
                </Grid>
            </Component>
        );
    }
}
