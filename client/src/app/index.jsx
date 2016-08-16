import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';

//  -------------------------------------------------------------------

import { store, history } from './store';

//  -------------------------------------------------------------------

import { LandingPage } from './components/landingPage';
import { LoginPage } from './components/loginPage';
import RegistrationPage from './components/registrationPage';
import { UserDashboard } from './components/user';

//  -------------------------------------------------------------------

import { NavBar } from './components/nav';
const App = React.createClass({

  render() {
    return (
      <div>
        <NavBar />
        {this.props.children}
      </div>
    );
  }
});

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <Route path='/' component={App}>
        <IndexRoute component={LandingPage} />
        <Route path='login' component={LoginPage}></Route>
        <Route path='register' component={RegistrationPage}></Route>
        <Route path='dashboard' component={UserDashboard}></Route>
        </Route>
      </Router>
    </Provider>,
    document.getElementById('app'));
});