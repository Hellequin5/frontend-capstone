import React, {useContext, useState} from 'react';
import Product_Id_Context from '../../context.jsx';
import Stars from './StarRating.jsx';

const RatingData = (props) => {

  console.log(props);
  return (
    <div>
      Rating Data Component
      <Stars ratings={props.data.ratings}/>
    </div>
  )
}

export default RatingData;