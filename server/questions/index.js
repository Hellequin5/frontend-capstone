const express = require('express');
const axios = require('axios');
const PORT = 10038; //Galvanize NYC zipcode
const API_KEY = require('../config.js')
const app = express();

module.exports = function(app) {

  app.get('/get_item_questions', (req, res) => {
    //console.log(req);
    var pid = req.query.pid
    console.log('pid is', pid);
    var config = {
      method: 'get',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-atx/qa/questions?product_id=${pid}`,
      headers: {
        'Authorization': API_KEY
      }
    };
    axios(config)
      .then((questionsResponse) => {
        var questions = questionsResponse.data.results;
        // var default_product_id = { 'product_id': itemsResponse.data[0].id };
        res.status(200).json(questions)
        console.log('response was', questions);
      })
      .catch((error) => {
        console.error(error);
        res.status(500).send(`There was a problem retrieving the questions for item#${pid}`)
      })
  });

  console.log('questions finished loading');
}