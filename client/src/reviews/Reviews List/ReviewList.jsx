import React, {useState, useContext, useEffect} from 'react';
import Product_Id_Context from '../../context.jsx';
import RR_Context from '../RR_Context.jsx';
import ReviewTile from './ReviewTile.jsx'
import Button from 'react-bootstrap/Button';
import SubmitReviewModal from './SubmitReviewModal.jsx';
import MoreReviewsButton from './MoreReviewsButton.jsx';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ReviewList = (props) => {
  const ratingContext = useContext(RR_Context);
  const [submissionModal, setSubmissionModal] = React.useState(false);
  let [currentReviews, setCurrentReviews] = React.useState(1);
  const [reviews, setReviews] = React.useState([])
  let count = 1;

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
  }, [currentReviews, ratingContext, props.filter])

  return (
    <div>
      <div style={{fontWeight: 'bold'}}>
        {numOfReviews} reviews, sorted by
          <select style={{border: 'none', background: 'none', fontWeight: 'bold'}} name='sort' value={props.sortedBy} onChange={props.typeSort}>
            <option value='relevent'>relevence</option>
            <option value='newest'>newest</option>
            <option value='helpful'>helpfulness</option>
          </select>
      </div>

      <div id={'RR_List'}>
      {reviews.map((value, index) => {
        count = count + 1;
        return <ReviewTile data={value} key={value ? value.review_id : count} reviewFilter={props.reviewFilter}/>
      })}
      </div>
      <Container className='mt-2'>

      <MoreReviewsButton
        currentReviews={currentReviews}
        numOfReviews={numOfReviews}
        setCurrentReviews={() => setCurrentReviews(currentReviews=numOfReviews)}
      />

      <Button className='mx-1' variant="outline-primary" onClick={() => setSubmissionModal(true)}>ADD A REVIEW +</Button>
      <SubmitReviewModal
        show={submissionModal}
        onHide={() => setSubmissionModal(false)}
      />

      </Container>
    </div>
  )
}

export default ReviewList