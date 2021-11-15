import React, {useContext, useState, useEffect}  from 'react';
import axios from 'axios'
import OV_Context from './OV_Context.jsx'
import Button from 'react-bootstrap/Button'

const AddToCartButton = (props) => {
  const {productStylesInfo} = useContext(OV_Context)

  let checkSize = () => {
    if (productStylesInfo.selectedSize === 'SELECT SIZE') {
      alert('please select a size')
    }
  }


  return (
    <Button variant="primary" onClick={() => checkSize()}>ADD TO CART</Button>
  )
}

    // <div className='OV_addToCart'>
    //     <button type="button" onClick={() => checkSize()}>ADD TO CART</button>
    //   </div>
export default AddToCartButton;