import React, {useContext}  from 'react';
import Product_Id_Context from '../context.jsx';

const Questions = (props) => {
  const product_id = useContext(Product_Id_Context);
  return (
    <div>

    Questions Component, Product_id is {product_id}

    </div>
  )
}

module.exports = Questions;