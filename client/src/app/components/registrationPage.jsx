import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

const RegistrationPage = React.createClass({

  render() {
    const props = this.props;
    return (
      <div className="container well">
        <h1>Sign Up</h1>
        <form onSubmit={
          (event) => {
              event.preventDefault();
                if(!props.state.user) {
                  props.register({
                    username: this.refs.username.value,
                    password: this.refs.password.value
                  });
                }
            }
          }>
          <label><input ref="username" placeholder="username" /></label>
          <label><input ref="password" placeholder="password" /></label> (hint: password1)<br />
          <button type="submit">Submit</button>
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
    register: (credentials) => {
      dispatch(actions.register(credentials));
    }
  };
};

const Container = connect(mapStateToProps, mapDispatchToProps)(RegistrationPage);
export default Container
