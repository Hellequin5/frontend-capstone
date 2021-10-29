import React, {useState} from 'react';
import ReactDOM from 'react-dom';
//import API_KEY from './config.js';
import axios from 'axios';
//import getStartingPid from './getStartingPid.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_id: null
    };
    this.singleItemRequest = this.singleItemRequest.bind(this);
  }

  componentDidMount() {
    // getStartingPid()
    // .then((id) => {
    //   this.singleItemRequest(id);
    // })
    // .catch((error) => {
    //   console.log(error);
    // })

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
      .then((resolveProductInfo) => {
        console.log(resolveProductInfo.data.id);
        this.setState({
          product_id: resolveProductInfo.data.id
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