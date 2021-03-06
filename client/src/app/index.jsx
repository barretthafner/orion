import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';

//  -------------------------------------------------------------------

import { store, history } from './store';
import * as actions from './actions';

//  -------------------------------------------------------------------

import LandingPage from './components/landingPage';
import LoginPage from './components/loginPage';
import RegistrationPage from './components/registrationPage';
import Dashboard from './components/dashboard';
import AppState from './components/state';
import UsersIndex from './components/usersList';

//  -------------------------------------------------------------------

import NavBar from './components/nav';
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


function requireAuth(nextState, replace) {
  const state = store.getState();
  if (!state.app.user) {
    replace('/login');
  }
};

function handleOnLogout(nextState, replace) {
  const state = store.getState();
  if (!state.app.user) {
    replace('/login');
  } else {
    store.dispatch(actions.logout());
    replace('/');
  }
}

function handleUserDelete(nextState, replace) {
  const state = store.getState();
  if (!state.app.user) {
    replace('/login');
  } else {
    store.dispatch(actions.deleteCurrentUser(state.app.user));
    replace('/');
  }
}


document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <Route path='/' component={App}>
          <IndexRoute component={LandingPage} />
          <Route path='login' component={LoginPage}></Route>
          <Route path='register' component={RegistrationPage}></Route>
          <Route path='logout' onEnter={handleOnLogout}></Route>
          <Route path='dashboard' component={Dashboard} onEnter={requireAuth}></Route>
          <Route path='users' component={UsersIndex}  onEnter={requireAuth}></Route>
          <Route path='delete' onEnter={handleUserDelete}></Route>
          <Route path='state' component={AppState}></Route>
        </Route>
      </Router>
    </Provider>,
    document.getElementById('app'));
});
