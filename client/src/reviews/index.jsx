import React, {useContext} from 'react';
import Product_Id_Context from '../context.jsx';
import ReviewList from './Reviews List/ReviewList.jsx';
import RatingData from './RatingData/RatingData.jsx'

const Reviews = (props) => {
  const product_id = useContext(Product_Id_Context);

  return (
    <div>

    Reviews Component, Product_id is {product_id}
    <RatingData/>
    <ReviewList/>

    </div>
  )
}

module.exports = Reviews;