import React, {useContext} from 'react';
import Product_Id_Context from '../../context.jsx';
import ReviewTile from './ReviewTile.jsx'

const ReviewList = (props) => {
  console.log(props);
  return (
    <div>
      Review List Component
      <ReviewTile/>
      <ReviewTile/>
    </div>
  )
}

export default ReviewList