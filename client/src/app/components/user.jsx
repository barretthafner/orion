import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

const UserDashboard = React.createClass({

  render() {
    const props = this.props;
    const displayState = <pre><code>{JSON.stringify(this.props.state, null, 2)}</code></pre>
    return (
      <div className="container well">
        <h1>User Page</h1>
        <div>
          {displayState}
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

const Container = connect(mapStateToProps, mapDispatchToProps)(UserDashboard);
export default Container
