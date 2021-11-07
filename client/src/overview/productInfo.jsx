// import React, { useState, useContext } from 'React'
import React, {useContext, useState, useEffect}  from 'react';
import Product_Id_Context from '../context.jsx';
import axios from 'axios'




const ProductInfo = (props) => {
  const product_id = useContext(Product_Id_Context);
  let [category, setCategory] = useState('');
  let [name, setName] = useState('');
  let [description, setDescription] = useState('');
  let [testing, setTesting] = useState({})

  let getProductInfo = () => {
    axios.get(`http://localhost:10038/productInfoRequest/${product_id}`)
      .then (productInfo => {
        console.log(productInfo.data)
        setCategory(category = productInfo.data.category)
        setName(name = productInfo.data.name)
        setDescription(description = productInfo.data.description)
        //setTesting(testing = productInfo.data)
      })
      .catch (error => {
        console.log('failed to get product info')
      })
  }

  useEffect(() => {
    getProductInfo();
  })




  return (
    <div id='productInfo'>
      <div id='productCategory'>
        <p>{category}</p>
      </div>
      <div id='productName'>
        <b>{name}</b>
      </div>
      <div id='productDescription'>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default ProductInfo;


