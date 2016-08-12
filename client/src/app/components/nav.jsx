import React from 'react';
import { Link } from 'react-router';

export const NavBar = React.createClass({
  render() {
    let navContent;
    if (!this.props.currentUser) {
      navContent = (
        <ul className="nav navbar-nav navbar-right">
          <li><Link to={'/login'}>Login</Link></li>
          <li><Link to={'/register'}>Sign Up</Link></li>
        </ul>
      );
    } else {
      navContent = (
        <ul className="nav navbar-nav navbar-right">
          <li><Link to={'/user/currentUser._id'}>Signed in as: { currentUser.username }</Link></li>
          <li><Link to={'/logout'}>Logout</Link></li>
        </ul>
      );
    }
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link className="navbar-brand" to={'/'}>Orion</Link>
          </div>
          <div className="collapse navbar-collapse">
            {navContent}
          </div>
        </div>
      </nav>
    );
  }
});
