// import React, { useState, useContext } from 'React'
import React, {useContext, useState}  from 'react';
import Product_Id_Context from '../context.jsx';
import axios from 'axios'




const ProductName = (props) => {
  const product_id = useContext(Product_Id_Context);
  let [name, setName] = useState(null);

  axios.get(`http://localhost:10038/productNameRequest/${product_id}`)
    .then (response => {
     console.log(response)
      setName(name = response.data.productName)
    })
    .catch (error => {
      console.log('failed to get product category')
    })

  return (
    <p>
      {name}
    </p>
  )
}

export default ProductName;