/**
 * Created by Brett Hadley on 25/08/2016.
 */
import React, { PropTypes } from 'react';
import cx from 'classnames';
import { Card, CardTitle, CardContent } from '../Card';

export default
class SprintList extends React.Component {
    static propTypes = {
        className: PropTypes.string
    };

    render() {
        const { title, description, className } = this.props;
        const classnames = cx({
            [className]: className
        });

        return (
            <Card className={classnames}>
                <CardTitle title={title} />
                <CardContent>
                    <p>{description}</p>
                </CardContent>
            </Card>
        );
    }
}
