import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import getStartingPid from './getStartingPid.jsx'
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
      <div>
        <Overview />
        <Questions />
        <Reviews />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));