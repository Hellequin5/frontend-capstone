import React from 'react';
import ReactDOM from 'react-dom';

const App = function() {
  return(
    <div>This is a test!</div>
  )
}

// "this is a test commit"
ReactDOM.render(<App />, document.getElementById('app'));