/**
 * Created by Brett Hadley on 17/08/2016.
 */
import React from 'react';
import { StoryListContainer } from '../containers';

export default function SprintPage(props) {
    if(props.sprint === undefined) {
        return <div></div>
    }
    return (
        <div>
            <h1>Sprint {props.sprint.id}</h1>
            <h3>{props.sprint.title}</h3>
            <h3>{props.sprint.description}</h3>
            <StoryListContainer sprintId={props.sprint.id} />
        </div>
    );
}
