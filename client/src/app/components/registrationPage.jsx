import React from 'react';
import { NavBar } from './nav';

export const RegistrationPage = React.createClass({

  onSubmit(event) {
    event.preventDefault()
  },

  render() {
    return (
      <div>
       <NavBar />
        <div class="container well">
          <h1>Sign Up</h1>
          <form action="/api/register" method="POST">
            <input type="text" name="username" placeholder="username" />
            <input type="password" name="password" placeholder="password" />
            <input type="submit" />
          </form>
        </div>
      </div>
    );
  }
});
