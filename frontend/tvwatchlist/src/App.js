import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import Navbar from './components/navbar';
import Home from './components/home';

class App extends Component {
  render() {
    return (
      <>
        <HashRouter>
          <Route path='/' component={Navbar} />
          <div className="page">
            <Switch>
              <Route path='/' exact component={Home} />
            </Switch>
          </div>
        </HashRouter>
      </>
    );
  }
}


export default App;
