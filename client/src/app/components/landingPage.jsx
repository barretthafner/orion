import React from 'react';
import { NavBar } from './nav';

export const LandingPage = React.createClass({
  render() {

    let user;
    if(this.props.currentUser) {
      user = <a className="btn btn-success" href={"/api/user/" + currentUser._id } >Go to List</a>
    }

    return (
      <div>
        <NavBar />
        <div className="jumbotron">
          <h1>Welcome to Orion</h1>
          <h3>An app to help you get things done with your friends.</h3>
        </div>
      </div>
    );
  }
});

