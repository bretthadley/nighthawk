/**
 * Created by Brett Hadley on 17/08/2016.
 */
import React from 'react';
import { StoryListContainer } from '../containers';
import { Cta } from '../components/Cta';
import { SPRINT } from '../../common/constants';

const buildStartStopCta = ({ sprint, patchSprint }) => {
    if (sprint.state === SPRINT.COMPLETE) return null;
    const newState = (sprint.state === SPRINT.PLANNING) ? SPRINT.ACTIVE : SPRINT.COMPLETE;
    const text = (sprint.state === SPRINT.PLANNING) ? 'Start Sprint' : 'Finish Sprint';
    const click = () => patchSprint(sprint.id, { state: newState });
    return <Cta onClick={click}>{text}</Cta>
}

export default function SprintPage(props) {
    if(props.sprint === undefined) {
        return <div></div>
    }

    return (
        <div>
            <h1>Sprint {props.sprint.id} - {props.sprint.title}</h1>
            <h3>{props.sprint.description}</h3>
            {buildStartStopCta(props)}
            <StoryListContainer sprintId={props.sprint.id} />
        </div>
    );
}
