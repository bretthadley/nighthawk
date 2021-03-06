import React, { PropTypes } from 'react';
import cx from 'classnames';
import { Grid, GridColumn, GridContainer } from '../Grid';
import StoryListItem from './StoryListItem';
import StoryListAddItem from './StoryListAddItem';

export default class StoryList extends React.Component {
    static propTypes = {
        className: PropTypes.string,
        componentType: PropTypes.string
    };

    static defaultProps = {
        componentType: 'div'
    };

    addStory = (title, description) => {
        this.props.createTask(
            this.props.sprintId,
            { title, description, type: 'story' }
        );
    };

    renderAddNewStory() {
        return (
            <GridColumn>
                <StoryListAddItem addStory={this.addStory} />
            </GridColumn>
        );
    }

    renderStories(story, i) {
        return (
            <GridColumn key={i}>
                <StoryListItem {...story} />
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
                        {this.renderAddNewStory()}
                        {this.props.stories.map(this.renderStories)}
                    </GridContainer>
                </Grid>
            </Component>
        );
    }
}
