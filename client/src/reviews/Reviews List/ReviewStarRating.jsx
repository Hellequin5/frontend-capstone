import React from 'react';
import StarRatings from 'react-star-ratings';

const ReviewStarRating = (props) => {
  return (
    <div>
      <StarRatings
      rating= {props.rating}
      starDimension='20px'
      starSpacing='3px'
      />
    </div>
  )
}

export default ReviewStarRating;