import React, {useContext} from 'react';
import Product_Id_Context from '../../context.jsx';
import ReviewStarRating from './ReviewStarRating.jsx';

const ReviewTile = (props) => {
  console.log(props);
  return (
    <div>
      Review Tile Component
      <ReviewStarRating rating= {props.data.rating} />
    </div>
  )
}

export default ReviewTile