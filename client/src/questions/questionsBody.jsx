import React, {useContext}  from 'react';
import Product_Id_Context from '../context.jsx';
import QuestionWrapper from './questionWrapper.jsx';

const QuestionsBody = (props) => {
  const product_id = useContext(Product_Id_Context);



  return (
    <div>

    <QuestionWrapper />
    <QuestionWrapper />
    <QuestionWrapper />
    <QuestionWrapper />

    </div>
  )
}

module.exports = QuestionsBody;