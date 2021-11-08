import React, {useState, useContext} from 'react';
import Product_Id_Context from '../../context.jsx';
import RR_Context from '../RR_Context.jsx';
import ReviewTile from './ReviewTile.jsx'

const ReviewList = (props) => {
  const ratingContext = useContext(RR_Context);
  console.log('this should be context', ratingContext)

  // if (props) {
  //   setReviewData(props.data);
  //   var result = 0;
  //   for (var key of props.metaInfo) {
  //     result += Number(props.metaInfo[key])
  //   }
  //   setNumOfReviews(result);
  // }

  var numOfReviews = 0;
  for (var key in ratingContext[0].ratings) {
    // console.log(Number(ratingContext[0].ratings[key]))
    numOfReviews += Number(ratingContext[0].ratings[key])
  }
  // for (var key of ratingContext[0].ratings) {
  //   numOfReviews =+ ratingContext[0].ratings[key]
  // };

  return (
    <div>
      {numOfReviews} reviews, sorted by relevence
      {ratingContext[1].results.map((value) => {
        return<ReviewTile data={value} key={value.review_id}/>
      })}
    </div>
  )
}

export default ReviewList