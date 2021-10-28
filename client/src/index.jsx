import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import API_KEY from './config.js';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_id: null
    };
    this.singleItemRequest = this.singleItemRequest.bind(this);
  }

  componentDidMount() {
    this.singleItemRequest(38322);
  }

  singleItemRequest (id) {
    var config = {
      method:'get',
      url:`https://app-hrsei-api.herokuapp.com/api/fec2/hr-atx/products/${id}`,
      headers: {
        'Authorization': API_KEY
      }
    };

    axios(config)
      .then((resolve) => {
        console.log(resolve.data.id);
        this.setState({
          product_id: resolve.data.id
        })
      })
      .catch((err) => {
        console.error(err);
      })

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