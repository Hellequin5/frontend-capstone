console.log('Reviews routes loaded');
const express = require('express');
const axios = require('axios');
const PORT = 3000;
const API_KEY = require('../config.js');
const app = express();

module.exports = function(app) {
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

  app.put('/reviews', (req, res) => {
    var id = req.query.review_id;
    var type = req.query.type;
    var config = {
      method: 'put',
      url:`https://app-hrsei-api.herokuapp.com/api/fec2/hr-atx/reviews/${id}/${type}`,
      headers: {
        'Authorization': API_KEY
      }
    };
    axios(config)
      .then((response) => {
        res.status(204).send('request accepted')
      })
      .catch((err) => {
        res.status(500).send('request failed')
      })
  })
}