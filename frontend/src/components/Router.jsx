import React from 'react';
import { Route, Switch } from 'react-router-dom';

import loadable from 'components/common/loadable/loadable';

const LoadableLoginPage = loadable(() => import('components/login/Login'));

const Router = () => (
  <Switch>
    <Route exact path="/login" component={LoadableLoginPage} />
  </Switch>
);

export default Router;
