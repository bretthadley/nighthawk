/**
 * Created by Brett Hadley on 25/08/2016.
 */
import React, { PropTypes } from 'react';
import cx from 'classnames';
import { Card, CardTitle, CardContent } from '../Card';

export default
class SprintListItem extends React.Component {
    static propTypes = {
        className: PropTypes.string
    };

    render() {
        const { id, title, description, stories, className, state } = this.props;
        const classnames = cx({
            [className]: className
        });

        return (
            <Card className={classnames}>
                <CardTitle title={`${id} - ${title}`} linkTo={`/team/s/${id}`} />
                <CardContent>
                    <p>{description}</p>
                    <p>Number of stories: {stories.length}</p>
                    <p>State: {state}</p>
                </CardContent>
            </Card>
        );
    }
}
