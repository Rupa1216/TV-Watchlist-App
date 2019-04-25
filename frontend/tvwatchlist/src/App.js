import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';

// ----- PAGES / COMPONENTS
import Navbar from './components/navbar';
import Home from './components/home';
import Users from './containers/users';
import UserProfile from './containers/userprofile';
import ShowPage from './containers/showpage';
import CreateShow from './containers/createshow';
import AllShows from './containers/allshows';


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
              <Route path='/user/post' exact component={CreateShow} />
              <Route path='/user/:id' exact component={UserProfile} />
              <Route path='/show/:id' exact component={ShowPage} />
              <Route path='/shows' exact component={AllShows} />
            </Switch>
          </div>
        </HashRouter>
      </>
    );
  }
}


export default App;
