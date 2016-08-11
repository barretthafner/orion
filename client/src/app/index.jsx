import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(<Root />, document.getElementById('app'));
});



class Root extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <h1>Hello Chad!</h1>
    );
  }
};

