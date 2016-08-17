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
        <li className="list-group-item">
          <p>{item.username}</p>
          <p>Status: {item.status}</p>
          <div className="btn btn-warning">Remove Friend</div>
        </li>
      })
    }

    return (
      <div className="container well">
        <div className="row">
          <div className="col-md-8">
            <p className="lead">{user.username}'s List</p>
            <div className="list-group">
              {user.list.map((item, index) => {
                return ( <li className="list-group-item" key={index}>{item.title}</li> );
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
          <div className="col-md-12">
            <form className="make-inline" onSubmit={this.props.deleteUser}>
              <button className="btn btn-danger">Delete Account</button>
            </form>
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

  };
};

const Container = connect(mapStateToProps, mapDispatchToProps)(Dashboard);
export default Container
