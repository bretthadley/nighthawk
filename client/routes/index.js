/**
 * Created by brett.hadley on 13/05/2016.
 */
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import {
    AppContainer,
    HomeContainer,
    TeamDashboardContainer,
    SprintContainer,
    StoryContainer,
} from '../containers';

const routes = (
    <Route path="/" component={AppContainer}>
        <IndexRoute component={HomeContainer} />
        <Route path="team" component={TeamDashboardContainer} />
        <Route path="team/s/:sprintId" component={SprintContainer} />
        <Route path="team/s/:sprintId/t/:taskId" component={StoryContainer} />
    </Route>
);
export default routes;
