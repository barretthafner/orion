import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

//  -------------------------------------------------------------------

import reducers from './reducers';
import { LandingPage } from './components/landingPage';
import { LoginPage } from './components/loginPage';
import { RegistrationPage } from './components/registrationPage';

//  -------------------------------------------------------------------


const store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer
  })
);

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
