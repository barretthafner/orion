import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

//  -------------------------------------------------------------------

import { LandingPage } from './components/landingPage';
import { LoginPage } from './components/loginPage';
import { RegistrationPage } from './components/registrationPage';

//  -------------------------------------------------------------------

const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={LandingPage}></Route>
    <Route path='/login' component={LoginPage}></Route>
    <Route path='/register' component={RegistrationPage}></Route>
  </Router>
);

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(routes, document.getElementById('app'));
});
