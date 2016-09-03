/**
 * Created by Brett Hadley on 17/08/2016.
 */
import React from 'react';

export default function SprintPage(props) {
    const id = (props.sprint === undefined) ? '' : props.sprint.id;
    return (
        <div>
            <h1>Sprint {id}</h1>
        </div>
    );
}
