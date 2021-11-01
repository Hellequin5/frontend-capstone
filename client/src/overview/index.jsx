import React, {useContext} from 'react';
import Product_Id_Context from '../context.jsx';

const Overview = (props) => {
  const product_id = useContext(Product_Id_Context);

  return (
    <div>

    Overview Component, Product_id is {product_id}

    </div>
  )
}

module.exports = Overview;