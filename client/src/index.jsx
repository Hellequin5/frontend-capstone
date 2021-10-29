import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
//import getStartingPid from './getStartingPid.jsx'
import Overview from './overview/index.jsx'
import Questions from './questions/index.jsx'
import Reviews from './reviews/index.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_id: null
    };
    this.singleItemRequest = this.singleItemRequest.bind(this);
    this.getStartingPid = this.getStartingPid.bind(this);
  }

  componentDidMount() {
    this.getStartingPid()
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

 getStartingPid() {
    var config = {
      method: 'get',
      url: 'http://localhost:10038/starting_product_id'
    };

    return axios(config)
      .then((itemsResponse) => {
        return new Promise( (resolve, reject) => {
          resolve( itemsResponse.data.product_id );
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  render () {
    return (
      <div>
        <Overview product_id={this.state.product_id} />
        <Questions product_id={this.state.product_id} />
        <Reviews product_id={this.state.product_id} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));