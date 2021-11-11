const reviewsRoutes = require('./reviews')

const express = require('express');
const axios = require('axios');
const PORT = 10038; //Galvanize NYC zipcode
const API_KEY = require('./config.js')

const app = express();
const questionsRoutes = require('./questions')(app)
const overviewRoutes = require('./overview')(app)

app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json());


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

app.get('/productReviews', (req, res) => {
  var config = {
    method: 'get',
    url:`https://app-hrsei-api.herokuapp.com/api/fec2/hr-atx/reviews/`,
    headers: {
      'Authorization': API_KEY
    },
    params: {
      page: req.query.page,
      count: req.query.count,
      sort: req.query.sort,
      product_id: req.query.product_id
    }
  }
    axios(config)
      .then((response) => {
        res.status(200).send(response.data)
      })
      .catch((err) => {
        res.status(404).send('Unable to retrieve Product data')
      })
})

app.get('/productMetaData', (req, res) => {
  var id = req.query.product_id;
  var config = {
    method: 'get',
    url:`https://app-hrsei-api.herokuapp.com/api/fec2/hr-atx/reviews/meta/?product_id=${id}`,
    headers: {
      'Authorization': API_KEY
    }
  };
  axios(config)
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((err) => {
      res.status(500).send('Unable to retrieve product Meta Data');
    })
})

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`)
})