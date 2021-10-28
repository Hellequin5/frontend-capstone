import React, {useState} from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_id: []
    }
  }

  render () {
    return (
      <div> This is a Test</div>
    )
  }
}
// const App = function() {
//   return(
//     <div>This is a test!</div>
//   )
// }

// "this is a test commit"
ReactDOM.render(<App />, document.getElementById('app'));