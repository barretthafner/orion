import React from 'react';
import { connect } from 'react-redux';

const AppState = React.createClass({

  render() {
    const props = this.props;
    const displayState = <pre><code>{JSON.stringify(this.props.state, null, 2)}</code></pre>
    return (
      <div className="container well">
        <h1>App State</h1>
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


const Container = connect(mapStateToProps)(AppState);
export default Container
