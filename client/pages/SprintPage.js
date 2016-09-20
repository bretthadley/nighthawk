/**
 * Created by Brett Hadley on 17/08/2016.
 */
import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import { SprintPlanningContainer } from '../containers';
import { Cta } from '../components/Cta';
import { SPRINT } from '../../common/constants';

const buildStartStopCta = ({ sprint, patchSprint }) => {
    if (sprint.state === SPRINT.COMPLETE) return null;
    const newState = (sprint.state === SPRINT.PLANNING) ? SPRINT.ACTIVE : SPRINT.COMPLETE;
    const text = (sprint.state === SPRINT.PLANNING) ? 'Start Sprint' : 'Finish Sprint';
    const click = () => patchSprint(sprint.id, { state: newState });
    return <Cta onClick={click}>{text}</Cta>;
}

export default class SprintPage extends Component {
    static propTypes = {
        className: PropTypes.string
    };

    static defaultProps = {

    };

    getView(state) {
        if (state === SPRINT.PLANNING) {
            return <SprintPlanningContainer {...this.props} />;
        }

        return null;
    }

    render() {
        const {
            className,
            sprint
        } = this.props;

        const classnames = cx({
            'sprint-page': true,
            [className]: className
        });

        return (
            <div className={classnames}>
                <h1>Sprint {sprint.id} - {sprint.title}</h1>
                <h3>{sprint.description}</h3>
                {this.getView(sprint.state)}
            </div>
        );
    }
}
