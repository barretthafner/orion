import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { NavBar } from './nav';

const RegistrationPage = React.createClass({

  render() {
    const props = this.props;
    return (
      <div className="container well">
        <h1>Sign Up</h1>
        <form onSubmit={
          (event) => {
              event.preventDefault();
              console.log(this);
//                if(!props.state.user) {
//                  props.register({
//                    username: this.refs.username.value,
//                    password: "testy"
//                  });
//                }
            }
          }>
          <label><input ref="email" placeholder="email" /></label>
          <label><input ref="pass" placeholder="password" /></label> (hint: password1)<br />
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
