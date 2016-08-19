import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as actions from '../actions';

const Dashboard = React.createClass({
  render() {
    const user = this.props.state.app.user;

    let friendshipsList;
    if (user.friendships) {
      friendshipsList = user.friendships.map((item, index) => {
        return (
          <li className="list-group-item" key={index}>
            <p>{item.friend.username}</p>
            <p>Status: {item.status}</p>
            <div className="btn btn-warning" onClick={
                () => this.props.unFriend(item.friend)
              }>Remove Friend</div>
          </li>
        );
      });
    }

    return (
      <div className="container well">
        <div className="row">
          <div className="col-md-8">
            <p className="lead">{user.username}'s List</p>
            <div className="list-group">
              {user.list.map((item, index) => {
                return (
                  <li className="list-group-item" key={index} data-value={item.starValue}>
                    {item.title} - StarValue: {item.starValue} <button className="btn btn-success btn-sm">Complete</button>
                  </li>
                );
              })}
            </div>
          </div>
          <div className="col-md-4">
            <p className="lead">Star Score</p>
            <div className="list-group">
                <li className="list-group-item">{user.starScore}</li>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <p className="lead">Friendships</p>
            <Link className="btn btn-primary" to={'/users'}>Find More Friends</Link>
            <div className="list-group">
              {friendshipsList}
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div className="row">
          <div className="col-md-12 text-center">
            <Link className="btn btn-danger" to={'delete'}>Delete Account</Link>
          </div>
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
    deleteCurrentUser: (user) => {
      dispatch(actions.deleteCurrentUser(user));
    },
    unFriend: (friend) => {
      dispatch(actions.unFriend(friend));
    }
  };
};

const Container = connect(mapStateToProps, mapDispatchToProps)(Dashboard);
export default Container
