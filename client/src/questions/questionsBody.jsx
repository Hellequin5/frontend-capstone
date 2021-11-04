import React, {useContext}  from 'react';
import Product_Id_Context from '../context.jsx';
import QuestionWrapper from './questionWrapper.jsx';

const QuestionsBody = (props) => {
  const product_id = useContext(Product_Id_Context);

  console.log('questions passed in to body are', props.questions);

  return (
    <div>
      {props.questions.map((question) => {
        return <QuestionWrapper key={question.question_id} question={question}/>
      })}



    </div>
  )
}

module.exports = QuestionsBody;