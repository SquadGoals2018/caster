import React from 'react';
import { Route, Switch } from 'react-router-dom';

import loadable from 'components/common/loadable/loadable';

const LoadableLoginPage = loadable(() => import('components/login/Login'));
const LoadableSignUpPage = loadable(() => import('components/signUp/SignUp'));
const LoadablePlansPage = loadable(() => import('components/plans/plans'));
const Router = () => (
  <Switch>
    <Route exact path="/login" component={LoadableLoginPage} />
    <Route exact path="/signup" component={LoadableSignUpPage} />
    <Route exact path="/plans" component={LoadablePlansPage} />
  </Switch>
);

export default Router;
