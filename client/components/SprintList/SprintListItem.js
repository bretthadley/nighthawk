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
        const { id, title, description, className } = this.props;
        const classnames = cx({
            [className]: className
        });

        return (
            <Card className={classnames}>
                <CardTitle title={`${id} - ${title}`} />
                <CardContent>
                    <p>{description}</p>
                </CardContent>
            </Card>
        );
    }
}
