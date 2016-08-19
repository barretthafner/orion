import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

const UsersIndex = React.createClass({

  componentDidMount() {
    this.props.getUsersList();
  },

  render() {
    const props = this.props;
    const currentUserId = this.props.state.app.user.id;
    const users = this.props.state.app.usersList;
    const friendships = this.props.state.app.user.friendships;

    let userElements = [];

    let index = 0;
    users.forEach((user) => {
      if (user.id !== currentUserId) {
        let output = (
          <div className="col-md-4" key={index}>
            <h2>{user.username}</h2>
              <button className="btn btn-primary" onClick={() => this.props.sendFriendRequest(user.id)}>Request Friendship</button>
          </div>
        );
        friendships.forEach((friend) => {
          if (friend._id === user.id) {
            output = (
              <div className="col-md-4" key={index}>
                <h2>{user.username}</h2>
                  <button className="btn" disabled={true}>Request Sent</button>
              </div>
            );
          }
        });
        userElements.push(output);
        index++;
      }
    });

//            { users.map( (user, index) => {
//            return (
//              (user.id === currentUserId) ? null :
//                <div className="col-md-4" key={index}>
//                  <h2>{user.username}</h2>
//                    <button className="btn btn-primary" onClick={() => this.props.sendFriendRequest(user.id)}>Request Friendship</button>
//                </div>
//            )
//          })
//        }


    return (
      <div className="container well">
        <h1 className="row text-center">Find your friends!</h1>
        <div className="row text-center">
          {userElements}
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
    getUsersList: () => {
      dispatch(actions.getUsersList());
    },
    sendFriendRequest: (friendId) => {
      dispatch(actions.sendFriendRequest(friendId));
    }
  };
};

const Container = connect(mapStateToProps, mapDispatchToProps)(UsersIndex);
export default Container
