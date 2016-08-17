import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

const NavBar = React.createClass({
  render() {
    let navContent;
    const state = this.props.state.app;
    if (!state.user) {
      navContent = (
        <ul className="nav navbar-nav navbar-right">
          <li><Link to={'/login'}>Login</Link></li>
          <li><Link to={'/register'}>Sign Up</Link></li>
        </ul>
      );
    } else {
      navContent = (
        <ul className="nav navbar-nav navbar-right">
          <li><Link to={'/dashboard'}>Signed in as: { state.user.username }</Link></li>
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

const mapStateToProps = (state) => {
  return {
    state: state
  };
};

const Container = connect(mapStateToProps)(NavBar);
export default Container

