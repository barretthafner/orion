import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router';





const Main = React.createClass({
  render() {
    return (
      <div>
        <h1>Email App</h1>
        {this.props.children}
      </div>
    );
  }
});

//const LandingPage = React.createClass({
//  render() {
//    console.log('bammmmm!, "1"');
//    return (
//      <div>
//        <NavBar />
//        <Jumbotron />
//      </div>
//    );
//  }
//});
//
//const NavBar = React.createClass({
//  render() {
//    let navContent;
//    if (!this.props.currentUser) {
//      navContent = (
//        <ul className="nav navbar-nav navbar-right">
//          <li><a href="/login">Login</a></li>
//          <li><a href="/register">Sign Up</a></li>
//        </ul>
//      );
//    } else {
//      navContent = (
//        <ul className="nav navbar-nav navbar-right">
//          <li><a href="/user/<%= currentUser._id %>">Signed in as: { currentUser.username }</a></li>
//          <li><a href="/logout">Logout</a></li>
//        </ul>
//      );
//    }
//
//    return (
//      <nav className="navbar navbar-default">
//        <div className="container-fluid">
//          <div className="navbar-header">
//            <a className="navbar-brand" href="/">Orion</a>
//          </div>
//          <div className="collapse navbar-collapse">
//            {navContent}
//          </div>
//        </div>
//      </nav>
//    );
//  }
//});
//
//const Jumbotron = React.createClass({
//  render() {
//
//    let user;
//    if(this.props.currentUser) {
//      user = <a className="btn btn-success" href={"/api/user/" + currentUser._id } >Go to List</a>
//    }
//
//    return (
//
//
//      <div className="jumbotron">
//        <h1>Welcome to Orion</h1>
//        <h3>An app to help you get things done with your friends.</h3>
//
//      </div>
//    );
//  }
//});

const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
    </Route>
  </Router>
);

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(routes, document.getElementById('app'));
});

