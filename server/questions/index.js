const express = require('express');
const axios = require('axios');
const PORT = 10038; //Galvanize NYC zipcode
const API_KEY = require('../config.js')
const app = express();
app.use(express.json());

module.exports = function(app) {

  app.get('/get_item_questions', (req, res) => {
    //console.log(req);
    var pid = req.query.pid;
    var page = req.query.page;
    (page) ? page = '&page='+page : page = '';
    var count = req.query.count;
    (count) ? count = '&count='+count : count = '';

    var endpoint =  `https://app-hrsei-api.herokuapp.com/api/fec2/hr-atx/qa/questions?product_id=${pid}${page}${count}`;

    console.log('get endpoint is', endpoint);
    var config = {
      method: 'get',
      url: endpoint,
      headers: {
        'Authorization': API_KEY
      }
    };
    axios(config)
      .then((questionsResponse) => {
        var questions = questionsResponse.data.results;
        res.status(200).send(questions)
      })
      .catch((error) => {
        console.error(error);
        res.status(500).send(`There was a problem retrieving the questions for item#${pid}`)
      })
  });

  app.get('/get_item_name', (req, res) => {
    var pid = req.query.pid;
    var endpoint =  `https://app-hrsei-api.herokuapp.com/api/fec2/hr-atx/products/${pid}`;

    console.log('get endpoint is', endpoint);
    var config = {
      method: 'get',
      url: endpoint,
      headers: {
        'Authorization': API_KEY
      }
    };
    axios(config)
      .then((nameResponse) => {
        var name = nameResponse.data.name;
        res.status(200).send(name)
      })
      .catch((error) => {
        console.error(error);
        res.status(500).send(`There was a problem retrieving the name for item#${pid}`)
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
        res.status(helpfulQuestionResponse.status).send(questions)
        console.log('helpful question response was "', questions, '" status:', helpfulQuestionResponse.status);
      })
      .catch((error) => {
        console.error(error);
        res.status(500).send(`There was a problem marking question#${qid} as helpful.`)
      })
  });

  app.put('/helpful_answer', (req, res) => {
    //console.log(req);
    var aid = req.query.aid.toString();
    console.log('endpoint is', `https://app-hrsei-api.herokuapp.com/api/fec2/hr-atx/qa/answers/${aid}/helpful`)

    //console.log('qid is [', qid, ']');
    var config = {
      method: 'put',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-atx/qa/answers/${aid}/helpful`,
      headers: {
        'Authorization': API_KEY
      }
    };
    axios(config)
      .then((helpfulAnswerResponse) => {
        var response = helpfulAnswerResponse.data;
        res.status(helpfulAnswerResponse.status).send(response)
        console.log('helpful question response was "', response, '" status:', helpfulAnswerResponse.status);
      })
      .catch((error) => {
        console.error(error);
        res.status(500).send(`There was a problem marking answer#${aid} as helpful.`)
      })
  });

  app.put('/report_answer', (req, res) => {
    //console.log(req);
    var aid = req.query.aid.toString();
    console.log('endpoint is', `https://app-hrsei-api.herokuapp.com/api/fec2/hr-atx/qa/answers/${aid}/report`)

    //console.log('qid is [', qid, ']');
    var config = {
      method: 'put',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-atx/qa/answers/${aid}/report`,
      headers: {
        'Authorization': API_KEY
      }
    };
    axios(config)
      .then((reportedAnswerResponse) => {
        var response = reportedAnswerResponse.data;
        res.status(reportedAnswerResponse.status).send(response)
        console.log('helpful question response was "', response, '" status:', reportedAnswerResponse.status);
      })
      .catch((error) => {
        console.error(error);
        res.status(500).send(`There was a problem marking answer#${aid} as reported.`)
      })
  });

  app.post('/add_question', (req, res) => {
    var my_product_id = parseInt(req.query.product_id);
    var my_body = req.query.body.toString();
    var my_name = req.query.name.toString();
    var my_email = req.query.email.toString();

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
      })
      .catch((error) => {
        console.error(error);
        res.status(500).send(`There was a problem inserting a question.`)
      })
  });

  app.post('/add_answer', (req, res) => {
    var qid = parseInt(req.query.qid);
    var my_body = req.query.body.toString();
    var my_name = req.query.name.toString();
    var my_email = req.query.email.toString();

    var request_body = {
      body : my_body,
      name : my_name,
      email : my_email
    };
    var params = {
      question_id: qid
    }
    var endpoint = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-atx/qa/questions/${qid}/answers`;
    var headers = {
      'Authorization': API_KEY
    };

    axios.post(endpoint, request_body, { headers, params } )
      .then((addAnswerResponse) => {
        var answers = addAnswerResponse.data;
        res.status(addAnswerResponse.status).send(answers)
      })
      .catch((error) => {
        console.error(error);
        res.status(500).send(`There was a problem inserting that answer.`)
      })
  });



  console.log('questions routes finished loading');
}