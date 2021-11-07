import React, {useContext}  from 'react';
import Product_Id_Context from '../context.jsx';

const QuestionsFooter = (props) => {
  const product_id = useContext(Product_Id_Context);



  return (
    <div>
    <input type='button' value='MORE ANSWERED QUESTIONS' id='more_questions'></input>
    <input type='button' value='ADD A QUESTION' id='add_question'></input>
    </div>
  )
}

module.exports = QuestionsFooter;