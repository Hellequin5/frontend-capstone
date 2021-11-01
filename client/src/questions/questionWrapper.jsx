import React, {useContext}  from 'react';
import Product_Id_Context from '../context.jsx';
import Question from './question.jsx';
import Answer from './answer.jsx';
import QuestionFooter from './questionFooter.jsx';

const QuestionWrapper = (props) => {
  const product_id = useContext(Product_Id_Context);



  return (
    <div>
    <Question />
    <Answer />
    <QuestionFooter />

    </div>
  )
}

module.exports = QuestionWrapper;