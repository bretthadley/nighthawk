import React, { PropTypes } from 'react';
import cx from 'classnames';
import { Card, CardTitle, CardContent } from '../Card';
import TaskListItem from '../TaskList/TaskListItem';
import TaskListAddItem from '../TaskList/TaskListAddItem'

export default
class StoryListItem extends React.Component {
    static propTypes = {
        className: PropTypes.string
    };

    renderTask(task, i) {
        return <TaskListItem key={i} {...task} />
    }

    renderAddNewTask() {
        return <TaskListAddItem addTask={this.addTask} />
    }

    addTask (title, description, estimatedTime) {
        this.props.createTask(
            this.props.storyId,
            { title, description, type: 'task', estimatedTime: stringToMins(estimatedTime) }
        );
    }

    render() {
        const { id, title, description, className, sprintId, tasks } = this.props;
        const classnames = cx({
            [className]: className
        });

        return (
            <Card className={classnames} expandable={true} trigger="click">
                <CardTitle title={`${id} - ${title}`} subtitle={description} linkTo={`/team/s/${sprintId}/t/${id}`} includeInExpanding={false}/>
                <CardContent>
                    {this.renderAddNewTask()}
                    {tasks.map(this.renderTask)}
                </CardContent>
            </Card>
        );
    }
}
