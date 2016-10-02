import React, { PropTypes } from 'react';
import cx from 'classnames';
import { Card, CardTitle, CardContent } from '../Card';

export default
class StoryListItem extends React.Component {
    static propTypes = {
        className: PropTypes.string
    };

    render() {
        const { id, title, description, className, sprintId } = this.props;
        const classnames = cx({
            [className]: className
        });

        return (
            <Card className={classnames} expandable={true} trigger="click">
                <CardTitle title={`${id} - ${title}`} subtitle={description} linkTo={`/team/s/${sprintId}/t/${id}`} includeInExpanding={false}/>
                <CardContent>
                    <p>{description}</p>
                    <p>{description}</p>
                    <p>{description}</p>
                    <p>{description}</p>
                    <p>{description}</p>
                    <p>{description}</p>
                    <p>{description}</p>
                </CardContent>
            </Card>
        );
    }
}
