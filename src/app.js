import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './views/home'
import './base.scss';

export const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </div>
  );
}
