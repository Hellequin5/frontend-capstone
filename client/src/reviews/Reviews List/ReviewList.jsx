import React, {useState, useContext, useEffect} from 'react';
import Product_Id_Context from '../../context.jsx';
import RR_Context from '../RR_Context.jsx';
import ReviewTile from './ReviewTile.jsx'
import Button from 'react-bootstrap/Button';
import SubmitReviewModal from './SubmitReviewModal.jsx';

const ReviewList = (props) => {
  const ratingContext = useContext(RR_Context);
  const [submissionModal, setSubmissionModal] = React.useState(false);
  let [currentReviews, setCurrentReviews] = React.useState(1);
  const [reviews, setReviews] = React.useState([])

  console.log('this should be context', ratingContext)

  var numOfReviews = 0;
  for (var key in ratingContext[0].ratings) {
    numOfReviews += Number(ratingContext[0].ratings[key])
  }

  const amountOfReviews = (count) => {
    let test = []
    for (var i = 0; i <= count; i++) {
      test.push(ratingContext[1].results[i])
    }
    setReviews(test);
  }
  useEffect(() => {
    amountOfReviews(currentReviews);
  }, [currentReviews, ratingContext])

  return (
    <div>
      {numOfReviews} reviews, sorted by relevence
      <div id={'RR_List'}>
      {reviews.map((value) => {
        return<ReviewTile data={value} key={value ? value.review_id : null}/>
      })}
      </div>
      <Button variant="outline-primary" onClick={() => setCurrentReviews(currentReviews = numOfReviews)}>MORE REVIEWS</Button>{' '}
      <Button variant="outline-primary" onClick={() => setSubmissionModal(true)}>ADD A REVIEW +</Button>
      <SubmitReviewModal
        show={submissionModal}
        onHide={() => setSubmissionModal(false)}
      />
    </div>
  )
}

export default ReviewList