import React, {useState} from 'react';
import ReactDOM from 'react-dom';
//import API_KEY from './config.js';
import axios from 'axios';
import getStartingPid from './getStartingPid.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_id: null
    };
    this.singleItemRequest = this.singleItemRequest.bind(this);
  }

  componentDidMount() {
    getStartingPid()
    .then((id) => {
      this.setState({
        product_id: id
      })
    })
    .catch((error) => {
      console.log(error);
    })

    //example usage for SIR
    //this.singleItemRequest(38322);
  }

  singleItemRequest (id) {
    var config = {
      method:'get',
      url:`http://localhost:10038/singleItemRequest`,
      params: {product_id: id}
    };
    axios(config)
      .then((resolveProductInfo) => {
        this.setState({
          product_id: resolveProductInfo.data.product_id
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

ReactDOM.render(<App />, document.getElementById('app'));