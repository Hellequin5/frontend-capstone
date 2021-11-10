import React, {useState, useContext} from 'react';
import Product_Id_Context from '../../context.jsx';
import RR_Context from '../RR_Context.jsx';
import ReviewTile from './ReviewTile.jsx'
import Button from 'react-bootstrap/Button';
import SubmitReviewModal from './SubmitReviewModal.jsx';

const ReviewList = (props) => {
  const ratingContext = useContext(RR_Context);
  const [submissionModal, setSubmissionModal] = React.useState(false);
  console.log('this should be context', ratingContext)

  var numOfReviews = 0;
  for (var key in ratingContext[0].ratings) {
    numOfReviews += Number(ratingContext[0].ratings[key])
  }


  return (
    <div>
      {numOfReviews} reviews, sorted by relevence
      {ratingContext[1].results.map((value) => {
        return<ReviewTile data={value} key={value.review_id}/>
      })}
      <Button variant="outline-primary">MORE REVIEWS</Button>{' '}
      <Button variant="outline-primary" onClick={() => setSubmissionModal(true)}>ADD A REVIEW +</Button>
      <SubmitReviewModal
        show={submissionModal}
        onHide={() => setSubmissionModal(false)}
      />
    </div>
  )
}

export default ReviewList