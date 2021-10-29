const overviewRoutes = require('./overview')
const questionsRoutes = require('./questions')
const reviewsRoutes = require('./reviews')

const express = require('express');
const axios = require('axios');
const PORT = 10038; //Galvanize NYC zipcode
const API_KEY = require('./config.js')

const app = express();
app.use(express.static(__dirname + '/../client/dist'));

app.get('/starting_product_id', (req, res) => {

  var config = {
    method: 'get',
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-atx/products/',
    headers: {
      'Authorization': API_KEY
    }
  };

  axios(config)
    .then((itemsResponse) => {
      var default_product_id = { 'product_id': itemsResponse.data[0].id };
      res.status(200).json((default_product_id))
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send('There was a problem retrieving a default product_id')
    })
});



app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`)
})