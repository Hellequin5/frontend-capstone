// import React, { useState, useContext } from 'React'
import React, {useContext, useState, useEffect}  from 'react';
import Product_Id_Context from '../context.jsx';
import axios from 'axios'
//import PORT from '../server/server.js';
var thePort = process.env.PORT;
if (!thePort) {
  thePort = 10038; //Galvanize NYC zipcode
}
const PORT = thePort;


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
    axios.get(`http://localhost:${PORT}/productInfoRequest/${product_id}`)
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


