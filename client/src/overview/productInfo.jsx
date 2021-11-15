// import React, { useState, useContext } from 'React'
import React, {useContext, useState, useEffect}  from 'react';
import Product_Id_Context from '../context.jsx';
import axios from 'axios'
//import PORT from '../server/server.js';
const PORT = process.env.PORT || 10038;
var baseUrl = process.env.baseURL || "http://fec-buttercup.herokuapp.com:"+PORT;

const ProductInfo = (props) => {
  const product_id = useContext(Product_Id_Context);
  let [productInfo, setProductInfo] = useState({
    category: '',
    name: '',
    description: ''
  })
  // let [category, setCategory] = useState('');
  // let [name, setName] = useState('');
  // let [description, setDescription] = useState('');
  // let [testing, setTesting] = useState({})

  let getProductInfo = () => {
    axios.get(`${baseUrl}/productInfoRequest/${product_id}`)
      .then (productInfo => {
        setProductInfo({
          category: productInfo.data.category,
          name: productInfo.data.name,
          description: productInfo.data.description
        })
        // setCategory(category = productInfo.data.category)
        // setName(name = productInfo.data.name)
        // setDescription(description = productInfo.data.description)
        //setTesting(testing = productInfo.data)
      })
      .catch (error => {
        console.log('failed to get product info')
      })
  }

  useEffect(() => {
    getProductInfo();
  }, [product_id])




  return (
    <div id='productInfo'>
      <div id='productCategory'>
        <p>{productInfo.category}</p>
      </div>
      <div id='productName'>
        <b>{productInfo.name}</b>
      </div>
      <div id='productDescription'>
        <p>{productInfo.description}</p>
      </div>
    </div>
  )
}

export default ProductInfo;


