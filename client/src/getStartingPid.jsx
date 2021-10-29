import axios from 'axios';
// import API_KEY from './config.js';

var getStartingPid = function() {

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

module.exports = getStartingPid;
