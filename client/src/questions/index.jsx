import React, {useContext, useState, useEffect}  from 'react';
import util from 'util';
import Product_Id_Context from '../context.jsx';
import axios from 'axios';
import QuestionsSearch from './questionsSearch.jsx';
import QuestionsBody from './questionsBody.jsx';
import QuestionsFooter from './questionsFooter.jsx';

const Questions = (props) => {
  const product_id = useContext(Product_Id_Context);

  var [questions, setQuestions] = useState([]);
  var [actual_questions, setActualQuestions] = useState([]);
  var [questions_view, setQuestionsView] = useState('partial');
  var [questions_page, setQuestionsPage] = useState(1);

  //console.log('product_id from context is ', product_id);

  var getQuestions = function(pid, page, count) {
    //TODO: change callback to promise
    if (pid === undefined) {
      pid = product_id;
    }
    pid = `?pid=${pid}`;
    //console.log('pid is now', pid);
    if (page === undefined) {
      page = 1;
    }
    page = `&page=${page}`
    if (count === undefined) {
      count = 5;
    }
    count = `&count=${count}`
    var debug = `getQuestions called with ${pid} ${page} ${count}`
    console.log(debug)
    var config = {}

    var endpoint = `http://localhost:10038/get_item_questions/${pid}${page}${count}`;
    config = {
      method:'get',
      url:`http://localhost:10038/get_item_questions/${pid}${page}${count}`

      // params: {product_id: id}
    };
    //console.log('endpoint is', endpoint);

    axios(config)
      .then((resolveQuestions) => {
        //console.log('Questions are: ', resolveQuestions.data)
        //questions = resolveQuestions.data;
        var moreQuestions = false;
        resolveQuestions.data.forEach((question) => {
          if(!questions.includes(question)) {
            questionsFilter(questions = questions.concat(resolveQuestions.data));
            moreQuestions = true;
          }
          if (!actual_questions.includes(question)) {
            setActualQuestions(actual_questions = actual_questions.concat(resolveQuestions.data));
            moreQuestions = true;
          }
        })

        console.log('after', debug, 'questions is', actual_questions)
        return new Promise( (resolve, reject) => {
          if (resolveQuestions !== undefined) {
            resolve(moreQuestions);
          } else {
            reject(undefined);
          }
        });
      })
      .catch((err) => {
        console.error(err);
        return new Promise( (resolve, reject) => {
          reject(undefined);
        });
      })

  }

  var moreQuestionsClick = function() {
    if (questions_view === 'partial') {
      console.log('setting to full questions');
      setQuestionsView('full*');
    } else {
      console.log('already full, lets try to get another page of results')
      var qCount = actual_questions.length;
      setQuestionsPage(questions_page = questions_page + 1);
      console.log('questions page is', questions_page);
      //const getQuestionsPromise = util.promisify(getQuestions);
      getQuestions(product_id, questions_page, undefined)
        .then((moreQuestions) => {
          if (moreQuestions) {
            //more results!
            console.log('there were more results!');
            setQuestionsView(questions_view = 'full*')
          } else {
            //no more results
            console.log('there were NOT more results!');
            setQuestionsView('full');
          }
        })
        .catch((err) => {
          console.log('there was an error getting questions!', err);
        })
    }
  }

  var getSearchString = function(searchString) {
    if(searchString.length > 2) {
      var resultant_questions = [];
      for (var k = 0; k < actual_questions.length; k++) {
        if (actual_questions[k].question_body.toLowerCase().includes(searchString.toLowerCase())) {
          resultant_questions.push(actual_questions[k]);
        }
      }
      setQuestions(resultant_questions);
    } else {
      setQuestions(actual_questions);
    }
  }

  var questionsFilter = function(questions) {
    var newQuestions = questions;
    //Do work on questions before saving.  Maybe deleteme?
    setQuestions(newQuestions)
  }

  //console.log('this pid is', product_id)
  useEffect(() => {
    //console.log('getting Questions');
    if (product_id) {
      getQuestions(product_id);
    }
  }, [product_id])

  return (
    <div>

    Questions Component Start, Product_id is {product_id}

    <QuestionsSearch getSearchString={getSearchString}/>
    <QuestionsBody questions={questions} questions_view={questions_view} />
    <QuestionsFooter questions_view={questions_view} moreQuestionsClick={moreQuestionsClick} />

    </div>
  )
}

export default Questions;
