import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

const UserList = React.createClass({

  render() {
    const props = this.props;
    const users = this.props.users;

//    let userElements = [];
//    users.map( function(user) {
//            return (
//              <div class="col-md-12">
//                <p><%= user.username %></p>
//                <% if (currentUser && !user._id.equals(currentUser._id)) { %>
//                  <form action="/user/<%= currentUser._id %>/friends/<%= user._id %>" method="POST">
//                    <button class="btn btn-primary">Request Friendship</button>
//                  </form>
//                <% } %>
//              </div>
//            )

    return (
      <div class="container">
        <header class="jumbotron">
          <div class="container">
            <h1>Find your friends!</h1>
          </div>
        </header>

        <div class="row text-center" style="display: flex; flex-wrap: wrap;">
          {
          }
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

  };
};

const Container = connect(mapStateToProps, mapDispatchToProps)(UserList);
export default Container
