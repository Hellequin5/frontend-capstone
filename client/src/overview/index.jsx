import React, {useContext} from 'react';
import Product_Id_Context from '../context.jsx';
import ProductCategory from './productCategory.jsx'

//<Reviews/>
/* <ProductCategory/>
<ProductTitle/>
<ProductPrice/>
<StyleSelector/>
<AddToCart/>
<ProductDescription/> */

const Overview = (props) => {
  // const product_id = useContext(Product_Id_Context);

  return (
    <div>
      <ProductCategory/>
    </div>
  );
}

module.exports = Overview;