import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import Navbar from './components/navbar';
import Home from './components/home';
import Users from './containers/users';

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
            </Switch>
          </div>
        </HashRouter>
      </>
    );
  }
}


export default App;
