import React, {useContext}  from 'react';
import Product_Id_Context from '../context.jsx';

const Question = (props) => {
  const product_id = useContext(Product_Id_Context);



  return (
    <div>
      <b>
      Q: {props.text}
      </b>
    </div>
  )
}

module.exports = Question;