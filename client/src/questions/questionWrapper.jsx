import React, {useContext}  from 'react';
import Product_Id_Context from '../context.jsx';
import Question from './question.jsx';
import Answer from './answer.jsx';
import QuestionFooter from './questionFooter.jsx';

const QuestionWrapper = (props) => {
  const product_id = useContext(Product_Id_Context);
  console.log('Question passed in to wrapper is', props.question);
  var answers = [];
  if (props.question.answers) {
    for (var key in props.question.answers) {
      answers.push(props.question.answers[key])
    }
  }
  console.log('answers is', answers);



  return (
    <div>



    <Question text={props.question.question_body}/>


    {answers.map((answer) => {
      return <Answer answer={answer} key={answer.id} />
    })}

    <QuestionFooter />

    </div>
  )
}

module.exports = QuestionWrapper;