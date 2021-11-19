const express = require('express');
const axios = require('axios');
const PORT = 3000; //Galvanize NYC zipcode
const API_KEY = require('./config.js')
const cors = require ('cors')

const app = express();
const reviewsRoutes = require('./reviews')(app)
const questionsRoutes = require('./questions')(app)
const overviewRoutes = require('./overview')(app)

app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json());
app.use(
  cors({
    origin: '*'
  }));

app.get('/starting_product_id', (req, res) => {
  // var preFlightConfig = {
  //   method: 'options',
  //   url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-atx/products/',
  //   headers: {
  //     'Authorization': API_KEY,
  //     'Access-Control-Allow-Private-Network': true,
  //     'Access-Control-Allow-Methods': '*',
  //     'Access-Control-Allow-Headers': '*',
  //     'Access-Control-Allow-Origin': '*'
  //   }
  // };
  // axios(preFlightConfig)
  //   .then((pfcResponse)=>{



      //THE ACTUAL REQUEST
      var config = {
        method: 'get',
        url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-atx/products/',
        headers: {
          'Authorization': API_KEY,
          'Access-Control-Allow-Methods': '*',
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Origin': '*'
        }
      };
      axios(config)
        .then((itemsResponse) => {
          var default_product_id = { 'product_id': itemsResponse.data[0].id };
          res.headers({'Access-Control-Allow-Methods': '*',
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Origin': '*'})
          res.status(200).json((default_product_id))
        })
        .catch((error) => {
          console.log(error);
          res.status(500).send('There was a problem retrieving a default product_id')
        })
        // END THE ACTUAL REQUEST

//     })
//     .catch((preFlightErr)=>{
//       console.log(preFlightErr);
//     })

});

app.get('/singleItemRequest', (req, res) => {
  var id = req.query.product_id;
  var config = {
    method: 'get',
    url:`https://app-hrsei-api.herokuapp.com/api/fec2/hr-atx/products/${id}`,
    headers: {
      'Authorization': API_KEY
    }
  };
  axios(config)
    .then((productResponse) => {
      var productInfo = { 'product_id': productResponse.data.id };
      //TODO: decide what else to include in the response body besides the id.  All of it?
      res.status(200).json((productInfo))
    })
    .catch((error) => {

      console.log('500 Error (server/server.js)' + error);
      res.status(500).send('There was a problem retrieving a default product_id')
    })
});

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`)
})