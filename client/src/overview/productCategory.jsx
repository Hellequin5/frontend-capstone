// import React, { useState, useContext } from 'React'
import React, {useContext, useState}  from 'react';
import Product_Id_Context from '../context.jsx';
import axios from 'axios'




const ProductCategory = (props) => {
  const product_id = useContext(Product_Id_Context);
  let [category, setCategory] = useState(null);

  axios.get(`http://localhost:10038/productCategoryRequest/${product_id}`)
    .then (response => {
     console.log(response)
      setCategory(category = response.data.productCategory)
    })
    .catch (error => {
      console.log('failed to get product category')
    })

  return (
    <p>
      {category}
    </p>
  )
}

export default ProductCategory;


