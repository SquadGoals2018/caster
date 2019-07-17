import React from 'react';
import { Route, Switch } from 'react-router-dom';

import loadable from 'components/common/loadable/loadable';

const LoadableLoginPage = loadable(() => import('components/login/LoginPage'));
const LoadableSignUpPage = loadable(() => import('components/signUp/SignUp'));
const LoadableEventsPage = loadable(() => import('components/home/events/Events'));

const Router = () => (
  <Switch>
    <Route exact path="/login" component={LoadableLoginPage} />
    <Route exact path="/signup" component={LoadableSignUpPage} />
    <Route exact path="/events" component={LoadableEventsPage} />
  </Switch>
);

export default Router;
