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

    let userElements = [];

      return (
        <div className="container well">
          <h1 className="row text-center">Find your friends!</h1>
          <div className="row text-center">
          { users.map( (user, index) => {
              return (
                (user.id === currentUserId) ? null :
                  <div className="col-md-4" key={index}>
                    <h2>{user.username}</h2>
                    <form onSubmit={() => this.props.sendFriendRequest(user)}>
                      <button className="btn btn-primary">Request Friendship</button>
                    </form>
                  </div>
              )
            })
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
    getUsersList: () => {
      dispatch(actions.getUsersList());
    },
    sendFriendRequest: (user) => {
      dispatch(actions.sendFriendRequest(user));
    }
  };
};

const Container = connect(mapStateToProps, mapDispatchToProps)(UsersIndex);
export default Container
