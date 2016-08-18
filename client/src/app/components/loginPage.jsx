import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import * as actions from '../actions';

const LoginPage = React.createClass({

  componentWillReceiveProps(nextProps) {
    if (nextProps.state.app.user) {
      this.props.changeLocation('/dashboard');
    }
  },

  render() {
    const props = this.props;
    return (
      <div className="container well">
        <h1>Login</h1>
        <form onSubmit={
          (event) => {
            event.preventDefault();
            props.login({
              username: this.refs.username.value,
              password: this.refs.password.value
            })
          }
        }>
          <label><input type="text" ref="username" placeholder="username" /></label>
          <label><input type="password" ref="password" placeholder="password" /></label>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
});

const mapStateToProps = (state) => {
  return {
    state: state
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (credentials) => {
      dispatch(actions.login(credentials));
    },
    changeLocation: (nextPathname) => {
      dispatch(push(nextPathname));
    },
  };
};

const Container = connect(mapStateToProps, mapDispatchToProps)(LoginPage);
export default Container
