import React, { PropTypes } from 'react';
import cx from 'classnames';
import { Card, CardTitle, CardContent, CardActions } from '../Card';
import { TextInput } from '../TextInput';
import { Cta } from '../Cta';

export default
class TaskListAddItem extends React.Component {
    static propTypes = {
        className: PropTypes.string
    };

    state = {
        title: undefined,
        desc: undefined,
        estimatedTime: undefined
    }

    isValid(value) {
        return value !== '' && value !== undefined && value !== null;
    }

    handleAddTask = () => {
        const { title, desc, estimatedTime } = this.state;
        if (this.isValid(title)) {
            this.props.addTask(title, desc, estimatedTime);
        }
    };

    onFieldChange = (type) => (e, value) => {
        this.setState({ [type]: value });
    };

    render() {
        const { className } = this.props;
        const classnames = cx({
            [className]: className
        });

        return (
            <Card className={classnames}>
                <CardTitle title="Create Task" />
                <CardContent>
                    <TextInput
                        required
                        name="title"
                        id="title"
                        labelText="Task Title"
                        onBlur={this.onFieldChange('title')}
                    />
                    <TextInput
                        componentType="textarea"
                        name="description"
                        id="description"
                        labelText="Task Description"
                        rows="2"
                        onBlur={this.onFieldChange('desc')}
                    />
                    <TextInput
                        required
                        name="estimatedTime"
                        id="estimatedTime"
                        labelText="Estimated Time"
                        onBlur={this.onFieldChange('estimatedTime')}
                    />
                </CardContent>
                <CardActions>
                    <Cta ctaType="primary" onClick={this.handleAddTask}>Add Task</Cta>
                </CardActions>
            </Card>
        );
    }
}
