import React from 'react';
import { connect } from 'react-redux';

const LandingPage = React.createClass({
  render() {
    return (
      <div className="jumbotron">
        <h1>Welcome to Orion</h1>
        <h3>An app to help you get things done with your friends.</h3>
      </div>
    );
  }
});

const mapStateToProps = (state) => {
  return {
    state: state
  };
};

const Container = connect(mapStateToProps)(LandingPage);
export default Container
