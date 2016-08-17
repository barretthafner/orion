import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

const Dashboard = React.createClass({
  render() {
    const user = this.props.state.app.user;

    let friendsList;
    if (user.friends) {
      friendsList = user.friends.map((item, index) => {
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
            <p className="lead">Friends</p>
            <a className="btn btn-primary" href="/user/">Find More Friends</a>
            <div className="list-group">
              {friendsList}
            </div>
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
