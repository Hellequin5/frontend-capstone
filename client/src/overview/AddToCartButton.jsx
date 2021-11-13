import React, {useContext, useState, useEffect}  from 'react';
import axios from 'axios'
import OV_Context from './OV_Context.jsx'

const AddToCartButton = (props) => {
  const {productStylesInfo} = useContext(OV_Context)

  let checkSize = () => {
    if (productStylesInfo.selectedSize === 'SELECT SIZE') {
      alert('please select a size')
    }
  }


  return (
    <div className='OV_addToCart'>
        <button type="button" onClick={() => checkSize()}>ADD TO CART</button>
      </div>
  )
}

export default AddToCartButton;