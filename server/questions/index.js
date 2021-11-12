const express = require('express');
const axios = require('axios');
const PORT = 10038; //Galvanize NYC zipcode
const API_KEY = require('../config.js')
const app = express();
app.use(express.json());

module.exports = function(app) {

  app.get('/get_item_questions', (req, res) => {
    //console.log(req);
    var pid = req.query.pid
    var page = req.query.page
    if (page) {
      page = '&page='+page;
    }
    else {
      page = '';
    }
    var count = req.query.count
    if (count) {
      count = '&count='+count;
    }
    else {
      count = '';
    }
    console.log('pid is', pid);
    var config = {
      method: 'get',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-atx/qa/questions?product_id=${pid}${page}${count}`,
      headers: {
        'Authorization': API_KEY
      }
    };
    axios(config)
      .then((questionsResponse) => {
        var questions = questionsResponse.data.results;
        // var default_product_id = { 'product_id': itemsResponse.data[0].id };
        res.status(200).send(questions)
        //console.log('response was', questions);
      })
      .catch((error) => {
        console.error(error);
        res.status(500).send(`There was a problem retrieving the questions for item#${pid}`)
      })
  });

  app.put('/helpful_question', (req, res) => {
    //console.log(req);
    var qid = req.query.qid.toString();
    console.log('endpoint is', `https://app-hrsei-api.herokuapp.com/api/fec2/hr-atx/qa/questions/${qid}/helpful`)

    //console.log('qid is [', qid, ']');
    var config = {
      method: 'put',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-atx/qa/questions/${qid}/helpful`,
      headers: {
        'Authorization': API_KEY
      }
    };
    axios(config)
      .then((helpfulQuestionResponse) => {
        var questions = helpfulQuestionResponse.data;
        // var default_product_id = { 'product_id': itemsResponse.data[0].id };
        res.status(helpfulQuestionResponse.status).send(questions)
        console.log('helpful question response was "', questions, '" status:', helpfulQuestionResponse.status);
      })
      .catch((error) => {
        console.error(error);
        res.status(500).send(`There was a problem marking question#${qid} as helpful.`)
      })
  });

  app.post('/add_question', (req, res) => {
    //console.log(req);
    //var qid = req.query.qid.toString();
    var my_product_id = parseInt(req.query.product_id);
    var my_body = req.query.body.toString();
    var my_name = req.query.name.toString();
    var my_email = req.query.email.toString();
    console.log('request query is', req.query)
    //console.log('fields are ', product_id, body, name, email);
    var request_body = {
      body : my_body,
      name : my_name,
      email : my_email,
      product_id : my_product_id
    };

    var endpoint = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-atx/qa/questions/`;
    var headers = {
      'Authorization': API_KEY
    };

    axios.post(endpoint, request_body, { headers } )
      .then((addQuestionResponse) => {
        var questions = addQuestionResponse.data;
        res.status(addQuestionResponse.status).send(questions)
        console.log('add question response was "', questions, '" status:', addQuestionResponse.status);
      })
      .catch((error) => {
        console.error(error);
        res.status(500).send(`There was a problem inserting a question.`)
      })



  });

  console.log('questions finished loading');
}