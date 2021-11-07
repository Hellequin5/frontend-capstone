import React, {useContext, useState, useEffect}  from 'react';
import Product_Id_Context from '../context.jsx';
import axios from 'axios';
import QuestionsSearch from './questionsSearch.jsx';
import QuestionsBody from './questionsBody.jsx';
import QuestionsFooter from './questionsFooter.jsx';

const Questions = (props) => {
  const product_id = useContext(Product_Id_Context);

  var [questions, setQuestions] = useState([]);
  var [questions_view, setQuestionsView] = useState('partial');
  var [answers_view, setAnswersView] = useState('partial');


  //console.log('product_id from context is ', product_id);

  var getQuestions = function(pid, page, count) {

    console.log('pid is', pid);
    //console.log('prod_id is', product_id);
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
        console.log('Questions are: ', resolveQuestions.data)
        questions = resolveQuestions.data;
        setQuestions(questions = resolveQuestions.data)
      })
      .catch((err) => {
        console.error(err);
      })

  }

  var moreAnswersClick = function() {
    if (answers_view === 'partial') {
      setAnswersView('full');
    } else {
      setAnswersView('partial');
    }
  }

  var moreQuestionsClick = function() {
    if (questions_view === 'partial') {
      setQuestionsView('full');
    } else {
      setQuestionsView('partial');
    }
  }

  //console.log('this pid is', product_id)
  useEffect(() => {
    console.log('getting Questions');
    if (product_id) {
      getQuestions(product_id);
    }
  }, [product_id])

  return (
    <div>

    Questions Component Start, Product_id is {product_id}

    <QuestionsSearch />
    <QuestionsBody questions={questions} questions_view={questions_view} answers_view={answers_view} moreAnswersClick={moreAnswersClick}/>
    <QuestionsFooter questions_view={questions_view} moreQuestionsClick={moreQuestionsClick} />

    </div>
  )
}

module.exports = Questions;

/*

<QuestionsSearch>
<QuestionsBody>
-- <Question#1 Wrapper>
--## <Question#1 Question>
--## <Question#1 Answer>
--## <Question#1 Footer>
-- <Question#2 Wrapper>
--## <Question#2 Question>
--##++ <Question#2Question Text>
--##++ <Question#2Question Helpful/Reported>
--## <Question#2 Answers>
--##++ <Question#2Answer#1 Text>  // Should I wrap each answer in its own component?
--##++ <Question#2Answer#1 Images>  // No for now - keeping AnswerText at same level
--##++ <Question#2Answer#2 Text>    // as QuestionText.
--##++ <Question#2Answer#2 Images>
--## <Question#2 Answers Footer>
--## <Question#2 Footer>
--##++ <Question#2 New Answer>
<QuestionsFooter>
-- <New Question>

Revision1: Questions may not have Images - only Answers
Revision2: Many Answers to One Question
Revision3: Helpful/Reported at same level as QuestionText

*/