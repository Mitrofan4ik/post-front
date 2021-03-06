import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from 'components/pages/HomePage';

const Router = () => {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
    </Switch>
  );
};

export default Router;
