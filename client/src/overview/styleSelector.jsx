import React, {useContext, useState, useEffect}  from 'react';
import Product_Id_Context from '../context.jsx';
import axios from 'axios'




const StyleSelector = (props) => {
  const product_id = useContext(Product_Id_Context);
  let [price, setPrice] = useState('');
  let [selectedStyle, setSelectedStyle] = useState('')
  let [styles, setStyles] = useState([])

  let styleSetter = () => {
    axios.get(`http://localhost:10038/productStylesRequest/${product_id}`)
      .then (productStyles => {
        //console.log(productStyles.data)
        setPrice(productStyles.data[0].original_price)
        setSelectedStyle(productStyles.data[0].name)
        //setStyles(productStyles.data)
      })
      .catch (error => {
        console.log('failed to get product styles')
      })
  }


  useEffect(() => {
    styleSetter();
  })


  return (
    <div id='styleSelector'>
      <div id='price'>
        <p>{price}</p>
      </div>
      <div id='style'>
        <p> <b>STYLE: </b> {selectedStyle}</p>
      </div>
      <div id='thumbnails'>
        thumnail images go here
      </div>
    </div>
  )
}

export default StyleSelector;