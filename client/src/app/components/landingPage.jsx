import React from 'react';
import { NavBar } from './nav';

export const LandingPage = React.createClass({
  render() {
    return (
      <div>
        <div className="jumbotron">
          <h1>Welcome to Orion</h1>
          <h3>An app to help you get things done with your friends.</h3>
        </div>
      </div>
    );
  }
});

