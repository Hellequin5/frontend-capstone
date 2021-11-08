import React from 'react';
import StarRatings from 'react-star-ratings';

const ReviewStarRating = (props) => {
  return (
    <div>
      <StarRatings rating= {props.rating}/>
    </div>
  )
}

export default ReviewStarRating;