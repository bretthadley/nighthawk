import React, { PropTypes } from 'react';
import cx from 'classnames';
import { Card, CardTitle, CardContent, CardActions } from '../Card';
import { TextInput } from '../TextInput';
import { Cta } from '../Cta';

export default
class StoryListAddItem extends React.Component {
    static propTypes = {
        className: PropTypes.string
    };

    state = {
        title: undefined,
        desc: undefined
    }

    isValid(value) {
        return value !== '' && value !== undefined && value !== null;
    }

    handleAddStory = () => {
        const { title, desc } = this.state;
        if (this.isValid(title)) {
            this.props.addStory(title, desc);
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
                <CardTitle title="Create Story" />
                <CardContent>
                    <TextInput
                        required
                        name="title"
                        id="title"
                        labelText="Story Title"
                        onBlur={this.onFieldChange('title')}
                    />
                    <TextInput
                        componentType="textarea"
                        name="description"
                        id="description"
                        labelText="Story Description"
                        rows="2"
                        onBlur={this.onFieldChange('desc')}
                    />
                </CardContent>
                <CardActions>
                    <Cta ctaType="primary" onClick={this.handleAddStory}>Add Story</Cta>
                </CardActions>
            </Card>
        );
    }
}
