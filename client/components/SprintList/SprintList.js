/**
 * Created by Brett Hadley on 18/08/2016.
 */
import React, { PropTypes } from 'react';
import cx from 'classnames';
import { Grid, GridColumn, GridContainer } from '../Grid';
import { Card, CardTitle, CardContent } from '../Card';
import { Cta } from '../Cta';

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
    }

    renderAddNewSprint() {
        return (
            <Cta ctaType="primary" onClick={this.addSprint}>Add Sprint</Cta>
        );
    }

    renderSprints(sprint, i) {
        const { title, description } = sprint;
        return (
            <GridColumn key={i} xs="one-quarter">
                <Card>
                    <CardTitle title={title} />
                    <CardContent>
                        <p>{description}</p>
                    </CardContent>
                </Card>
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
                        <GridColumn>
                            {this.renderAddNewSprint()}
                        </GridColumn>
                        {
                            this.props.sprints.map(this.renderSprints)
                        }
                    </GridContainer>
                </Grid>
            </Component>
        );
    }
}
