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
                  <li className="list-group-item" key={index}>
                    {item.title} - StarValue: {item.starValue} <button className="btn btn-success btn-sm" onClick={ () =>{this.props.completeItem(item._id) } }>Complete</button>
                  </li>
                );
              })}
              <li className="list-group-item">
                <form className="form-inline">
                  <div className="form-group">
                    <label htmlFor="title">Item</label>
                    <input type="text" id="title" className="form-control" ref="title" />
                    <label htmlFor="starValue">Star Value</label>
                    <input type="number" id="starValue" className="form-control" ref="starValue"/>
                    <button className="btn btn-primary" onClick={ (event) =>
                        {
                          event.preventDefault();
                          this.props.addListItem({title: this.refs.title.value, starValue: this.refs.starValue.value})
                          this.refs.title.value = "";
                          this.refs.title.starValue.value = 1;
                        }
                      }>Add item</button>
                  </div>
                </form>

              </li>
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
    },
    addListItem: (itemObj) => {
      dispatch(actions.addListItem(itemObj));
    },
    completeItem: (itemId) => {
      dispatch(actions.completeItem(itemId));
    }
  };
};

const Container = connect(mapStateToProps, mapDispatchToProps)(Dashboard);
export default Container
