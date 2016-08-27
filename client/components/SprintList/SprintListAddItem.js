/**
 * Created by Brett Hadley on 25/08/2016.
 */
import React, { PropTypes } from 'react';
import cx from 'classnames';
import { Card, CardTitle, CardContent, CardActions } from '../Card';
import { TextInput } from '../TextInput';
import { Cta } from '../Cta';

export default
class SprintList extends React.Component {
    static propTypes = {
        className: PropTypes.string
    };

    isValid(value) {
        return value !== '' && value !== undefined && value !== null;
    }

    handleAddSprint = () => {
        this.props.addSprint();
    };

    render() {
        const { className } = this.props;
        const classnames = cx({
            [className]: className
        });

        return (
            <Card className={classnames}>
                <CardTitle title="Create Sprint" />
                <CardContent>
                    <TextInput
                        required
                        name="title"
                        id="title"
                        labelText="Sprint Title"
                    />
                    <TextInput
                        componentType="textarea"
                        name="description"
                        id="description"
                        labelText="Sprint Description"
                        rows="2"
                    />
                </CardContent>
                <CardActions>
                    <Cta ctaType="primary" onClick={this.handleAddSprint}>Add Sprint</Cta>
                </CardActions>
            </Card>
        );
    }
}
