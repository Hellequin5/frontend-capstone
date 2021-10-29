import axios from 'axios';
import API_KEY from './config.js';

var getStartingPid = function() {

  var config = {
    method: 'get',
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-atx/products/',
    headers: {
      'Authorization': API_KEY
    }
  };

  return axios(config)
    .then((itemsResponse) => {
      return new Promise( (resolve, reject) => {
        resolve( itemsResponse.data[0].id );
      });
    })
    .catch((error) => {
      console.log(error);
    })
}

module.exports = getStartingPid;
