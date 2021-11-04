import React, {useContext} from 'react';
import Product_Id_Context from '../context.jsx';

const Overview = (props) => {
  const product_id = useContext(Product_Id_Context);

  return (
    <div>
      <Reviews/>
      <ProductCategory/>
      <ProductTitle/>
      <ProductPrice/>
      <StyleSelector/>
      <AddToCart/>
      <ProductDescription/>
    </div>
  );
}

module.exports = Overview;