/**
 * Created by Brett Hadley on 17/08/2016.
 */
import React from 'react';
import { SprintListContainer } from '../containers';

export default function TeamDashboardPage(props) {
    return (
        <div>
            <h1>Team Dashboard Page</h1>
            <SprintListContainer />
            {props.children}
        </div>
    );
}
