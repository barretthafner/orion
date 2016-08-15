import React from 'react';
import { NavBar } from './nav';

export const LoginPage = React.createClass({
  render() {
    return (
      <div>
       <NavBar />
        <div className="container well">
          <h1>Login</h1>
          <form action="/api/login" method="POST">
            <input type="text" name="username" placeholder="username" />
            <input type="password" name="password" placeholder="password" />
            <input type="submit" value="Login" />
          </form>
        </div>
      </div>
    );
  }
});
