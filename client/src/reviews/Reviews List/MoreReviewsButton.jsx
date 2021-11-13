import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';

const MoreReviewsButton = (props) => {
  let numOfReviews = props.numOfReviews;
  if  (props.numOfReviews === props.currentReviews) {
    return null;
  }
  if(props.numOfReviews >= 2) {
    return (
      <div>
        <Button variant="outline-primary" onClick={() => props.setCurrentReviews()}>MORE REVIEWS</Button>
      </div>
    )
  }
  return null;
}

export default MoreReviewsButton