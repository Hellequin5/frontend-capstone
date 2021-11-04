import React, {useContext}  from 'react';
import Product_Id_Context from '../context.jsx';
import AnswerFooter from './answerFooter.jsx';

const Answer = (props) => {
  const product_id = useContext(Product_Id_Context);
  console.log('Answer passed in is', props.answer);


  return (
    <div>

      {props.answer.body}

      <AnswerFooter />

    </div>
  )
}

module.exports = Answer;