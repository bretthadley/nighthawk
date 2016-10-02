import React, { PropTypes } from 'react';
import cx from 'classnames';
import { Grid, GridColumn, GridContainer } from '../Grid';
import TaskListItem from './TaskListItem';
import TaskListAddItem from './TaskListAddItem';
import { stringToMins } from '../../../common/time';

export default class TaskList extends React.Component {
    static propTypes = {
        className: PropTypes.string,
        componentType: PropTypes.string
    };

    static defaultProps = {
        componentType: 'div'
    };

    addTask = (title, description, estimatedTime) => {
        this.props.createTask(
            this.props.storyId,
            { title, description, type: 'task', estimatedTime: stringToMins(estimatedTime) }
        );
    };

    renderAddNewTask() {
        return (
            <GridColumn xs="one-third" sm="one-quarter">
                <TaskListAddItem addTask={this.addTask} />
            </GridColumn>
        );
    }

    renderTasks(task, i) {
        return (
            <GridColumn key={i} xs="one-third" sm="one-quarter">
                <TaskListItem {...task} />
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
                        {this.renderAddNewTask()}
                        {this.props.tasks.map(this.renderTasks)}
                    </GridContainer>
                </Grid>
            </Component>
        );
    }
}
