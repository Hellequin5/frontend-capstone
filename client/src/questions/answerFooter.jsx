import React, {useContext}  from 'react';
import Product_Id_Context from '../context.jsx';

const AnswerFooter = (props) => {
  const product_id = useContext(Product_Id_Context);



  return (
    <div>

      <i>AnswerFooter</i>

    </div>
  )
}

module.exports = AnswerFooter;