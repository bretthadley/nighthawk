import React, { PropTypes } from 'react';
import cx from 'classnames';
import { Card, CardTitle, CardContent } from '../Card';
import { minsToString } from '../../../common/time';

export default class TaskListItem extends React.Component {
    static propTypes = {
        className: PropTypes.string
    };

    render() {
        const { id, title, description, estimatedTime, loggedTime, className } = this.props;
        const classnames = cx({
            [className]: className
        });

        return (
            <Card className={classnames}>
                <CardTitle title={`${id} - ${title}`} />
                <CardContent>
                    <p>{description}</p>
                    <p>Estimated Time: {minsToString(estimatedTime)}</p>
                    <p>Logged Time: {minsToString(loggedTime)}</p>
                </CardContent>
            </Card>
        );
    }
}
