import React, {useContext, useState, useEffect}  from 'react';
import axios from 'axios'
import OV_Context from './OV_Context.jsx'
import ImageGallery from 'react-image-gallery';
import "../../../node_modules/react-image-gallery/styles/css/image-gallery.css";




const ImageCarousel = (props) => {
  const {productStylesInfo, setProductStylesInfo} = useContext(OV_Context)

  let selectQuantityClick = (quantity) => {
    setProductStylesInfo(prevState => ({
      ...prevState,
      displayQuantity: quantity
    }));
  }

  let quantityArray = (num) => {
    let result = [];

    for (let i = 0; i <= num; i++) {
      if (i === 16) {
        return result
      }
      result.push(i)
    }
    return result;
  }

  return (
    <div className='OV_imageCarousel'>
      <ImageGallery items={productStylesInfo.carouselImages} thumbnailPosition='left'/>
    </div>
  )
}

export default ImageCarousel;