import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import Navbar from './components/navbar';
import Home from './components/home';
import Users from './containers/users';
import UserProfile from './containers/userprofile';

class App extends Component {
  render() {
    return (
      <>
        <HashRouter>
          <Route path='/' component={Navbar} />
          <div className="page">
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/users' exact component={Users} />
              <Route path='/user/:id' exact component={UserProfile} />
            </Switch>
          </div>
        </HashRouter>
      </>
    );
  }
}


export default App;
