import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';

//  -------------------------------------------------------------------

import { store, history } from './store';

//  -------------------------------------------------------------------

import { LandingPage } from './components/landingPage';
import { LoginPage } from './components/loginPage';
import { RegistrationPage } from './components/registrationPage';

//  -------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', function() {
  console.log(store.getState());
  ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <Route path='/' component={LandingPage}></Route>
        <Route path='/login' component={LoginPage}></Route>
        <Route path='/register' component={RegistrationPage}></Route>
      </Router>
    </Provider>,
    document.getElementById('app'));
});
