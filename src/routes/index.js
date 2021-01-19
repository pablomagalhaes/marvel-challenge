import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from "../pages/Home";
import Character from "../containers/Character";
import Favorites from "../pages/Favorites";

const Routes = () => (
  <Switch>
        <Route exact path="/">
            <Home />
          </Route>
          <Route path="/character/:id">
            <Character />
          </Route>
          <Route path="/favorites">
            <Favorites />
        </Route>
  </Switch>
);

export default Routes;
