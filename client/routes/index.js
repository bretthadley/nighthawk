/**
 * Created by brett.hadley on 13/05/2016.
 */
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import {
    AppContainer,
    HomeContainer,
    TeamDashboardContainer,
    SprintContainer
} from '../containers';

const routes = (
    <Route path="/" component={AppContainer}>
        <IndexRoute component={HomeContainer} />
        <Route path="team" component={TeamDashboardContainer} />
        <Route path="team/s/:id" component={SprintContainer} />
    </Route>
);

export default routes;
