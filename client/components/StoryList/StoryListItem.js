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
            <Card className={classnames}>
                <CardTitle title={`${id} - ${title}`} linkTo={`/team/s/${sprintId}/S-${id}`} />
                <CardContent>
                    <p>{description}</p>
                </CardContent>
            </Card>
        );
    }
}
