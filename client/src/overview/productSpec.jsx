import React, {useContext, useState, useEffect}  from 'react';
import axios from 'axios'
import OV_Context from './OV_Context.jsx'




const ProductSpec = (props) => {
  const {productInfo, productStylesInfo} = useContext(OV_Context)

  return (
    <div className='OV_productSpec'>
      <div className='OV_productCategory'>
        <p>{productInfo.category}</p>
      </div>
      <div className='OV_productName'>
        <b>{productInfo.name}</b>
      </div>
      <div className='OV_productDescription'>
        <p>{productInfo.description}</p>
      </div>
      <div className='OV_price'>
        <p>{productStylesInfo.price}</p>
      </div>
      <div className='OV_style'>
        <p> <b>STYLE: </b> {productStylesInfo.styleName}</p>
      </div>
    </div>
  )
}

export default ProductSpec;


