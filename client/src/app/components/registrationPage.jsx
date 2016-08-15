import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { NavBar } from './nav';

const RegistrationPage = React.createClass({

  render() {
    const props = this.props;
    return (
      <div>
       <NavBar />
        <div className="container well">
          <h1>Sign Up</h1>
          <form>
            <input type="text" name="username" placeholder="username" />
            <input type="password" name="password" placeholder="password" />
            <input type="submit" onClick={
                (event) => {
                  event.preventDefault();
                  if(!props.state.user) {
                    props.register({
                      username: "test",
                      password: "testy"
                    });
                  }
                }
              }/>
          </form>
        </div>
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
