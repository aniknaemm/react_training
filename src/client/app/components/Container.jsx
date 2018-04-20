import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './Main.jsx';
import News from './News.jsx';
import Profile from './Profile.jsx';

export default class Container extends Component {
  render() {
    return (
      <div className="container">
        <Switch>
          <Route exact path='/' component={Main} />
          <Route path='/news' component={News} />
          <Route path='/profile' component={Profile} />
        </Switch>
      </div>
    )
  }
}