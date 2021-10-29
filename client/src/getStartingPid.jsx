import axios from 'axios';
import API_KEY from './config.js';

//var axios = require('axios');
var getStartingPid = function(callback) {

  var config = {
    method: 'get',
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-atx/products/',
    headers: {
      'Authorization': API_KEY
    }
  };

  axios(config)
  .then(function (itemsResponse) {
    var id = itemsResponse.data[0].id;
    callback(null, id);
  })
  .catch(function (error) {
    callback(error, null);
  });
}


module.exports = getStartingPid;
