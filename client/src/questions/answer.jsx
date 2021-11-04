import React, {useContext}  from 'react';
import Product_Id_Context from '../context.jsx';

const Answer = (props) => {
  const product_id = useContext(Product_Id_Context);
  console.log('Answer passed in is', props.answer);


  return (
    <div>

      <b>A:</b> {props.answer.body}

    </div>
  )
}

module.exports = Answer;