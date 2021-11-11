import React, {useContext, useState}  from 'react';
import Product_Id_Context from '../context.jsx';
import QuestionWrapper from './questionWrapper.jsx';

const QuestionsBody = (props) => {
  const product_id = useContext(Product_Id_Context);

  //console.log('questions passed in to body are', props.questions);
  //1. SORT BY HELPFULNESS
  var questions_in_view = props.questions.sort((q1, q2) => {
    return q2.question_helpfulness - q1.question_helpfulness;
  })
  //2. APPLY SEARCH FILTER
  //3. TRIM DOWN TO 4/2
  if (props.questions_view === 'partial') {
    questions_in_view = questions_in_view.slice(0, 4);
  }

  return (
    <div>
      {questions_in_view.map((question, index) => {
        var keyVal = question.question_id + 'Q' + index;
        //console.log('keyVal', keyVal);
        return <QuestionWrapper key={keyVal} question={question} />
      })}



    </div>
  )
}

export default QuestionsBody;